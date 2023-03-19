import React, { Component } from 'react';
import './App.css';
import TodoItem from './Componets/TodoItem';
import todosData from './todosData';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: todosData,
      task: {
        id: '',
        text: '',
      },
      value: '',
      stateWord: 'Task List For Today',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(id) {
    this.setState((preState) => {
      const updatedTodos = preState.todos.filter((todo) => {
        return todo.id !== id;
      });

      return {
        todos: updatedTodos,
      };
    });
  }

  handleOnChangeTask = async function (event) {
    await this.setState({ value: event.target.value });
  };

  addTask() {
    const trimValue = this.state.value.trim();
    if (!trimValue.length) {
      alert('Please Add Task');
      return;
    }
    const newTask = {
      id: Math.random() * 100,
      text: trimValue,
    };

    this.setState({
      todos: [...this.state.todos, newTask],
    });

    this.setState({ value: ' ' });
  }

  render() {
    const todo = this.state.todos.map((todo) => (
      <TodoItem
        key={todo.id}
        text={todo.text}
        id={todo.id}
        handleChange={this.handleChange.bind(this)}
      />
    ));
    return (
      <div className='todo-list'>
        <h3 className='header-class'>{this.state.stateWord}</h3>
        <div className='container'>
          <input
            type='text'
            size='50'
            height='20px'
            value={this.state.value}
            onChange={this.handleOnChangeTask.bind(this)}
          />{' '}
          <button className='add-btn' onClick={this.addTask.bind(this)}>
            {' '}
            Add Task{' '}
          </button>
        </div>
        {!!todo.length ? (
          todo
        ) : (
          <h1 className='header-class'> Please Add Task</h1>
        )}
      </div>
    );
  }
}

export default App;
