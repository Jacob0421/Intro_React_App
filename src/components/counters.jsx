import React, { Component } from "react";
import Counter from "./counter";

export default class Counters extends Component {
	render() {
		console.log("Counters - Rendered");

		// descructuring this.props and selecting everything that we need from it. almost like specifying the columns you need in SQL rather than using '*'
		const { onReset, counters, onDelete, onIncrement } = this.props;
		return (
			<div>
				<button
					className="btn btn-primary btn-sm m-2"
					onClick={onReset}>
					Reset Counters
				</button>
				{counters.map((counter) => (
					<Counter
						/*
                    -----Properties-----
                    - Think of this as the parent. You want the parent to manage the children and perform CRUD Operations.
                    - You dont want the children to be able to delete themselves, so they children raise this to the parent
                    and the parent handles it.
                    - The parent will also assign the 'Name' (ID) to the component, based on the mapped values from the state. (this.state.counters.map ...)
                    */
						// Key is used internally by react so it is not accessible by our components
						key={counter.id}
						onDelete={onDelete}
						onIncrement={onIncrement}
						counter={counter}>
						<h4>Counter #: {counter.id}</h4>
					</Counter>
				))}
			</div>
		);
	}
}
