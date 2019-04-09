import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import Weeks from './Weeks.jsx';

const CalendarHeader = styled.thead`
  display: flex;
  justify-content: column;
  justify-content: space-between;
  margin-bottom: 5px;
`;

const CalendarMonthYear = styled.tr`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-family: arial;
`;

const MinimumMonthButton = styled.button`
  background-color: white;
  border: none;
  color: #9b9b9b;
  font-size: 100%;
  font-weight: bold;
`;

const PrevNextButtons = styled.button`
  background-color: white;
  border: none;
  font-size: 100%;
  font-weight: bold;
`;

const CalendarDays = styled.tr`
  display: flex;
  justify-content: space-between;
  font-family: arial;
  background-color: #EDEDED;
  color: #7A7A7A;
`;

const OutOfMonthDates = styled.td`
display: flex;
font-size: 20px;
height: 40px;
width: 50px;
align-items: center;
justify-content: center;
border: solid 1px #AFADAD;
color: #bababa;
background-color: #EDEDED;
`;

const DuringMonthDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      day: null,
      month: null,
      year: null,
      days: []
    };
  };
  
  componentDidMount() {
    const day = moment();
    const month = moment.months()[moment().month()];
    const year = moment().year();
    const days = this.allWeeksGenerator(month, year);
    this.setState({
      day,
      month,
      year,
      days
    });
  };
  
  prevMonthHandler() {
    const prevMonth = moment.max(moment(), moment().year(this.state.year).month(this.state.month).subtract(1, 'month'));
    const month = prevMonth.month();
    const year = prevMonth.year();
    const days = this.allWeeksGenerator(month, year);
    this.setState({
      month: moment.months()[month],
      year: year,
      days
    });
  }

  nextMonthHandler() {
    const nextMonth = moment().year(this.state.year).month(this.state.month).add(1, 'month');
    const month = nextMonth.month();
    const year = nextMonth.year();
    const days = this.allWeeksGenerator(month, year);
    this.setState({
      month: moment.months()[month],
      year: year,
      days
    });
  }
  
  dateClickHandler(e) {
    this.setState({
      day: moment(e.target.dataset.value)
    })
    console.log(this.state.day);
  };

  firstWeekGenerator(month, year) {
    const firstWeek = [];
    const firstDay = moment().year(year).month(month).startOf('month').format('dd');
    const daysOfWeek = {
      'Mo': 1,
      'Tu': 2,
      'We': 3,
      'Th': 4,
      'Fr': 5,
      'Sa': 6,
      'Su': 7
    };
    if (firstDay === 'Mo') {
      for (let i = 0; i < 7; i += 1) {
        const firstDayOfMonth = moment().year(year).month(month).startOf('month');
        firstWeek.push(firstDayOfMonth.add(i, 'days'));
      }
    } else {
      for (let i = 1; i < daysOfWeek[firstDay]; i += 1) {
        const firstDayOfMonth = moment().year(year).month(month).startOf('month');
        firstWeek.unshift(firstDayOfMonth.subtract(i, 'days'));
      };
      for (let i = 0; i < 8 - daysOfWeek[firstDay]; i += 1) {
        const firstDayOfMonth = moment().year(year).month(month).startOf('month');
        firstWeek.push(firstDayOfMonth.add(i, 'days'));
      }
    }
    return firstWeek;
  };

  allWeeksGenerator(month, year) {
    const allWeeks = [];
    const firstWeek = this.firstWeekGenerator(month, year);
    allWeeks.push(firstWeek);
    for (let i = 0; i < 5; i += 1) {
      const week = allWeeks[i];
      const newWeek = week.map(day => (moment(day).add(1, 'week')));
      allWeeks.push(newWeek);
    }
    return allWeeks;
  }

  render() {
    let key = 0;

    const minMonth = moment().month();
    let button;
    if (this.state.month === moment.months()[minMonth]) {
      button = <MinimumMonthButton onClick={this.prevMonthHandler.bind(this)}>&#65308;</MinimumMonthButton>
    } else {
      button = <PrevNextButtons onClick={this.prevMonthHandler.bind(this)}>&#65308;</PrevNextButtons>
    }

    return(
      <div>
        <table>
          <CalendarHeader>
            {button}
            <CalendarMonthYear>{this.state.month} {this.state.year}</CalendarMonthYear>
            <PrevNextButtons onClick={this.nextMonthHandler.bind(this)}>&#65310;</PrevNextButtons>
          </CalendarHeader>
          <tbody>
            <CalendarDays>{this.state.weekdays.map(day => (<DuringMonthDates key={key += 1}>{day}</DuringMonthDates>))}</CalendarDays>
            {this.state.days.map(week => <Weeks week={ week } month={ this.state.month } onClick={this.dateClickHandler.bind(this)}/>)}
          </tbody>
        </table>
      </div>
    );
  };
};

export default Calendar;
