import React from 'react'
import { shallow } from 'enzyme'
import { Post } from './Posts';

describe('Post props', () => {
    it('renders without crashing given the required props', () => {
        const props = {
            articles: [],
            isLoading: false,
            getData: function name(params) {
                return params
            }
        }
        const wrapper = shallow(<Post {...props} />)
        expect(wrapper).toMatchSnapshot();
    })
})