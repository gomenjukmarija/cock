<?php
namespace App\Traits\Models\BlogPost;
trait BlogPostsForAdminPanelSearchableTrait
{
    public function applyFilters(array $data)
    {
        $page = array_get($data, 'page', 1);
        $perPage = array_get($data, 'perPage', 20);
        $filters = isset($filters['posts_filters']) ? $filters['posts_filters'] : false;
        if (isset($filters['app']) && $filters['app'] != 'false' && $filters['app'] != '') {
            $posts = $this->model()->where('app_id', $filters['app']);
        } else {
            $posts = $this->model();
        }
        if (isset($filters['category']) && $filters['category'] != 'false' && $filters['category'] != '') {
            $posts->whereHas('category', function ($q) use ($filters) {
                $q->where('parent_category_id', $filters['category']);
            });
        }
        if (isset($filters['subcategory']) && $filters['subcategory'] != 'false' && $filters['subcategory'] != '') {
            $posts->where('category_id', $filters['subcategory'])->whereHas('category', function ($q) use ($filters) {
                $q->where('parent_category_id', $filters['category']);
            });
        }
        $p = $posts->with('category', 'author', 'app')->skip(($page - 1) * $perPage)->take($perPage)->get()->toArray();
        return [
            'total' => $posts->count(),
            'perPage' => (int)$perPage,
            'page' => (int)$page,
            'posts' => array_values($p),
        ];
    }
}