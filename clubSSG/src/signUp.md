---
title: Sign Up - East Bay Mushroom Hunting Association
author: Anthony Rogosich
---
<main>

<header>

# Sign Up

</header>

<form action="" method="get" class="signUpForm">
<label>Name:</label>
<input type="name" id="name" required="" maxlength="20" minlength="3">
<label>Email: </label>
<input type="email" id="email" required="" maxlength="20" minlength="6">
<label>Password: </label>
<input type="password" id="password" required="" minlength="6" maxlength="20">
<label>Mushroom Hunting Experince:</label>

<select name="exp" id="exp"> <option value="None">None</option>
<option value="Little">Little</option>
<option value="Good Amount">Good Amount</option>
<option value="Expert">Expert</option> 
</select>

<label>
Comments: 
</label>
<textarea type="comments" id="comments" rows="4" cols="50">
</textarea>
<input type="button" value="Sign up" id="clubSignButton">
</form>

</main>

<footer>CopyrightÂ© 2021 East Bay Mushroom Hunting Association</footer>

<script>
document.getElementById("clubSignButton").addEventListener("click", displayThank); 
function displayThank() { 
		var intro = "Thank you for your interest.";
		var name = document.getElementById('name').value;
		var email = document.getElementById('email').value;
		var exp = document.getElementById('exp').value;
		var promptName = " Name: ";
		var promptEmail= " - Email: ";
		var promptExp= " - Experience: ";
		var message = promptName.concat(name,promptEmail,email,promptExp,exp);
		var textNode = document.createTextNode(intro);
		var newH = document.createElement("h3");
		newH.appendChild(textNode);
		var paraNode = document.createTextNode(message);
		var newP = document.createElement("p");
		newP.appendChild(paraNode);
		var closeButton = document.createElement("input");
		closeButton.type = "button";
		closeButton.id = "closeButton";
		closeButton.value = "Close";
		document.getElementById("ThanksDialog").classList.add("popUpStyle");
		document.getElementById("ThanksDialog").appendChild(newH);
		document.getElementById("ThanksDialog").appendChild(newP);
		document.getElementById("ThanksDialog").appendChild(closeButton);
		document.getElementById("clubSignButton").removeEventListener("click", displayThank);
		}
		
		
</script>