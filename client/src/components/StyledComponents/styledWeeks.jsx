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

module.exports = {
  Dates,
  ClickedDates,
  BookedDates,
  UnbookedDates,
  OutOfMonthDates,
};
