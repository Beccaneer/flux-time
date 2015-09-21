/**
 * Created by Rebecca on 15-09-15.
 */

var React = require('react');
var TimeZoneData = require('./TimeZoneData');
var TimeAPI = require('./utils/TimeAPI');
var TimeApp = require('./components/TimeApp.react');

//loading time zone data into local storage
TimeZoneData.init();

//mock api call
TimeAPI.getTimeZoneData();

// Render TimeApp
React.render(
    <TimeApp />,
    document.getElementById('fluxtimeapp')
);