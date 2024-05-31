
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleComplete, deleteTodo } from './features/todoSlice';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state.todos.items);
  const completedCount = useSelector(state => state.todos.completedCount);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
    }
  };

  return (
    <div className="App">
      <h1 className='mb-5'>My ToDo List</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new task"
      />
      <button className='bg-info text-light' onClick={handleAddTodo}>Submit</button>
      <ul>
        {todos.map(todo => (
          <li className='text-dark' key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => dispatch(toggleComplete(todo.id))}
            />
            {todo.text}
            <button className='bg-danger rounded shadow ms-5 text-light' onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          </li>
        ))}
      </ul>
      <div>Total Complete Items: {completedCount}</div>
    </div>
  );
}

export default App;
