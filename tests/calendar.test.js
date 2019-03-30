import React from 'react';
import Calendar from '../client/src/components/calendar';
import { shallow } from 'enzyme';

it('Going to test for something', () => {
  const wrapper = shallow(<Calendar />);
  expect(wrapper.text()).toEqual('send help');
});