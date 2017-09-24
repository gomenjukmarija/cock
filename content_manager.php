<?php
Route::group(['prefix' => 'content_managment', 'middleware' => ['oauth','auth', 'role:content_manager']], function () {
    Route::get('/seo_landings/', 'ContentManagmentController@index');
    Route::post('/seo_landings/create/','ContentManagmentController@create');
    Route::get('/seo_landings/{id}', 'ContentManagmentController@show');
    Route::delete('/seo_landings/{id}/delete/', 'ContentManagmentController@destroy');
    Route::post('/seo_landings/{id}/update/', 'ContentManagmentController@update');
});
Route::group(
    [
        'middleware' => ['oauth', 'auth', 'role:content_manager'],
        'prefix' => 'content_manager'
    ], function () {
    Route::resource('category', 'Admin\BlogCategoryController');
    Route::get('get-client-apps', 'Admin\BlogCategoryController@getClientApps');
    Route::get('get-client-categories', 'Admin\BlogCategoryController@getClientAppCategories');
    Route::get('get-all-client-categories', 'Admin\BlogCategoryController@getAllInApp');
    Route::resource('posts', 'Admin\BlogPostsController');
    Route::get('posts/delete-tag', 'Admin\BlogPostsController@deleteTag');
    Route::get('essay-pages', 'ContentManager\EssayPagesController@index');
    Route::post('essay-page/save', 'ContentManager\EssayPagesController@store');
    Route::delete('essay-page/delete/{id}', 'ContentManager\EssayPagesController@delete');
    Route::post('essay-page/update/{id}', 'ContentManager\EssayPagesController@update');
    Route::get('essay-page/categories', 'ContentManager\EssayPagesController@getCategories');
    Route::post('essay-page/category/update', 'ContentManager\EssayPagesController@updateCategory');
    Route::delete('essay-page/category/delete', 'ContentManager\EssayPagesController@deleteCategory');
});