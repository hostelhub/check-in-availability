import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const CalendarDates = styled.tr`
  display: flex;
  justify-content: space-between;
  font-family: arial;
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

function Weeks(props) {
  return (
    <CalendarDates>
      {props.week.map(day => {
        if (props.month === moment.months()[day.month()]) {
          return (<DuringMonthDates key={day} data-value={day.format()} onClick={props.onClick.bind(this)}>{day.date()}</DuringMonthDates>)
        } else {
          return (<OutOfMonthDates key={day} data-value={day.format()} onClick={props.onClick.bind(this)}>{day.date()}</OutOfMonthDates>)
        }
      })}
    </CalendarDates>
  )
}

export default Weeks;
