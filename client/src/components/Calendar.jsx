import React from 'react';
import styled from 'styled-components';
import CalendarDates from './CalendarDates.jsx';
import moment from 'moment';

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
  width: 100%
`;

const GroupSelectorField = styled.select`
  height: 2.3125rem;
  width: 50%;
  font-size: 0.8rem;
  color: #666;
`;

const JustForShowButton = styled.button`
  color: #FFFFFF;
  background-color: #ff7547;
  height: 2.3125rem;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 17px;
`;

const InvisibleCalendar = styled.div`
  display: none;
`;

const VisibleCalendar = styled.div`
  position: absolute;
  top: 120;
  left: 30;
  z-index: 1;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkInDate: moment(),
      checkOutDate: moment().add(3, 'days'),
      guestNumberOptions: [],
      groupSize: 1,
      groupTypes: [],
      groupType: 'Group Type',
      isVisible: false,
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

  checkInClickHandler(e) {
    this.setState({
      checkInDate: moment(e.target.dataset.value),
      checkOutDate: moment(e.target.dataset.value).add(3, 'days')
    });
  };

  guestNumberGenerator() {
    const guestNumberOptions = [<option key='1' value='1'>1 Guest</option>];
    for (let i = 2; i < 81; i += 1) {
      guestNumberOptions.push(<option key={`${i}`} value={`${i}`}>{i} Guests</option>);
    }
    return guestNumberOptions;
  }

  showCalendarHandler() {
    this.setState({
      isVisible: !this.state.isVisible
    })
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

    let disappearingCalendar;
    if (this.state.isVisible === false) {
      disappearingCalendar = <InvisibleCalendar><CalendarDates checkIn={this.state.checkInDate} checkOut={this.state.checkOutDate} onClick={this.checkInClickHandler.bind(this)}/></InvisibleCalendar>
    } else {
      disappearingCalendar = <VisibleCalendar><CalendarDates checkIn={this.state.checkInDate} checkOut={this.state.checkOutDate} onClick={this.checkInClickHandler.bind(this)}/></VisibleCalendar>
    }

    return (
      <div>
        <Title>Check Availability</Title>
        <BookingInfo>
          <div>
            <header>CHECK IN</header>
            <InputFields name='check_in_date' onClick={this.showCalendarHandler.bind(this)} value={this.state.checkInDate.format('DD MMM YYYY')} type='text' readOnly='readOnly' />
          </div>
          <div>
            <header>CHECK OUT</header>
            <InputFields name='check_out_date' value={this.state.checkOutDate.format('DD MMM YYYY')} type='text' readOnly='readOnly' />
          </div>
          <div>
            <header>GUESTS</header>
            <GuestsSelectorField name='number_of_guests' value={this.state.guestNumber} onChange={this.guestNumberHandler.bind(this)}>{this.state.guestNumberOptions.map(option => {return option})}</GuestsSelectorField>
          </div>
          <div>
            <JustForShowButton>Search</JustForShowButton>
          </div>
        </BookingInfo>
        { disappearingCalendar }
        <GroupOptions>
          { groupTypeOptions }
          { groupAgeOptions }
        </GroupOptions>
      </div>
    )
  }
}

export default Calendar;
window.Calendar = Calendar;
