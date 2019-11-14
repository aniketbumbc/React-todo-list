import React from "react";

function TodoItem(props){
    console.log(props);
          return(      
      <div className="todo-item">
            <input type="checkbox"
             onChange={()=>props.handleChange(props.id)}
             checked = {props.completed} />
            <p> {props.text} </p>        
        </div>    

      )
}

 // function changeList(){
//      console.log("This is change");
// }
export default TodoItem;