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
  width: 40px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
`;

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      month: '',
      year: 0,
      week1: [],
      week2: [],
      week3: [],
      week4: [],
      week5: [],
      week6: []
    }
  }
  
  componentDidMount() {
    const month = moment.months()[moment().month()];
    const year = moment().year();
    const week1 = [1, 2, 3, 4, 5, 6, 7];
    const week2 = [ 8, 9, 10, 11, 12, 13, 14];
    const week3 = [15, 16, 17, 18, 19, 20, 21];
    const week4 = [22, 23, 24, 25, 26, 27, 28];
    const week5 = [29, 30, 1, 2, 3, 4, 5];
    const week6 = [6, 7, 8, 9, 10, 11, 12];
    this.setState({
      month,
      year,
      week1,
      week2,
      week3,
      week4,
      week5,
      week6
    });
  }

  render() {
    const weekdays = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
    let key = 0;
    return(
      <div>
        <table>
          <thead>
            <CalendarMonthYear>{this.state.month} {this.state.year}</CalendarMonthYear>
          </thead>
          <tbody>
            <CalendarDays>{weekdays.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDays>
            <CalendarDates>{this.state.week1.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week2.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week3.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week4.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week5.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
            <CalendarDates>{this.state.week6.map(day => (<Dates key={key += 1}>{day}</Dates>))}</CalendarDates>
          </tbody>
        </table>
        {this.state.date}
      </div>
    )
  }
}

export default Calendar;
