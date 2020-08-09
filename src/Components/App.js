import React from 'react';
import styled from 'styled-components';

import Board from './Board';
import InputBar from './InputBar';
import Header from './Header';
import GlobalStyles from '../Styles/GlobalStyles';

const Container = styled.div`
    flex-direction: column;
    display: flex;
    align-items: center;
    background-color: white;
    width: 600px;
    height: 500px;
    border-radius: 30px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: '',
      list: [],
      inComplete: false
    }
  }

  handleViewInComplete = e => {
    this.setState({
      inComplete: e.target.checked
    });
  }
  
  handleCompleteTodo = (id, checked) => {
    const { list } = this.state;

    list.some(todo => {
      if (todo.id === id) {
        todo.complete = checked
      }
      return todo.id === id;
    });

    this.setState({
      list: list
    });
  }

  handleEditTodo = (editId, text) => {
    const { list } = this.state;

    list.some(todo => {
      if (todo.id === editId) {
        if (text) {
          todo.text = text;
        }
        todo.edit = !todo.edit;
      }
      return todo.id === editId;
    });

    this.setState({
      list: list
    })
  }

  handleDeleteTodo = deleteId => {
    const { list } = this.state;
    this.setState({
      list: list.filter(todo => todo.id !== deleteId)
    })
  }

  handleUpdateTodoList = () => {
    const { list, inputText} = this.state;
    list.push({
      id: Math.random().toString(36).substr(2, 8),
      text: inputText,
      complete: false,
      edit: false
    });
    this.setState({
      inputText: '',
      list: list
    });
  }

  handleTodoChange = todoText => {
    this.setState({
      inputText: todoText
    });
  }

  render() {
    const { inputText, list, inComplete } = this.state;

    return (
      <>
        <Container>
          <div>
          <Header
            onChange={this.handleViewInComplete}
          />
          <InputBar
            inputValue={inputText}
            onChange={this.handleTodoChange}
            onClick={this.handleUpdateTodoList}
          />
          </div>
          <section className='todoList-board'>
            <ol>
              <Board
                list={list}
                viewInComplete={inComplete}
                onClickDelete={this.handleDeleteTodo}
                onClickEdit={this.handleEditTodo}
                onChangeComplete={this.handleCompleteTodo}
              />
            </ol>
          </section>
        </Container>
        <GlobalStyles />
      </>
    );
  }
}

export default App;
