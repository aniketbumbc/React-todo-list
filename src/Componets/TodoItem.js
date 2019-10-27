import React from "react";

function TodoItem(){

      return(
            <div>
            <h1 className ="h1tag">  To do list  </h1> 


      <div className="listItem">
            <input type="checkbox" />
            <p> Study React </p>
      
            <input type="checkbox" />
            <p> Practice English   </p>
      
            <input type="checkbox" />
            <p>  Learn Code   </p>
      
            <input type="checkbox" />
            <p>  Practice Guitar  </p>  
        
        </div>
      
          </div>

      )
}

export default TodoItem;