---
title: Log In - East Bay Mushroom Hunting Association
author: Anthony Rogosich
---
<main>

<header>

# Login

</header>

<form action="" method="get" id="loginForm">
	<label>Email:</label> 
	<input type="email" name="email" id="email" required=""> 
	<label>Password: </label>
	<input type="password" name="password" id="password" required=""> 
	<input type="button" value="Log in" id="clubLogButton"></form>

</main>

<footer>Copyright© 2021 East Bay Mushroom Hunting Association</footer>

<script>
	
	document.getElementById("clubLogButton").addEventListener("click", displayMessage); 
	
	function displayMessage() { var intro = "Welcome "; 
		var email = document.getElementById('email').value; 
		var end = ", the site is currently under construction.";
		var message = intro.concat(email,end); 
		var textNode = document.createTextNode(message); 
		var newH = document.createElement("h3"); 
		newH.appendChild(textNode); 
		newH.classList.add("popUpStyle"); 
		document.getElementById("constPop").appendChild(newH); 
		document.getElementById("clubLogButton").removeEventListener("click", displayMessage); 
	}
	
</script>