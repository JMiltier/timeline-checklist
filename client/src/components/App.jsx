import React from 'react';
import Todos from './Todos.jsx';
import AddTodoForm from './AddTodoForm.jsx';
import TodoLogo from './TodoLogo.jsx';

var todos =[
  {id: 1,
  task: 'water flowers',
  time: '07:00 AM',
  complete: true},
  {id: 2,
  task: 'cook breakfast',
  time: '07:30 AM',
  complete: true},
  {id: 3,
  task: 'shower',
  time: '08:00 AM',
  complete: true},
  {id: 4,
  task: 'news update',
  time: '08:30 AM',
  complete: true},
  {id: 5,
  task: 'Hack Reactor Kickoff',
  time: '09:00 AM',
  complete: true}
];

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      todos: todos
    }
  }

  render() {
    return (
      <div>
        <TodoLogo todos={this.state.todos}/>
        <AddTodoForm />
        <Todos todos={this.state.todos}/>
      </div>
    )
  }
}

export default App;