import React from 'react';
import styled from 'styled-components';
import ButtonStyle from '../Styles/ButtonStyle';
import InputStyle from '../Styles/InputStyle';

const InputName = styled(InputStyle)`
`;

const Button = styled(ButtonStyle)`
`;

class InputBar extends React.Component {
  handleTodoChange = e => {
    this.props.onChange(e.target.value);
  }

  handleUpdateTodoList = () => {
    this.props.onClick();
  }

  render() {
    const { inputValue } = this.props;

    return (
      <section className='todoList-inputBar'>
        <InputName
          onChange={this.handleTodoChange}
          value={inputValue}
        />
        <Button onClick={this.handleUpdateTodoList}>
          Add
        </Button>
      </section>
    );
  }
}

export default InputBar;
