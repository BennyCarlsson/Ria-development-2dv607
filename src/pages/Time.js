var React = require('react');


var Time = React.createClass({
    setTime: function(){
        var currentDate,day,hours,minutes,seconds;
        currentDate = new Date();
        day = currentDate.getDay();
        hours = currentDate.getHours();
        minutes = currentDate.getMinutes();
        seconds = currentDate.getSeconds();
        this.setState({
            currentDate: currentDate,
            day: day,
            hours: hours,
            minutes: minutes,
            seconds: seconds
        });
    },
    componentWillMount: function(){
        this.setTime();
    },
    componentDidMount: function(){
        window.setInterval(function(){
            this.setTime();
        }.bind(this),1000);
    },
    render: function(){
        return(
            <div id="TimeHeaderId">
                <MyDate currentDate={this.state.currentDate}/>
                <Week/>
                <Day day={this.state.day}/>
                <Clock  hours={this.state.hours}
                        minutes={this.state.minutes}
                        seconds={this.state.seconds}/>
            </div>
        );
    }
});
var MyDate = React.createClass({
    convertDate: function(date){
        return date.getFullYear() + "-" +
            date.getDate() + "-" +
            date.getMonth();
    },
    render: function(){
        return(
            <p>{this.convertDate(this.props.currentDate)}</p>
        );
    }
});

var Week = React.createClass({
    getWeek: function(){
        //probably uses magic to calculate the week
        //http://stackoverflow.com/questions/24886144/javascript-getweeknumber-function?lq=1
        var d = new Date();
        d.setHours(0, 0, 0);
        d.setDate(d.getDate() + 4 - (d.getDay() || 7));
        return Math.ceil((((d - new Date(d.getFullYear(), 0, 1)) / 8.64e7) + 1) / 7);
    },
    render: function(){

        return(
            <p>Week:{this.getWeek()}</p>
        );
    }
});

var Day = React.createClass({
    convertDay: function(dayNr){
        switch(dayNr){
            case 0: return "Sunday";
            case 1: return "Monday";
            case 2: return "Tuesday";
            case 3: return "Wednesday";
            case 4: return "Thursday";
            case 5: return "Friday";
            case 6: return "Saturday";
            default: return "No Day Today";
        }
    },
    render: function(){
        return(
            <p>{this.convertDay(this.props.day)}</p>
        );
    }
});

var Clock = React.createClass({
    convertTime: function(time){
        if(time < 10){
            return "0"+time;
        }
        return time;
    },
    render: function(){
        return(
            <div id="clockDiv">
                <p>
                    {this.convertTime(this.props.hours)}:
                    {this.convertTime(this.props.minutes)}:
                    {this.convertTime(this.props.seconds)}
                </p>
            </div>
        );
    }
});
module.exports = Time;
