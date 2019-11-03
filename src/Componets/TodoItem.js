import React from "react";

function TodoItem(props){
          return(
      
      <div className="todo-item">
            <input type="checkbox"
             onChange={changeList}
             checked = {props.completed} />
            <p> {props.text} </p>        
        </div>    

      )
}

function changeList(){
      console.log("This is change");
}
export default TodoItem;