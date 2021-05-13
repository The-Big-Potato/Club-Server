import React from 'react';

function Membership() { // Start with Capital
    return <section>
<main>
<header>
	<h1>Sign Up</h1>
</header>
<form action="" method="get" class="signUpForm">
	<label>Name:</label>
	<input type="name" id="name" required="" maxlength="20" minlength="3"></input>
	<label>Email: </label>
	<input type="email" id="email" required="" maxlength="20" minlength="6"></input>
	<label>Password: </label>
	<input type="password" id="password" required="" minlength="6" maxlength="20"></input>
	<label>Mushroom Hunting Experince:</label>
	<select name="exp" id="exp">
			<option value="None">None</option>
			<option value="Little">Little</option>
			<option value="Good Amount">Good Amount</option>
			<option value="Expert">Expert</option> 
	</select>
	<label>
	Comments: 
	</label>
	<textarea type="comments" id="comments" rows="4" cols="50">
</textarea>
	<input type="button" value="Sign up" id="clubSignButton"></input>
</form>
</main>
<footer>Copyright© 2021 East Bay Mushroom Hunting Association</footer>
</section>;
}

export default Membership;