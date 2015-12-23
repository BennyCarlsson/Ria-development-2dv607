var React = require('react'),
    ReactRedux = require("react-redux"),
	C = require("../../constants"),
    actions = require("../../actions");

var UserList = React.createClass({
    getInitialState: function(){
            return{userList: []};
    },
    componentWillMount: function(){
        var myFireBase = new Firebase("https://radiant-heat-4485.firebaseio.com/users");
		myFireBase.orderByChild("online").on("value", function(snap){
            var newUsers = [];
            snap.forEach(function(childSnap){
                var newUser = childSnap.val();
                newUsers.push(newUser);
            }.bind(this));

            newUsers.map(function(user,index){
                var userRef = new Firebase('https://radiant-heat-4485.firebaseio.com/presence/' + user.uid);
                userRef.on('value', function(snapshot) {
                    if(snapshot.val() === true){
                        user.status = true;
                    }else{
                        user.status = false;
                    }
                    this.setState({userList: newUsers});
                }.bind(this));
            }.bind(this));
		}.bind(this));
    },
    render: function(){
        return(
            <div id="schoolList" className="mdl-cell mdl-cell--4-col">
                <div id="innerSchoolList">
                    <Users users={this.state.userList}/>
                </div>
            </div>
        );
    }
});
var Users = React.createClass({
    render: function(){
        var p = this.props;
        this.props.users.sort(function(x,y){
            //if same
            if(y.status === x.status && y.inSchool === x.inSchool){return 0;}
            //if one is in school and online
            if(y.inSchool && y.status){return 1;}
            if(x.inSchool && x.status){return -1;}
            //if one is in school but not the other
            if(y.inSchool && !x.inSchool){return 1;}
            if(!y.inSchool && x.inSchool){return -1;}
            //if both are online
            if(y.status && x.status){return 0;}
            //if one is online but note the other
            if(y.status && !x.status){return 1;}
            if(!y.status && x.status){return -1;}
        });
        var user = this.props.users.map(function(user, index){
            var time = timeDifference(new Date(),new Date(user.timeStamp));
            if(!user.reggedForSchool){
                return "";
            }
            if(user.inSchool === true && user.status === true){
                return <li key={index} className="online"><i className="material-icons checkBoxGreen">location_on</i>
                <span title={"Kom "+time}>{user.username}</span>
                </li>;

            }
            else if(user.inSchool === true){
                return <li key={index} className="school"><i className="material-icons checkBoxGreen">location_on</i>
                <span title={"Kom "+time}>{user.username}</span></li>;
            }
            else if(user.status === true){
                return <li key={index} className="online"><i className="material-icons checkBoxRed">location_off</i>
                <span title={"Gick "+time}>{user.username}</span></li>;
            }else{
                return  <li key={index} className="offline"><i className="material-icons checkBoxRed">location_off</i>
                <span title={"Gick "+time}>{user.username}</span></li>;
            }
        });
        return(
            <ul><p>Vilka är i skolan?</p>
                {p.users.length > 0 ? user : <div className="mdl-spinner mdl-js-spinner is-active"></div>}
            </ul>
        );
    }
});

//http://stackoverflow.com/questions/6108819/javascript-timestamp-to-relative-time-eg-2-seconds-ago-one-week-ago-etc-best
function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerMinute) {
         return Math.round(elapsed/1000) + ' sekunder sedan';
    }

    else if (elapsed < msPerHour) {
         return Math.round(elapsed/msPerMinute) + ' minuter sedan';
    }

    else if (elapsed < msPerDay ) {
         return Math.round(elapsed/msPerHour ) + ' timmar sedan';
    }

    else if (elapsed < msPerMonth) {
        return  Math.round(elapsed/msPerDay) + ' dagar sedan';
    }

    else if (elapsed < msPerYear) {
        return  Math.round(elapsed/msPerMonth) + ' månader sedan';
    }
    else{return 'aldrig pingat';}
}

// now we connect the component to the Redux store:
var mapStateToProps = function(appState){
	// This component will have access to `appState.auth` through `this.props.auth`
	return {auth:appState.auth};
};

var mapDispatchToProps = function(dispatch){
	return {

	};
};

module.exports = ReactRedux.connect(mapStateToProps,mapDispatchToProps)(UserList);
