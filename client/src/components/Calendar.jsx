import React from 'react';
import moment from 'moment';
import styled from 'styled-components';
import axios from 'axios';

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
      date: '',
      month: '',
      year: 0,
      days: [],
    };
  };
  
  componentDidMount() {
    const month = moment.months()[moment().month()];
    const year = moment().year();
    const days = this.allWeeksGenerator(month, year);
    this.setState({
      month,
      year,
      days,
    });
  };

  firstWeekGenerator(month, year) {
    const firstWeek = [];
    const firstDay = moment().year(year).month(month).startOf('month');
    const firstDayIndex = firstDay.format('dd');
    console.log(firstDay)
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
      for (let i = 1; i < 8; i += 1) {
        firstWeek.push(i);
      };
    } else {
      for (let i = 1; i < daysOfWeek[firstDayIndex]; i += 1) {
        firstWeek.unshift(parseInt(firstDay.subtract(1, 'days').format().slice(8, 10)));
        console.log(firstDay.subtract(1, 'days').format('d'));
      };
      for (let i = 1; i < 9 - daysOfWeek[firstDayIndex]; i += 1) {
        firstWeek.push(i);
      };
    };
    return firstWeek;
  };

  allWeeksGenerator(month, year) {
    const weeks = [];
    const firstWeek = this.firstWeekGenerator(month, year);
    weeks.push(firstWeek);
    for (let i = 0; i < 5; i += 1) {
      const week = weeks[i];
      const newWeek = week.map(day => (parseInt(moment().year(year).month(month).date(day).add(7, 'days').format().slice(8, 10))));
      weeks.push(newWeek);
    }
    return weeks;
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
          <thead>
            <CalendarMonthYear>{this.state.month} {this.state.year}</CalendarMonthYear>
          </thead>
          <tbody>
            <CalendarDays>{this.state.weekdays.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDays>
            <CalendarDates>{this.state.days.map(day => (<Dates key={day} data-value={day} onClick={this.clickHandler.bind(this)}>{day}</Dates>))}</CalendarDates>
          </tbody>
        </table>
        {this.state.date}
      </div>
    );
  };
};

export default Calendar;
