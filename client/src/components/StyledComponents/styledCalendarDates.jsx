const CalendarHeader = styled.thead`
  display: flex;
  justify-content: column;
  justify-content: space-between;
  background-color: #FFFFFF;
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

const DuringMonthDates = styled.td`
  display: flex;
  font-size: 20px;
  height: 40px;
  width: 50px;
  align-items: center;
  justify-content: center;
  border: solid 1px #AFADAD;
`;

module.exports = {
  CalendarHeader,
  CalendarMonthYear,
  MinimumMonthButton,
  PrevNextButtons,
  CalendarDays,
  DuringMonthDates,
};
