<?php
namespace App\Http\Controllers\Admin;
use App\Http\Controllers\Controller;
use App\Http\Requests;
use App\Repositories\Contracts\BlogPostCategoryRepoInterface;
use Illuminate\Http\Request;
use Validator;
use App\AppClient;
class BlogCategoryController extends Controller
{
    private $category;
    public function __construct(BlogPostCategoryRepoInterface $category)
    {
        parent::__construct();
        $this->category = $category;
    }
    public function index()
    {
        $categories['categories'] = $this->category->model()->all();
        $categories['app_id'] = AppClient::where('codename', '!=', '')->get();
        return $this->response->setData('categories', $categories)->get();
    }
    public function getClientApps()
    {
        $apps = \App\AppClient::all();
        return $this->response->setData('', $apps->toArray())->get();
    }
    public function getClientAppCategories(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'selected_app_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $categories = $this->category->model()->where('app_id', $request->selected_app_id)
            ->where('parent_category_id', '0')
            ->with('children')
            ->get();
        return $this->response->setData('', $categories->toArray())->get();
    }
    // public function getClientAppSubcategories(Request $request)
    // {
    //     $subcategories = $this->category->model()->where('app_id', $request->selected_app_id)
    //         ->where('parent_category_id', $request->category_id)
    //         ->with('children')
    //         ->get();
    //     return $this->response->setData('', $subcategories->toArray())->get();
    // }
    public function getSubcaterories($category_id)
    {
        $input = [ 'category_id' => (int) $category_id ];
        $validator = Validator::make($input, [
            'category_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $categories = $this->category->model()
            ->where('parent_category_id', $category_id)
            ->with('parent')
            ->get();
        return $this->response->setData('', $categories->toArray())->get();
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
            'name' => 'required|max:100',
            'selected_app_id' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $categories = $this->category->create([
            'name' => $request->name,
            'app_id' => $request->selected_app_id,
        ]);
        return $this->response->setAlerts('New category added!')->setData('', $categories->toArray())->get();
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
        $input['id'] = (int) $id;
        $validator = Validator::make($input, [
            'id' => 'required|integer',
            'name' => 'required|max:100',
            'parent' => 'required',
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $input = [
            'name' => $request->name,
            'parent_category_id' => $request->parent
        ];
        $k = $this->category->model()->whereId($id)->update($input);
        $category = $this->category->model()->whereId($id)->with('parent')->first();
        return $this->response->setData('', $category->toArray())->get();
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $input = [ 'id' => (int) $id ];
        $validator = Validator::make($input, [
            'id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $catInfo = $this->category->model()->where('id', $id)->with('parent')->first();
        return $this->response->setData('', $catInfo->toArray())->get();
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
        $category = $this->category->find($id);
        if ($category->parent_category_id == '0') {
            $subcats = $this->category->model()->where('parent_category_id', $id)->delete();
        }
        $categoryBack = $category->toArray();
        $category->delete();
        return $this->response->setData('', $categoryBack)->get();
    }
    public function getAllInApp(Request $request)
    {
        $input = $request->all();
        $validator = Validator::make($input, [
            'selected_app_id' => 'required|integer'
        ]);
        if ($validator->fails()) {
            return $this->response->setErrors($validator->messages())->get();
        }
        $cats = $this->category->model()->where('app_id', $request->selected_app_id)->get();
        return $this->response->setData('', $cats->toArray())->get();
    }
}