import React from 'react';

class TodoLogo extends React.Component {
  constructor(props) {
    super(props)

    this.state ={
      todos: this.props.todos,
      style: {filter: 'invert(27%) sepia(97%) saturate(1445%) hue-rotate(91deg) brightness(94%) contrast(106%)'}
    }

    this.stateChange = this.stateChange.bind(this);
  }

  // another stretch - change color of clock to red if task is past due
  // {filter: 'invert(16%) sepia(59%) saturate(6378%) hue-rotate(340deg) brightness(88%) contrast(95%)'}

  componentDidMount() {
    this.stateChange();
  }

  stateChange () {
    try {
      this.state.todos.forEach(todo => {
        console.log('asdf');
        if(!todo.complete) {
          throw {};
        }
        // } else {
        //   this.setState({
        //     style: {filter: 'invert(27%) sepia(97%) saturate(1445%) hue-rotate(91deg) brightness(94%) contrast(106%)'}
        //   })
        // }
      });
    } catch (err) {
      this.setState({
        style: {}
      })
    };
  }

  render() {
    return (
      <img style={this.state.style} src='timechecklogo.png'/>
    )
  }
}

export default TodoLogo;