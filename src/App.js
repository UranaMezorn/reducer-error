import { useReducer } from 'react';

const initialState = { count: 0 };

const reducer = (state, action) => {
	switch (action.type) {
		case 'increment':
			state.count = state.count + 1;
			return { count: state.count };
		case 'decrement':
			state.count = state.count - 1;
			return { count: state.count };
		default:
			return state;
	}
};
function App() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<div className='App'>
			<div>
				<h1>Count: {state.count}</h1>
				<button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
				<button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
			</div>
		</div>
	);
}

export default App;
