import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test('App component snapshot', () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});
test('App component exists', () => {
  const component = shallow(<App />);
  expect(component.exists()).toBe(true)
});

