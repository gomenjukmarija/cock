var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var SpeedyPaperConstants = require('../constants/SpeedyPaperConstants');
var SpeedyPaperActions = require('../actions/SpeedyPaperActions');
var _ = require('lodash');

var _optionsForm = {
    page: 1,
    perPage: 20,
    total: 0,
};

var _options = {
    front: _.clone(_optionsForm),
    back: _.clone(_optionsForm),
    presets: window.sp.filters
};

var _isLoaded = true;

var set = function(name, options) {
    _options[name] = options;
}

var get = function(name) {
    return _options[name];
}

var setIsLoaded = function(state) {
    _isLoaded = state;
}

var getIsLoaded = function() {
    return _isLoaded;
}

var BlogListStore = _.extend({}, EventEmitter.prototype, {

    get: function(name) {
        return get(name);
    },

    isLoaded: function() {
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

BlogListStore.dispatchToken = AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        case SpeedyPaperConstants.POSTS_LOAD_ATTEMPT:
            setIsLoaded(false);
            break;

        case SpeedyPaperConstants.POSTS_LOADED:
            setIsLoaded(false);
            _options.back.total = action.data.data.total;
            _options.back.page = action.data.data.page;
            _options.back.perPage = action.data.data.perPage;
            break;

        default:
            return true;
    }

    BlogListStore.emitChange();

    return true;

});

module.exports = BlogListStore;