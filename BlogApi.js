var SpeedyPaperActions = require('../actions/SpeedyPaperActions');
var req = require('../utils/RequestHandler');

module.exports = {

	getClientAppCategories: function(data) {
		req.ajax({
				url: "/content_manager/category",
				type: "GET",
				data: data
			},
			function(res) {
				SpeedyPaperActions.a('CATEGORIES_LOADED',res);
			}
		);
	},

	addNewPost: function(data) {
		req.ajax({
				url: '/content_manager/posts',
				type: "POST",
				data: data,
			},
			function(res) {
				SpeedyPaperActions.a('ADD_NEW_BLOGPOST_SUCCESS',res);
			}
		);
	},

	updatePost: function(data) {
		req.ajax({
				url: '/content_manager/posts/'+data.post_info.id,
				type: "PUT",
				data: data,
			},
			function(res) {
				SpeedyPaperActions.a('UPDATE_POST_SUCCESS',res);
			}
		);
	},

	addNewCategory: function(data) {
		req.ajax({
				url: '/content_manager/category',
				type: "POST",
				data: data,
			}
		);
	},

	loadAll: function(data) {
		req.ajax({
				url: "/content_manager/posts",
				type: "GET",
				data: data
			},
			function(res) {
				SpeedyPaperActions.a('POSTS_LOADED',res);
			}
		);

	},

	loadOne: function(id, input) {
		req.ajax({
				url: "/content_manager/posts/"+id,
				type: "GET",
				data: input
			},
			function(res) {
				SpeedyPaperActions.a('LOAD_SPECIFIC_POST_SUCCESS',res);
			}
		);
	},

	getPostInfo: function(data) {
		req.ajax({
				url: '/content_manager/posts/' + data,
				type: "GET",
			},
			function(res) {
				setTimeout(SpeedyPaperActions.a.bind('', 'GET_POST_INFO_SUCCESS', res.data), 0);
			}
		);
	},
};