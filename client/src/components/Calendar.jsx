import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';

const CalendarHeader = styled.thead`
  display: flex;
  justify-content: column;
  justify-content: space-between;
`;

const CalendarMonthYear = styled.tr`
  display: flex;
  justify-content: center;
  font-size: 25px;
  font-family: arial;
  margin-bottom: 10px;
`;

const CalendarDays = styled.tr`
  display: flex;
  justify-content: space-between;
  font-family: arial;
  background-color: #EDEDED;
  color: #7A7A7A;
`;

const CalendarDates = styled.tr`
  display: flex;
  justify-content: space-between;
  font-family: arial;
`;

const Dates = styled.td`
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
      month: '',
      year: 0,
      week0: [],
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: []
    };
  };
  
  componentDidMount() {
    const month = moment.months()[moment().month()];
    const year = moment().year();
    const days = this.allWeeksGenerator(moment.months().indexOf('month'), year);
    this.setState({
      month,
      year,
      week0: days[0],
      week1: days[1],
      week2: days[2],
      week3: days[3],
      week4: days[4],
      week5: days[5]
    });
  };

  firstWeekGenerator(month, year) {
    const firstWeek = [];
    const firstDay = moment().year(year).month(month).startOf('month');
    const firstDayIndex = firstDay.format('dd');
    const daysOfWeek = {
      'Mo': 1,
      'Tu': 2,
      'We': 3,
      'Th': 4,
      'Fr': 5,
      'Sa': 6,
      'Su': 7
    };
    if (firstDayIndex === 'Mo') {
      for (let i = 0; i < 7; i += 1) {
        const firstDayOfMonth = moment().year(year).month(month).startOf('month');
        firstWeek.push(firstDayOfMonth.add(i, 'days'));
      }
    } else {
      for (let i = 1; i < daysOfWeek[firstDayIndex]; i += 1) {
        const firstDayOfMonth = moment().year(year).month(month).startOf('month');
        firstWeek.unshift(firstDayOfMonth.subtract(i, 'days'));
      };
      for (let i = 0; i < 8 - daysOfWeek[firstDayIndex]; i += 1) {
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

  clickHandler(e) {
    this.state.day = e.target.dataset.value;
    console.log(this.state.day);
  };

  render() {
    let key = 0;
    return(
      <div>
        <table>
          <CalendarHeader>
            <button>prev</button>
            <CalendarMonthYear>{this.state.month} {this.state.year}</CalendarMonthYear>
            <button>next</button>
          </CalendarHeader>
          <tbody>
            <CalendarDays>{this.state.weekdays.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDays>
            <CalendarDates>{this.state.week0.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week1.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week2.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week3.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week4.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week5.map(day => (<Dates key={day.date()} data-value={day.date()} onClick={this.clickHandler.bind(this)}>{day.date()}</Dates>))}</CalendarDates>
          </tbody>
        </table>
        {this.state.date}
      </div>
    );
  };
};

export default Calendar;
