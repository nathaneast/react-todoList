import React from 'react';
import styled from 'styled-components';
import ButtonStyle from '../Styles/ButtonStyle';
import InputStyle from '../Styles/InputStyle';

const EditTodo = styled(InputStyle)`
  width: 100px;
`;

const Button = styled(ButtonStyle)`
`;

class TodoEdit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
  };

  handleChange = e => {
    this.setState({
      value: e.target.value
    });
  }

  handleEditTodo = () => {
    const { value } = this.state;
    const { onClickEdit, id } = this.props;
   onClickEdit(id, value);
  }

  handleEditCancel = () => {
    const { onClickEdit, id } = this.props;
   onClickEdit(id);
  }

  render() {
    return (
      <li>
        <EditTodo type='text' onChange={this.handleChange}></EditTodo>
        <Button onClick={this.handleEditTodo}>Edit</Button>
        <Button onClick={this.handleEditCancel}>Cancel</Button>
      </li>
    );
  }
}

export default TodoEdit;
