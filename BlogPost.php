<?php
namespace App;
use App\BlogPostCategory;
use App\User;
use App\BlogPostTag;
use App\Tag;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Model;
class BlogPost extends Model
{
    protected $table = 'blog_posts';
    protected $fillable = [ 'share_img', 'title_img_path', 'title', 'short_description', 'content', 'user_author_id', 'category_id', 'app_id','url','meta_description'];
    public function author()
    {
        return $this->belongsTo(User::class, 'user_author_id');
    }
    public function category()
    {
        return $this->belongsTo(BlogPostCategory::class, 'category_id')->with('parent');
    }
    public function getIdAttribute($value)
    {
        return $value;
    }
    public function app()
    {
        return $this->belongsTo('App\AppClient', 'app_id');
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
        // return $this->hasMany('App\BlogPostTag', 'blog_post_id')->with('tag');
    }
    public function tags2()
    {
        return $this->hasMany('App\BlogPostTag', 'blog_post_id', 'id');
    }
    public static function loadStaticPosts($app_id)
    {
        return self::where('app_id', $app_id)->take(5)->with('category')->with('author')->get();
    }
    public static function loadPostsForWritedom($app_id)
    {
        return self::where('app_id', $app_id)->with('category')->with('author')->get();
    }
    // @ingwet - should be moved elsewhere, idk where to put it yet :)
    public static function loadPost($segments, $app_id)
    {
        if (!array_key_exists(2, $segments)) {
            return (object)[];
        }
        //$post_id = explode('_', array_get($segments, 2))[0];
        // if (!$post_id) {
        //     return (object)[];
        // }
        //dd($segments);
        return self::where('url',$segments[2])->with('author', 'tags', 'category')->first();
    }
    public static function parsePostsUrl($url)
    {
        // parse_str($url, $query);
        $query_string = array_get(explode('?', $url), 1, '');
        if ($query_string) {
            parse_str($query_string, $query);
        } else {
            $query = [];
        }
        $segments = splitUrlIntoSegments($url);
        return [
            'category' => array_get($segments, 1, ''),
            'subcategory' => array_get($segments, 2, ''),
            'tag' => array_get($query, 'tag', ''),
        ];
    }
    public static function loadPosts($url, $app_id)
    {
        $filters = self::parsePostsUrl($url);
        return self::where('app_id',$app_id)
            ->tag($filters['tag'])
            ->category($filters['category'], $filters['subcategory'])
            ->with('author', 'tags', 'category')
            ->orderBy('updated_at', 'desc')->take(10)->get();
    }
    public function scopeTag($q, $tag)
    {
        return ($tag) ?
            $q->whereHas('tags',
                function ($q) use ($tag) {
                    $tag_id = Tag::where('name', $tag)->value('id');
                    $q->where('tag_id', $tag_id);
                })
            :
            $q
            ;
    }
    public function scopeCategory($q, $category, $subcategory)
    {
        if($category) {
            $q->whereHas('category', function ($q) use ($category, $subcategory) {
                $category = '%'.ucfirst(str_replace('-', ' ', $category)).'%';
                $q->where('name', 'LIKE', $category);
                if($subcategory) {
                    $subcategory = '%'.ucfirst(str_replace('-', ' ', $subcategory)).'%';
                    $parent_id = BlogPostCategory::where('name', 'LIKE', $category)->value('id');
                    $q->where('name', 'LIKE', $category)->where('parent_category_id', $parent_id);
                }
            });
        }
        return $q;
    }
    // public function getAuthorAttribute()
    // {
    // 	return $this->author()->get();
    // }
    // public function getTitleAttribute()
    // {
    // 	return $this->value('title')->get();
    // }
    // public function getContentAttribute()
    // {
    // 	return $this->value('content')->get();
    // }
}