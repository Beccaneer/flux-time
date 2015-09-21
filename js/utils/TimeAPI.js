/**
 * Created by Rebecca on 15-09-15.
 */
var TimeAppActions = require('../actions/TimeAppActions');
var TimeZoneData = require('../TimeZoneData');

module.exports = {

    getTimeZoneData: function() {
        var data = JSON.parse(localStorage.getItem('zoneabbrs'));
        console.log(data);
        TimeAppActions.receiveTimeZones(data);
    }
};