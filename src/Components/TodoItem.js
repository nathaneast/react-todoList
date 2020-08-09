import React from 'react';
import styled from 'styled-components';
import ButtonStyle from '../Styles/ButtonStyle';

const Todo = styled.span`
  padding: 10px;
`;

const Button = styled(ButtonStyle)`
`;

class TodoItem extends React.Component {
  handleCompleteTodo = e => {
    this.props.onChangeComplete(this.props.id, e.target.checked);
  }

  handleEditTodo = () => {
    this.props.onClickEdit(this.props.id);
  }

  handleDeleteTodo = () => {
    this.props.onClickDelete(this.props.id);
  }

  render() {
    const { complete, text } = this.props;
    return (
      <li>
        <input type='checkbox' onChange={this.handleCompleteTodo} checked={complete}></input>
        <Todo>{text}</Todo>
        <Button onClick={this.handleEditTodo}>edit</Button>
        <Button onClick={this.handleDeleteTodo}>delete</Button>
      </li>
    );
  }
}

export default TodoItem;
