import React, {useReducer, useState} from 'react';
import {reducer, initialState} from './reducers/ToDoReducer';

const App = () => {
	const [toDos, dispatch] = useReducer(reducer, initialState);
	const [input, setInput] = useState('');
	
	const onChange = event => {
		setInput(event.target.value);
	};

	const onSubmit = event => {
		event.preventDefault();
		dispatch({type: 'ADD_TO_DO' , payload: input});
		setInput('');
	};
	
	// const toggleComplete = () => {
	// 	dispatch({type: 'TOGGLE_COMPLETE'});
	// };

	// const removeCompleted = () => {
	// 	dispatch({type: 'REMOVE_COMPLETED'});
	// };

	return (
		<>
			<h1>To Do</h1>
			
			<form onSubmit={onSubmit}>
				<input value={input} onChange={onChange}/>
				<button type='submit'>Add To Do</button>
			</form>

			{toDos.map(item => (
				<p className={item.completed ? 'completed' : ''} onClick={() => dispatch({type: 'TOGGLE_COMPLETE', payload: item.id})} key={item.id}>{item.name}</p>
			))}
			
			<button onClick={() => dispatch({type: 'REMOVE_COMPLETED'})}>Clear Completed</button>
		</>
	);
};

export default App;
