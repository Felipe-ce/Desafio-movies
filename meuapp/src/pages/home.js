import React, { Component } from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  color: #000;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <Title>TTNFLIX</Title>
        <img src="http://www.joaoalberto.com/wp-content/uploads/2022/01/03/cinema-1.jpg" />
      </div>
    );
  }
}
export default Home;
