/**
 * Created by Rebecca on 15-09-15.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var TimeAppConstants = require('../constants/TimeAppConstants');

var TimeAppActions = {

    //receive time zone data
    receiveTimeZones: function(data) {
        console.log(data);
        AppDispatcher.handleAction({
            actionType: TimeAppConstants.RECEIVE_TIME_ZONES,
            data: data
        })
    }
};

module.exports = TimeAppActions;