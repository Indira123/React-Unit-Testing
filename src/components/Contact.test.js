import React from 'react';
import { shallow } from 'enzyme';
import Contact from './Contact';
const phone = '88888888888';

describe('Contact component renders correctly and snapshot', () => {
    it('App should render correctly', () => {
        const component = shallow(<Contact phone={phone} />);
        expect(component).toMatchSnapshot();
    });
});
describe('Contact component renders correctly without props', () => {
    it('App should render correctly', () => {
        const component = shallow(<Contact />);
        expect(component).toMatchSnapshot();
    });
});