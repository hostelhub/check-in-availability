import React from 'react';
import Calendar from '../client/src/components/Calendar';
import CalendarDates from '../client/src/components/CalendarDates'
import Weeks from '../client/src/components/Weeks'
import { shallow } from 'enzyme';

describe('Calendar component application', () => {
  it('Tests for properly rendered application.', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('Tests for properly rendering CalendarDates component.', () => {
    const wrapper = shallow(<CalendarDates />);
    expect(wrapper.exists()).toBe(true);
  });

  it('Tests for properly rendering weeks component.', () => {
    const wrapper = shallow(<Weeks />);
    expect(wrapper.exists()).toBe(true);
  });
})
