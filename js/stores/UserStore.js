/**
 * Created by Rebecca on 15-09-15.
 */

var UserTimeConstants = require('../constants/UserTimeConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _userTime = {};

function loadUserTime(data) {
    console.log("UserStore");
    console.log(data);
    _userTime = data;
}

var UserStore = _.assign({}, EventEmitter.prototype, {
    get: function(){
        return _userTime;
    },

    addChangeListener: function(callback) {
        this.on('change', callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener('change', callback);
    },

    emitChange: function(){
        this.emit('change');
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        //respond to RECEIVE_TIME_ZONES
        case UserTimeConstants.UPDATE_USER_TIME:
            console.log("UserStore UPDATE USER TIME");
            console.log(action.data);
            loadUserTime(action.data);
            break;

        default:
            return true;
    }

    UserStore.emitChange();

    return true;
});

module.exports = UserStore;
