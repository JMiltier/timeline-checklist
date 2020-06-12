import React from 'react';

class TodoList extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      complete: this.props.todo.complete,
      style: {textDecorationLine:'none'}
    }

    this.onChange = this.onChange.bind(this);
    this.crossOut = this.crossOut.bind(this);
  }

  componentDidMount() {
    this.crossOut();
  }

  crossOut () {
    this.state.complete ?
      this.setState({
        style: {color: 'grey', textDecorationLine:'line-through'}
      }) :
      this.setState({
        style: {textDecorationLine:'none'}
      });
  }

  onChange () {
    this.setState({
      complete: !this.state.complete
    }, () => this.crossOut())

  }

  render() {
    return (
      <tbody>
        <tr style={this.state.style}>
          <td>{this.props.todo.id}</td>
          <td>{this.props.todo.task}</td>
          <td>{this.props.todo.time}</td>
          <td><input
            name='complete'
            type='checkbox'
            checked={this.state.complete}
            onChange={this.onChange}
          /></td>
        </tr>
      </tbody>
    );
  }
}

export default TodoList;