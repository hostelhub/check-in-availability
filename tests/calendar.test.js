import React from 'react';
import Calendar from '../client/src/components/calendar';
import { shallow } from 'enzyme';

describe('Going to test for something', () => {
  const wrapper = shallow(<Calendar />);
  test('Says send help', () => {
    expect(wrapper.text()).toEqual('send help');
  });
});