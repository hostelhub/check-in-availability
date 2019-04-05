import React from 'react';
import styled from 'styled-components';
import Calendar from './calendar.jsx';
import axios from 'axios';

const Title = styled.header`
  font-size: 30px;
  font-family: arial;
  margin-bottom: 10px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
  };

  render() {
    return (
      <div>
        <Title>Check Availability</Title>
        <Calendar />
      </div>
    )
  }
}

export default App;

