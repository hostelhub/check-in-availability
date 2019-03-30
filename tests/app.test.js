import React from 'react';
import App from '../client/src/components/App';
import { shallow } from 'enzyme';

it('Going to test for something', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.text()).toEqual('send help');
});