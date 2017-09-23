var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SpeedyPaperConstants = require('../constants/SpeedyPaperConstants');
var SpeedyPaperActions = require('../actions/SpeedyPaperActions');
var _ = require('lodash');
var moment = require('moment');
var BlogApi = require('../api/BlogApi');
var BlogListStore = require('./BlogListStore');

var merge = require('deepmerge');

var _posts_info = [];
var _posts = [];
var _categories = [];
var _app_id = [];
var _is_deleted = false;
var is_loaded = true;

var setMyCategories = function(categoriesArray) {
    if( _.isArray(categoriesArray) )
    {
        _categories = categoriesArray;
    }
    else
    {
        _categories = _.toArray(categoriesArray);
    }
}

var setMyPosts = function(postsArray) {
    if( _.isArray(postsArray) )
    {
        _posts = postsArray;
    }
    else
    {
        _posts = _.toArray(postsArray);
    }
}

var setMyAppId = function(appIdArray) {
    if( _.isArray(appIdArray) )
    {
        _app_id = appIdArray;
    }
    else
    {
        _app_id = _.toArray(appIdArray);
    }
}

var setOnePostData = function(data) {
    _posts_info = data;
}

var getMyPosts = function() {
    return _posts;
}

var getMyCategories = function() {
    return _categories;
}

var getMyAppId = function() {
    return _app_id;
}

var setIsLoaded = function(state) {
    is_loaded = state;
}
var getIsLoaded = function() {
    return is_loaded;
}
var getPostData = function() {
    return _posts_info;
}

var BlogStore = _.extend({}, EventEmitter.prototype, {
    getMyLoadedPosts: function() {
        return getMyPosts();
    },

    getInfo: function() {
        return getPostData();
    },

    getMyLoadedCategories: function() {
        return getMyCategories();
    },

    getMyLoadedAppId: function() {
        return getMyAppId();
    },
    getIsLoadedInfo: function() {
        return getIsLoaded();
    },
    emitChange: function() {
        this.emit('change');
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    }

});

BlogStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case SpeedyPaperConstants.POSTS_LOAD_ATTEMPT:
            var opts = BlogListStore.get('front');
            opts.page = action.data && action.data.page || opts.page;
            opts.perPage = action.data && action.data.perPage || opts.perPage;
            setOnePostData(false);
            setIsLoaded(true);
            BlogApi.loadAll(opts);
            break;

        case SpeedyPaperConstants.POSTS_LOADED:
            setMyPosts(action.data.data.posts);
            break;

        case SpeedyPaperConstants.LOAD_SPECIFIC_POST_ATTEMPT:

            BlogApi.loadOne(action.data.post_id);
            break;

        case SpeedyPaperConstants.LOAD_SPECIFIC_POST_SUCCESS:
            setIsLoaded(false);
            setOnePostData(action.data.data);
            break;

        case SpeedyPaperConstants.UPDATE_POST_ATTEMPT:
            BlogApi.updatePost(action.data);
            break;

        case SpeedyPaperConstants.CATEGORIES_LOAD_ATTEMPT:
            BlogApi.getClientAppCategories();
            break;

        case SpeedyPaperConstants.CATEGORIES_LOADED:
            setMyCategories(action.data.data.categories.categories);
            setMyAppId(action.data.data.categories.app_id);
            break;

        case SpeedyPaperConstants.CREATE_NEW_POST:
            BlogApi.addNewPost(action.data.typed);
            break;

        case SpeedyPaperConstants.CREATE_NEW_CATEGORY:
            BlogApi.addNewCategory(action.data.typed);
            break;

        default:
            return true;
    }

    BlogStore.emitChange();

    return true;

});

module.exports = BlogStore;