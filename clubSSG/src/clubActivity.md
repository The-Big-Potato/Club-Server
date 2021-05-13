---
title: Club Activities - East Bay Mushroom Hunting Association
author: Anthony Rogosich
---
<main>

<header>

# Club Activities

</header>

![Morel Mushroom](images/mush2.jpg)

## Activity Types

*   Nature Walks
*   Mushroom Identification
*   Cooking with Mushrooms
*   Medicinal Mushrooms

## Activity Schedule

<table id="clubTable">

<thead>

<tr>

<th scope="col">Type</th>

<th scope="col">Date</th>

</tr>

</thead>

</table>

</main>

<footer>Copyright© 2021 East Bay Mushroom Hunting Association</footer>

<script>
function loadTableData(items) { 
	const table = document.getElementById("clubBody");
	items.forEach( item => { var newTR = document.createElement("tr");
	var newTDA = document.createElement("td"); var newTDB = document.createElement("td");
	var tempAct = item.activity; var tempDate = item.dates.join(", "); var elemNodeA = document.createTextNode(tempAct);
	var elemNodeB = document.createTextNode(tempDate); newTDA.appendChild(elemNodeA); 
	newTDB.appendChild(elemNodeB); newTR.appendChild(newTDA);
	newTR.appendChild(newTDB);
	document.getElementById("clubBody").appendChild(newTR);
	}
	);
} 

loadTableData(events);</script>