import React from 'react';
import ReactDOM from "react-dom";

//console.log(user);

function Menu(props) {
	switch (props.user.role) {
		case "guest":
				return <nav>
					<ul>
						<li><a onClick={props.goHome}>Home</a></li>
						<li><a onClick={props.goSignUp}>Sign Up</a></li>
						<li><a onClick={props.goAct}>Club Activities</a></li>
					</ul>
				</nav>;
			break;
		case "user":
				return <nav>
					<ul>
						<li><a onClick={props.goHome}>Home</a></li>
						<li><a onClick={props.goLogOut}>Log Out</a></li>
						<li><a onClick={props.goAct}>Club Activities</a></li>
						<li><a onClick={props.goAddAct}>Manage Activities</a></li>
					</ul>
				</nav>;
			break;
		case "admin":
				return <nav>
					<ul>
						<li><a onClick={props.goHome}>Home</a></li>
						<li><a onClick={props.goLogOut}>Log Out</a></li>
						<li><a onClick={props.goAct}>Club Activities</a></li>
						<li><a onClick={props.goAddAct}>Manage Activities</a></li>
						<li><a onClick={props.goMembers}>Members</a></li>
					</ul>
				</nav>;
			break;
		default:
			return <h2>Menu Broke.</h2>;
	};
}


export default Menu;