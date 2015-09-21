/**
 * Created by Rebecca on 15-09-15.
 */

var TimeAppConstants = require('../constants/TimeAppConstants');
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var _ = require('lodash');

var _timeZones = {};

function loadTimeZones(data) {
    console.log("TimeZonesStore");
    console.log(data);
    _timeZones.times = data;
}

var TimeZonesStore = _.assign({}, EventEmitter.prototype, {
    getAll: function(){
        return _timeZones;
    },

    emitChange: function() {
        this.emit('change');
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;

    switch(action.actionType) {

        //respond to RECEIVE_TIME_ZONES
        case TimeAppConstants.RECEIVE_TIME_ZONES:
            console.log("TimeZonesStore RECEIVE_TIME_ZONES");
            console.log(action.data);
            loadTimeZones(action.data);
            break;

        default:
            return true;
    }

    TimeZonesStore.emitChange();
    return true;
});

module.exports = TimeZonesStore;
