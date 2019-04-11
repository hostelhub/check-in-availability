const CalendarContainer = styled.div`
  padding: 15px;
  margin-top: 30px;
  background-color: #EDEDED;
`;

const Title = styled.header`
  font-size: 30px;
  font-family: arial;
  margin-bottom: 10px;
`;

const BookingInfo = styled.div`
  display: flex;
  justify-content: column;
  justify-content: space-around;
  font-size: 15px;
  font-family: arial;
  margin-bottom: 10px;
`;

const InputFields = styled.input`
  height: 1.9rem;
  width: 150%;
  font-size: 0.8rem;
  color: #666;
`;

const GuestsSelectorField = styled.select`
  height: 2.3125rem;
  width: 150%;
  font-size: 0.8rem;
  color: #666;
`;

const GroupOptions = styled.ul`
  display: flex;
  justify-content: column;
  justify-content: center;
`;

const LabelOptions = styled.ul`
  display: flex;
  margin-top: 11px;
`;

const GroupSelectorField = styled.select`
  height: 2.3125rem;
  width: 50%;
  font-size: 0.8rem;
  color: #666;
`;

const JustForShowButton = styled.button`
  color: #FFFFFF;
  background-color: #ff7547;
  height: 2.3125rem;
  width: 100%;
  font-size: 0.8rem;
  margin-top: 17px;
`;

const InvisibleCalendar = styled.div`
  display: none;
`;

const VisibleCalendar = styled.div`
  position: absolute;
  top: 120;
  left: 30;
  z-index: 1;
  background-color: #FFFFFF;
  padding: 5px;
  border: 1px solid #AFADAD;
`;

module.exports = {
  CalendarContainer,
  Title,
  BookingInfo,
  InputFields,
  GuestsSelectorField,
  GroupOptions,
  LabelOptions,
  GroupSelectorField,
  JustForShowButton,
  InvisibleCalendar,
  VisibleCalendar,
};
