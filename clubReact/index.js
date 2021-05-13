import React from "react";
import ReactDOM from "react-dom";
import events from "./events.json"
import Menu from "./menu.js"; 
import Home from "./home.js"; 
import Activities from "./activities";
import Membership from "./membership";
import AdminActivity from "./AdminActivity";


class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = { role: "user", show: "addActivities", activities:events.clubEvents };
	}

	homeHandler(event) {
		console.log(event);
		this.setState({show: "home"});
	}
	membershipHandler(event) {
		this.setState({show: "membership"});
	}
	activitiesHandler(event) {
		this.setState({show: "activities"});
	}
	addActivitiesHandler(event) {
		this.setState({show: "addActivities"});
	}
	
	memberListHandler(event) {
		this.setState({show: "home"});
	}
	
	logOutHandler(event) {
		this.setState({show: "home"});
	}
	
	addHandler(activity) {
		console.log(activity);
		this.setState({activities:this.state.activities.concat(activity)});
	}
	
	render() {
		let contents = null;
		switch (this.state.show) {
			case "home":
				contents = <Home />;
				break;
			case "membership":
				contents = <Membership />;
				break;
			case "activities":
				contents = <Activities events={this.state.activities}/>;
				break;
			case "addActivities":
				contents = <AdminActivity events={this.state.activities} addAct={this.addHandler.bind(this)}/>;
				break;
			default:
				contents = <h2>Website Broke.</h2>;
	}
		
		return (
			<>
				<Menu user={this.state} goHome={this.homeHandler.bind(this)} goAct={this.activitiesHandler.bind(this)}
				goSignUp={this.membershipHandler.bind(this)}
				goAddAct={this.addActivitiesHandler.bind(this)}
				goMembers={this.memberListHandler.bind(this)}
				goLogOut={this.logOutHandler.bind(this)}
				/>
				{contents}
			</>
		);
	}
}

ReactDOM.render(<App />, document.getElementById("root"));
