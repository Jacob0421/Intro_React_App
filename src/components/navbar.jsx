import React, { Component } from "react";

/*
This is a Stateless Functional Component
NOTE: You cannot use lifecycle hooks with Stateless Functional Components

({'Object to destructure'})
desctructuring the 'props' and selecting the one you want
*/
const NavBar = ({ totalCounters }) => {
	console.log("NavBar - Rendered");

	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<a className="navbar-brand" href="#">
					Navbar
					<span className="badge bg-secondary rounded-pill m-2">
						{totalCounters}
					</span>
				</a>
			</div>
		</nav>
	);
};

export default NavBar;
