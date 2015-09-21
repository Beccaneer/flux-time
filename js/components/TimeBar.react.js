/**
 * Created by Rebecca on 15-09-15.
 */

var React = require('react');
var TimeAppActions = require('../actions/TimeAppActions');
var UserTimeActions = require('../actions/UserTimeActions');

var TimeBar = React.createClass({

    makeUserTime: function(){
        console.log("TimeBar make user time");
        console.log(this.props);
        console.log(this.state);
        var userTime = this.state.value;
        console.log(userTime);
        UserTimeActions.updateUserTime(userTime);
    },

    change: function(event){
        console.log("in TimeBar change function")
        console.log(this.state);
        this.setState({value: event.target.value});
    },

    render: function() {
        self = this;
        var zones = this.props.zones.times.sort();
        return (
            <div className='timebar'>
                <h2> Pick your time zone: </h2>
                    <select id='zone-select' onChange={this.change}>
                    {Object.keys(zones).map(function(zone){
                        return (
                            <option value={zones[zone]}>{zones[zone]}</option>
                        )
                    })}
                    </select>
               <button type="button" onClick={this.makeUserTime} >Submit</button>

            </div>
        );
    },
});

module.exports = TimeBar;



