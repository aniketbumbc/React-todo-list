import React,{Component} from 'react';
import './App.css';
import TodoItem from './Componets/TodoItem';
import todosData from './todosData';

class App extends Component {
constructor(){
  super()
    this.state = {
      todos:todosData,
      stateWord:"What it Today's Do-List"
    }  
  }
  render(){
    const todo = this.state.todos.map(todo => 
      <TodoItem key={todo.id}
        text={todo.text}
        completed={todo.completed} />
    )
    return (
      <div className="todo-list">
         <h5 className="header-class">{this.state.stateWord}</h5>
        {todo}       
      </div>  
    )    
  }
}

export default App;
