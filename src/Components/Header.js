import React from 'react';
import styled from 'styled-components';

const AHeader = styled.header`
  margin: 15px;
`;

const HeadLine = styled.h3`
  font-size: 40px;
  margin: 30px 0px;
`;

class Header extends React.Component {
  render() {
    return (
      <AHeader>
        <HeadLine>Todo List</HeadLine>
        <div>
          <label>View incomplete Todo</label>
          <input type='checkbox' onChange={this.props.onChange} />
        </div>
      </AHeader>
    );
  }
}

export default Header;
