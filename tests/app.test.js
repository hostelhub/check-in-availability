import React from 'react';
import App from '../client/src/components/App';
import Calendar from '../client/src/components/Calendar'
import { shallow } from 'enzyme';

describe('Calendar component application', () => {
  it('Tests for properly rendered application.', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });
  
  it('Tests for properly rendering Calendar component.', () => {
    const wrapper = shallow(<Calendar />);
    expect(wrapper.exists()).toBe(true);
  })
})
