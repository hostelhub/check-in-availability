import React from 'react';
import styled from 'styled-components';
import Calendar from './Calendar.jsx';

const Title = styled.header`
  font-size: 30px;
  font-family: arial;
  margin-bottom: 10px;
`;

const BookingInfo = styled.div`
  display: flex;
  justify-content: column;
  justify-content: space-evenly;
  font-size: 15px;
  font-family: arial;
  margin-bottom: 10px
`;

const InputFields = styled.input`
  height: 2.3125rem;
  width: 100%;
  font-size: 0.8rem;
  color: #666;
`;

const GuestsSelectorField = styled.select`
  height: 2.3125rem;
  width: 100%;
  font-size: 0.8rem;
  color: #666;
`;

const GroupOptions = styled.ul`
  display: flex;
  justify-content: column;
  justify-content: center;
`;

const LabelOptions = styled.ul`
  display: flex;
  margin-top: 11px;
`;

const GroupSelectorField = styled.select`
  height: 2.3125rem;
  width: 50%;
  font-size: 0.8rem;
  color: #666;
`;

const JustForShowButton = styled.button`
color: #ffffff;
background-color: #ff7547;
height: 2.3125rem;
width: 100%;
font-size: 0.8rem;
margin-top: 17px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      guestNumberOptions: [],
      groupSize: 1,
      groupTypes: [],
      groupType: 'Group Type',
      toTwelve: false,
      toEighteen: false,
      toTwentyOne: false,
      toThirtyFive: false,
      toFifty: false,
      aboveFifty: false
    };
  };

  componentDidMount() {
    const guestNumberOptions = this.guestNumberGenerator();
    const groupTypes = this.groupTypeGenerator();
    this.setState({
      guestNumberOptions,
      groupTypes
    });
  }

  guestNumberHandler(e) {
    this.setState({
      groupSize: parseInt(e.target.value)
    });
  };

  groupTypeHandler(e) {
    this.setState({
      groupType: e.target.value
    });
  };

  groupAgeHandler(e) {
    this.setState({
      [e.target.name]: !this.state[e.target.name]
    });
  };

  guestNumberGenerator() {
    const guestNumberOptions = [<option key='1' value='1'>1 Guest</option>];
    for (let i = 2; i < 81; i += 1) {
      guestNumberOptions.push(<option key={`${i}`} value={`${i}`}>{i} Guests</option>);
    }
    return guestNumberOptions;
  }

  groupTypeGenerator() {
    const groupTypes = [
      'Group Type',
      'Holiday with Friends',
      'Junior/Primary School',
      'High/Secondary School',
      'College/University',
      'Business Trip',
      'Stag / Hen / Bachelor Party',
      'Sports Group',
      'Cultural Group'
    ];
    const groupInfo = [];
    for (let i = 0; i < groupTypes.length; i += 1) {
      groupInfo.push(<option key={`${i}`} value={`${groupTypes[i]}`}>{groupTypes[i]}</option>)
    }
    return groupInfo;
  }

  render() {
    let groupTypeOptions;
    let groupAgeOptions;
    if (this.state.groupSize >= '9') {
      groupTypeOptions = <GroupSelectorField name='type_of_group' value={this.state.groupType} onChange={this.groupTypeHandler.bind(this)}>{this.state.groupTypes.map(type => {return type})}</GroupSelectorField>
      groupAgeOptions = <LabelOptions class='age_selection'>
          <label name='toTwelve'>0-12</label>
          <input type='checkbox' name='toTwelve' value={this.state.toTwelve} onClick={this.groupAgeHandler.bind(this)} />
          <label name='toTwelve'>12-18</label>
          <input type='checkbox' name='toEighteen' value={this.state.toEighteen} onClick={this.groupAgeHandler.bind(this)} />
          <label name='toTwelve'>18-21</label>
          <input type='checkbox' name='toTwentyOne' value={this.state.toTwentyOne} onClick={this.groupAgeHandler.bind(this)} />
          <label name='toTwelve'>21-35</label>
          <input type='checkbox' name='toThirtyFive' value={this.state.toThirtyFive} onClick={this.groupAgeHandler.bind(this)} />
          <label name='toTwelve'>35-50</label>
          <input type='checkbox' name='toFifty' value={this.state.toFifty} onClick={this.groupAgeHandler.bind(this)} />
          <label name='toTwelve'>50+</label>
          <input type='checkbox' name='aboveFifty' value={this.state.aboveFifty} onClick={this.groupAgeHandler.bind(this)} />
        </LabelOptions>
    } else {
      groupTypeOptions = null;
      groupAgeOptions = null;
    }

    return (
      <div>
        <Title>Check Availability</Title>
        <BookingInfo>
          <div>
            <header>CHECK IN</header>
            <InputFields name='check_in_date' type='text' readonly='readonly' width='100' />
          </div>
          <div>
            <header>CHECK OUT</header>
            <InputFields name='check_out_date' type='text' readonly='readonly' />
          </div>
          <div>
            <header>GUESTS</header>
            <GuestsSelectorField name='number_of_guests' value={this.state.guestNumber} onChange={this.guestNumberHandler.bind(this)}>{this.state.guestNumberOptions.map(option => {return option})}</GuestsSelectorField>
          </div>
          <div>
            <JustForShowButton>Search</JustForShowButton>
          </div>
        </BookingInfo>
        <GroupOptions>
          { groupTypeOptions }
          { groupAgeOptions }
        </GroupOptions>
        <Calendar />
      </div>
    )
  }
}

export default App;
