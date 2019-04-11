import React from 'react';
import moment from 'moment';
import Weeks from './Weeks.jsx';
import {
  CalendarHeader,
  CalendarMonthYear,
  MinimumMonthButton,
  PrevNextButtons,
  CalendarDays,
  DuringMonthDates,
} from './StyledComponents/styledCalendarDates.jsx'

class CalendarDates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weekdays: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
      month: null,
      year: null,
      days: []
    };
  };
  
  componentDidMount() {
    const month = moment.months()[moment().month()];
    const year = moment().year();
    const days = this.allWeeksGenerator(month, year);
    this.setState({
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
    if ((this.state.month === moment.months()[minMonth]) && (this.state.year === moment().year())) {
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
            {this.state.days.map(week => <Weeks week={ week } month={ this.state.month } checkIn={this.props.checkIn} checkOut={this.props.checkOut} onClick={this.props.onClick.bind(this)}/>)}
          </tbody>
        </table>
      </div>
    );
  };
};

export default CalendarDates;
