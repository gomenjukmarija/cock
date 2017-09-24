<?php
namespace App\Http\Controllers\Admin;
use App\BlogPostTag;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Repositories\Contracts\BlogPostCategoryRepoInterface;
use App\Repositories\Contracts\BlogPostRepoInterface;
use App\Repositories\Contracts\TagRepoInterface;
use Illuminate\Http\Request;
use App\BlogPost;
use Validator;
use Response;
class BlogPostsController extends Controller
{
    private $post;
    private $category;
    public function __construct(BlogPostRepoInterface $post, BlogPostCategoryRepoInterface $category, BlogPostTag $blog_post_tag, TagRepoInterface $tag)
    {
        parent::__construct();
        $this->post = $post;
        $this->category = $category;
        $this->blog_post_tag = $blog_post_tag;
        $this->tag = $tag;
    }
    public function index(Request $request)
    {
        $filters = $request->all();
        $posts = $this->post->applyFilters($filters);
        return $this->response
            ->setData(false, $posts)
            ->get();
    }
    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'title' => 'required|max:100',
            'short_description' => 'required|max:200',
            'content' => 'required',
            'category_id' => 'required',
            'selected_app_id' => 'required',
            "url" => 'required|unique:blog_posts|max:255',
            'tags' => 'string',
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $post = $this->post->create([
            'share_img' => $request->share_img,
            'title_img_path' => $request->share_img,
            'title' => $request->title,
            'short_description' => $request->short_description,
            'content' => $request->content,
            'category_id' => $request->category_id,
            'user_author_id' => $request->user()->id,
            'app_id' => $request->selected_app_id,
            'img_title_path' => '',
            'url' => $request->url,
            'meta_description' => $request->short_description,
        ]);
        if ($request->tags == '') {
            return $this->response->setAlerts('New post added!')->get();
        }
        $tags = explode(',', $request->tags);
        $tags = array_unique($tags);
        foreach ($tags as $key => $tag_in_arr) {
            $tag = $this->tag->model()->where('name', 'LIKE', '%'.$tag_in_arr.'%');
            $tag = $tag->count() < 1 ? $this->tag->model()->create([ 'name' => $tag_in_arr ])->id : $tag->value('id');
            $data[] = [ 'blog_post_id' => $post->id, 'tag_id' => $tag ];
        }
        $this->blog_post_tag->insert($data);
        return $this->response->setAlerts('New post added!')->setData('', $post->toArray())->get();
    }
    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $input = $request->all();
        $input_data = array_get($input,'typed');
        $updating_post = BlogPost::find($id);
        if ($input_data) {
            foreach ($input_data as $key => $value) {
                $updating_post->$key = $value;
            }
        }
        $updating_post['meta_description'] = $updating_post['short_description'];
        $updating_post['title_img_path'] = $updating_post['share_img'];
        $updating_post->save();
        return $this->response
            ->setData(false, $updating_post)
            ->setAlerts('Post was updated')
            ->get();
//        $input = $request->all();
//        $validator = Validator::make($input['info'], [
//            'id' => 'required|integer',
//            'title' => 'required|max:100',
//            'short_description' => 'required|max:200',
//            'content' => 'required',
//            'category_id' => 'required',
//            'selected_app_id' => 'required'
//        ]);
//
//        if ($validator->fails()) {
//            dd($validator->messages());
//            return $this->response->setErrors($validator->messages())->get();
//        }
//
//        $data = $request->all();
//        $tags_str = array_pop($data['info']);
//        $data['info']['app_id'] = $data['info']['selected_app_id'];
//        unset($data['info']['selected_app_id']);
//        $k = $this->post->model()->where('id', $id)->update($data['info']);
//        $this->blog_post_tag->where('blog_post_id', $id)->delete();
//
//        if ($tags_str == '') {
//            return $this->response->setAlerts('Post successfully edited!')->get();
//        }
//
//        if (preg_match('/,/', $tags_str) == 1) {
//            $tags = explode(',', trim($tags_str));
//            $tags = array_unique($tags);
//
//            foreach ($tags as $key => $tag_in_arr) {
//                $tag = $this->tag->model()->where('name', 'LIKE', '%'.$tag_in_arr.'%');
//
//                if ($tag->count() < 1) {
//                    $tag = $this->tag->model()->create([ 'name' => $tag_in_arr ]);
//                    $tag = $tag->id;
//                } else {
//                    $tag = $tag->value('id');
//                }
//
//                $new_tag_data[] = [ 'blog_post_id' => $id, 'tag_id' => $tag ];
//            }
//
//            $this->blog_post_tag->insert($new_tag_data);
//            return $this->response->setAlerts('Post successfully edited!')->get();
//        }
//
//        $tag = $this->tag->model()->where('name', 'LIKE', '%'.$tags_str.'%');
//        if ($tag->count() < 1) {
//            $tag = $this->tag->model()->create([ 'name' => $tag_in_arr ]);
//            $tag = $tag->id;
//        } else {
//            $tag = $tag->value('id');
//        }
//
//        $new_tag_data[] = [ 'blog_post_id' => $id, 'tag_id' => $tag ];
//
//        $this->blog_post_tag->insert($new_tag_data);
//        return $this->response->setAlerts('Post successfully edited!')->get();
    }
    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $input = [ 'id' => (int) $id ];
        $validator = Validator::make($input, [
            'id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $post = $this->post->model()->find($id)->delete();
        return $this->response->setAlerts('Post deleted!')->get();
    }
    public function show($id)
    {
//        $input = [ 'id' => (int) $id ];
//        $validator = Validator::make($input, [
//            'id' => 'required|integer'
//        ]);
//
//        if ($validator->fails()) {
//            return $this->response->setErrors($validator->messages())->get();
//        }
//
//        $post = $this->post->model()->where('id', $id)->with('author', 'tags')->first();
//
//        return $this->response->setData('', $post->toArray())->get();
        $specific_posts = BlogPost::findOrFail($id);
        return $this->response
            ->setData(false, $specific_posts)
            ->get();
    }
}