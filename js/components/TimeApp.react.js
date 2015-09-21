/**
 * Created by Rebecca on 15-09-15.
 */

var TimeBar = require('./TimeBar.react');
var UserTime = require('./UserTime.react');
var OtherTime = require('./OtherTime.react');
var React = require('react');
var CityStore = require('../stores/CityStore');
var UserStore = require('../stores/UserStore');
var TimeZonesStore = require('../stores/TimeZonesStore');

// Retrieve current TimeApp state
function getAppState(){
    return {
        timeZones: TimeZonesStore.getAll(),
        userTime: UserStore.get()
    };
}

var TimeApp = React.createClass({

    getInitialState: function() {
        return getAppState();
    },

   componentDidMount: function() {
        UserStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        UserStore.removeChangeListener(this._onChange);
    },

    // @return {object}
    render: function() {
        return (
            <div className='TimeApp'>
                <TimeBar zones={this.state.timeZones}/>
                <UserTime zone={this.state.userTime}/>
            </div>
        );
    },

    // Event handler
    _onChange: function() {
        console.log("TimeApp onchange handler");
        this.setState(getAppState());
    }

});

module.exports = TimeApp;