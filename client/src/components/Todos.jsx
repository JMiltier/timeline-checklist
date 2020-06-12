import React from 'react';
import TodoList from './TodoList.jsx';

let Todos = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th colSpan='4'>Timeline Checklist Tracker</th>
        </tr>
      </thead>
      {props.todos.map(todo => {
        return <TodoList todo={todo} key={todo.id}/>
      })}
    </table>
  );
}

export default Todos;