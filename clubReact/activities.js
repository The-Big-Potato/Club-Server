import React from 'react';
import ReactDOM from "react-dom";
import mushroom from "./images/mush2.jpg";
let mush = <img src={mushroom} alt="Basket of Morel Mushroom"/>;


function Activities(events) {
	let rows = events.events.map(function(act){
		let spaceDates = act.dates.join(', ');
		return <tr key={act.activity}><td>{act.activity}</td><td>{spaceDates}</td></tr>;
	});
	
	return <section>
<main>
	<header>
	<h1>Club Activities</h1>
	</header>
	{mush}
	<h2>Activity Types</h2>
	<ul>
		<li>Nature Walks</li>
		<li>Mushroom Identification</li>
		<li>Cooking with Mushrooms</li>
		<li>Medicinal Mushrooms</li>
	</ul>
	<table id = "clubTable">
	<thead>
		<tr>
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
</section>;
}

export default Activities; 