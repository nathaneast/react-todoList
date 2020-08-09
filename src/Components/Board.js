import React from 'react';

import TodoItem from './TodoItem';
import TodoEdit from './TodoEdit';

class Board extends React.Component {
  filterInCompleteList = () => {
    const { list } = this.props;
    return list.filter(todo => todo.complete === false);
  }

  todoEdit = todo => {
    const { onClickEdit } = this.props;
    return (
      <TodoEdit
        key={todo.id}
        id={todo.id}
        text={todo.text}
        onClickEdit={onClickEdit}
      />
    );
  }

  todoItem = todo => {
    const { onClickDelete, onClickEdit, onChangeComplete } = this.props;
    return (
      <TodoItem
        key={todo.id}
        id={todo.id}
        text={todo.text}
        complete={todo.complete}
        onClickDelete={onClickDelete}
        onClickEdit={onClickEdit}
        onChangeComplete={onChangeComplete}
      />
    );
  }

  render() {
    const { list, viewInComplete } = this.props;

    return (
      viewInComplete ? (
        this.filterInCompleteList().map(todo => todo.edit ? this.todoEdit(todo) : this.todoItem(todo))
      ) : (
          list.map(todo => todo.edit ? this.todoEdit(todo) : this.todoItem(todo))
        )
    );
  }
}

export default Board;
