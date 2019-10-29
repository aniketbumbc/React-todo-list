import React from 'react';
import './App.css';
import TodoItem from './Componets/TodoItem';
import todosData from './todosData';

function App() {

  const todo = todosData.map(todo => 
    <TodoItem key={todo.id}
      text={todo.text}
      completed={todo.completed} />
  )
  return (
    <div className="todo-list">
      {todo}
    </div>

  )
}

export default App;
