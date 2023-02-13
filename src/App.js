import React, { Component } from "react";
import "./App.css";
import NavBar from "./components/navbar";
import Counters from "./components/counters";

class App extends Component {
	state = {
		counters: [
			{ id: 1, value: 1 },
			{ id: 2, value: 2 },
			{ id: 3, value: 3 },
			{ id: 4, value: 4 },
		],
	};

	//Only able to use 'props' if you pass it into the function AND pass it into 'super()'
	// constructor is a good way to initialize the properties of this class.
	constructor() {
		super();
		console.log("App - Constructor");
		// this.state = this.props.something;
	}

	//Where you would perform AJAX calls to get data from server.
	componentDidMount() {
		//Perform AJAX call
		//this.setState({/*Results from AJAX call*/})

		console.log("App - Mounted");
	}

	handleReset = () => {
		const counters = this.state.counters.map((c) => {
			c.value = 0;
			return c;
		});
		this.setState({ counters });
	};

	/*
    this one is confusing...
    I guess in my mind, you are cloning 'this.state.counters' to counters, then you need to
    get the index of the counter that you want to increment. After that, why do you need to
    take ANOTHER clone of that specific vriable, update it, and how is the value updated in
    counters once you setState? I think I need to look into the '...' (spread operator) more
  */

	handleIncrement = (counter) => {
		const counters = [...this.state.counters];
		const index = counters.indexOf(counter);
		counters[index] = { ...counter };
		counters[index].value++;
		this.setState({ counters });
	};

	handleDelete = (counterID) => {
		const counters = this.state.counters.filter((c) => c.id !== counterID);
		this.setState({ counters });
	};

	render() {
		console.log("App - Rendered");

		return (
			<React.Fragment>
				<NavBar
					totalCounters={
						this.state.counters.filter((c) => c.value > 0).length
					}
				/>
				<main className="container">
					<Counters
						counters={this.state.counters}
						onIncrement={this.handleIncrement}
						onDelete={this.handleDelete}
						onReset={this.handleReset}
					/>
				</main>
			</React.Fragment>
		);
	}
}

export default App;
