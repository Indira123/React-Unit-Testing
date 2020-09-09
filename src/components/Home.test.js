import React from 'react';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import Contact from './Contact';

it('Home component snapshot', () => {
    const component = shallow(<Home />);
    expect(component).toMatchSnapshot();
});
test('Home component exists', () => {
    const component = shallow(<Home />);
    expect(component.exists()).toBe(true)
});
test('Home Prevent Submit', () => {
    const component = shallow(<Home />);
    let prevented = false;
    component.find('form').simulate('submit', {
        preventDefault: () => {
            prevented = true;
        }
    })
    expect(prevented).toBe(true)
})
//integration testing
test('render contact when phone changes', () => {
    const component = mount(<Contact phone='' />);
    component.setProps({ phone: '77777777' });
    expect(component.find('span').prop('id')).toEqual('77777777')
});

