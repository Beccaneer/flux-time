/**
 * Created by Rebecca on 15-09-15.
 */

var React = require('react');
var UserTimeActions = require('../actions/UserTimeActions');
var Moment = require('moment');
var MomentTZ = require('moment-timezone');



var UserTime = React.createClass({

    setNowTime: function(zone){
        console.log(zone);
        if (zone === " ") {
            return "fgergesvsrv ergawertq42 fsdf";
        }
        else {
            return Moment().tz(zone).format('dddd h:mm:ss A');
        }
    },

    formatZone: function(zone){
        if (zone === " "){
            return "on Mars";
        }
        var zonearray = zone.split("_").join(" ").split("/");
        if (zonearray[1] === "Argentina" || zonearray[1] === "Indiana" || zonearray[1] === "Kentucky" || zonearray[1] === "North Dakota"){
            return "in " + zonearray[2];
        }
        else {
            return "in " + zonearray[1];
        }
    },

    componentDidMount: function() {
        this.timer = setInterval(this.tick, 50);
        this.props.zone = "Africa/Abidjan";
    },

    componentWillUnmount: function(){
        clearInterval(this.timer);
    },

    tick: function() {
        this.setState();
    },

    render: function() {
            var userZone = this.props.zone.toString();
            var nowTime = this.setNowTime(userZone);
            userZone = this.formatZone(userZone);
            return (
                <div className = 'user-zone'>
                    <h2> So you say you live {userZone}?</h2>
                    <h2> It is now: {nowTime} </h2>
                </div>
            );
        }

});

module.exports = UserTime;
