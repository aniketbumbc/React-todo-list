import React from 'react';
import './todo-item.css';
const deleteIconImg = process.env.PUBLIC_URL + '/delete-icon.png';

function TodoItem(props) {
  return (
    <div className='todo-item'>
      <img
        className='image-delete'
        src={deleteIconImg}
        alt='Delete'
        onClick={() => props.handleChange(props.id)}
      />
      <p> {props.text} </p>
    </div>
  );
}

export default TodoItem;
