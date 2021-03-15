import React from 'react'

const TodoItem = (props) => {
  return (
    <div>
      <input type="checkbox" id={props.key} name="first" checked={props.isComplete ? 'checked' : ''} />
      <label htmlFor={props.key} >{props.todo} <span>: {props.importance}</span></label>
    </div>

  );
}

export default TodoItem;
