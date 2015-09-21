/**
 * Created by Rebecca on 15-09-18.
 */

var AppDispatcher = require('../dispatcher/AppDispatcher');
var UserTimeConstants = require('../constants/UserTimeConstants');

var UserTimeActions = {

    //receive time zone data
    updateUserTime: function(zone) {
        console.log("UserTimeActions updateUserTime")
        console.log(zone);
        AppDispatcher.handleAction({
            actionType: UserTimeConstants.UPDATE_USER_TIME,
            data: zone
        })
    }
};

module.exports = UserTimeActions;