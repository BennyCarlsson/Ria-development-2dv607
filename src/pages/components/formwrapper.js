var React = require('react');
var FormWrapper = React.createClass({
	getInitialState: function() {
    	 return {text: ''};
	},
	componentDidMount: function(){
        componentHandler.upgradeDom();

    },
    componentDidUpdate: function(){
        componentHandler.upgradeDom();
    },
	handleTextChange: function(e) {
		if(this.state.text.length < 250){
    		this.setState({text: e.target.value});
		}
  	},
	handleSubmit: function(e){
		e.preventDefault();
		var chatInput = this.state.text.trim();
		if(!chatInput){
			return;
		}
		this.props.addComment(chatInput);
		this.setState({text: ''});
		//ugly thing cause mdl doesn't remove is dirty class when javascript sets input to ""
		$('.is-dirty').removeClass('is-dirty');
	},
	render: function(){
		return(
			<div id="formWrapper" className="mdl-grid">
				<form id="chatForm" className="form-inline mdl-cell mdl-cell--12-col" onSubmit={this.handleSubmit}>
					<div className="mdl-textfield mdl-js-textfield mdl-cell mdl-cell--10-col mdl-cell--6-col-tablet mdl-cell--3-col-phone" id="inputDiv">
						<input className="mdl-textfield__input" type="text" id="sample1"
							ref="chatInput"
							value={this.state.text}
							onChange={this.handleTextChange}/>
						<label className="mdl-textfield__label" htmlFor="sample1">Text...</label>
					</div>
					<button className="mdl-button mdl-js-button mdl-button--primary mdl-cell mdl-cell--2-col mdl-cell--2-tablet mdl-cell--1-col-phone" value="send" type="submit">Skicka</button>
				</form>
			</div>
		);
	}
});

module.exports = FormWrapper;
