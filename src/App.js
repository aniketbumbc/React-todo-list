import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <h1>  To do list  </h1>
      <form>
        <ul>
        <li>
        <input type="checkbox" name="vehicle1" value="Bike"/> Study React
        </li>
      
       <li>
      <input type="checkbox" name="vehicle2" value="Car"/> Practice Music
      </li>

        <li>
        <input type="checkbox" name="vehicle3" value="Boat" /> Learn Code  
        </li>    
        </ul>        
        </form> 
    </div>
  );
}

export default App;
