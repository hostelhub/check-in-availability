import React from 'react';
import moment from 'moment';
import axios from 'axios';

const Dates = styled.tr`
  display: flex;
  justify-content: space-between;
  font-family: arial;
`;

const ClickedDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
  color: #FFFFFF;
  background-color: #88AA64;
`;

const BookedDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
  background-color: #FFE3E3
`;

const UnbookedDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
  background-color: #DAFDC0;
`;

const OutOfMonthDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
  color: #BABABA;
`;

class Weeks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bookedDays: []
    };
  }

  componentDidMount() {
    const Id = window.location.pathname.split('/')[2];
    axios.get(`/api/hostels/${Id}`)
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
