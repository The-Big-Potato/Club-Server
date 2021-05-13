import React from 'react';

class AdminActivity extends React.Component { 
	constructor(props) {
		super(props);
		this.state = { type:" ", dates:" " };
	}
	
	changeType(event){
		console.log(event.target.value);
		this.setState({type:event.target.value});
	}
	
	changeDate(event){
		console.log(event.target.value);
		this.setState({dates:event.target.value});
	}
	
	addHandler(event){
		event.preventDefault();
		let activity = {activity: this.state.type, dates:[this.state.dates]};
		this.props.addAct(activity);
	}
	
	render() {
	let rows = this.props.events.map(function(act){
		let spaceDates = act.dates.join(', ');
		return <tr key={act.activity}><td><button>Delete</button></td><td>{act.activity}</td><td>{spaceDates}</td></tr>;
	});
	

	return <>
	<main>
	<header>
		<h1>Activity Managment</h1>
	</header>
	<h2>Add Activity</h2>
	<form>
		<label>Type:</label>
		<input type="text" title="type" name="type" required="" onChange={this.changeType.bind(this)}></input>
		<label>Date(s): </label>
		<input type="text" title="date" name="date" required="" onChange={this.changeDate.bind(this)}></input>
		<button onClick={this.addHandler.bind(this)}>Add</button>
	</form>
	<h2>Activities</h2>
	<table id = "clubTable">
	<thead>
		<tr>
			<th scope="col"></th>
			<th scope="col">Type</th>
			<th scope="col">Date</th>
		</tr>
	</thead>
	<tbody id = "clubBody">
	{rows}
	</tbody>
	</table>
	</main>
	<footer>Copyright© 2021 East Bay Mushroom Hunting Association</footer>
	</>;
	}
}

export default AdminActivity;