import React, { Component } from "react";

export default class Counter extends Component {
	/*
    We are making a controlled component. This means that the component doesnt have
    its own local state. The data is initialized and received through props, and raises
    events when the data needs to be changed, so this component is entirely controlled 
    by its parent (in this case, the parents parent, and counters is essentially a middle-man).
    */

	//lifecycle hook
	componentDidUpdate(prevProps, prevState) {
		//we could possibly decide whether or not we can make an AJAX call based on previous prop and state objects.

		console.log("Counter - Updated");
		// console.log("prevProps: ", prevProps);
		// console.log("prevState: ", prevState);

		// if(prevProps.counter.value !== this.props.counter.value) {
		// 	// Possibly create an ajax call to the server
		// }
	}

	componentWillUnmount() {
		// This allows us to do any cleanup (ex/ timers, eventlisteners, etc.) before the object is actually removed
		// from the DOM, or else we may end up with memory leaks.
		console.log("Counter - Unmount");
	}

	render() {
		console.log("Counter - Rendered");
		return (
			<div>
				{this.props.children}
				<span className={this.getBadgeClasses()}>
					{this.formatCount()}
				</span>
				<button
					onClick={() => this.props.onIncrement(this.props.counter)}
					className="btn btn-secondary btn-sm">
					Increment
				</button>

				<button
					onClick={() => this.props.onDelete(this.props.counter.id)}
					className="btn btn-danger btn-sm m-2">
					Delete
				</button>
			</div>
		);
	}

	getBadgeClasses() {
		let classes = "badge m-2 text-bg-";
		classes += this.props.counter.value === 0 ? "warning " : "primary";
		return classes;
	}

	formatCount() {
		const { value } = this.props.counter;
		return value === 0 ? "Zero" : value;
	}
}
