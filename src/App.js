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
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id){
    debugger;
  this.setState(preState=>{
    const updatedTodos = preState.todos.map(todo=>{
      if(todo.id === id){
        todo.completed = !todo.completed;
      }
      return todo;
    })
    return{
      todos:updatedTodos 
    }
  })
  }

  render(){
    const todo = this.state.todos.map(todo => 
      <TodoItem key={todo.id}
        text={todo.text}
        id={todo.id}
        completed={todo.completed} handleChange={this.handleChange} />
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
