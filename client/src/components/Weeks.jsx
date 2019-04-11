import React from 'react';
import moment from 'moment';
import axios from 'axios';
import {
  Dates,
  ClickedDates,
  BookedDates,
  UnbookedDates,
  OutOfMonthDates,
} from './StyledComponents/styledWeeks.jsx';

class Weeks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDays: []
    };
  }

  componentDidMount() {
    const Id = window.location.pathname.split('/')[2];
    axios.get(`/api/hostels/${Id}/calendar`)
      .then(response => {
        const unformattedDays = response.data;
        const bookedDays = unformattedDays.map(day => (moment(day)));
        this.setState({
          bookedDays
        })
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <Dates>
        {this.props.week.map(day => {
          for (let i = 0; i < this.state.bookedDays.length; i += 1) {
            if ((this.state.bookedDays[i].format('MM DD YY') === day.format('MM DD YY')) && (this.props.month === moment.months()[day.month()])) {
              return (<BookedDates key={day} data-value={day.format()} onClick={this.props.onClick.bind(this)}>{day.date()}</BookedDates>)
            }
          }
          if (day.format('MM DD YY') === this.props.checkIn.format('MM DD YY')) {
            return (<ClickedDates key={day} data-value={day.format()} onClick={this.props.onClick.bind(this)}>{day.date()}</ClickedDates>)
          } else if (this.props.month === moment.months()[day.month()]) {
            return (<UnbookedDates key={day} data-value={day.format()} onClick={this.props.onClick.bind(this)}>{day.date()}</UnbookedDates>)
          } else {
            return (<OutOfMonthDates key={day} data-value={day.format()} onClick={this.props.onClick.bind(this)}>{day.date()}</OutOfMonthDates>)
          }
        })}
      </Dates>
    )
  }
}

export default Weeks;
