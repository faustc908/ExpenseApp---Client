import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import LandingPage from './LandingPage'
import ReactDOM from 'react-dom';

describe(`LandingPage component`, () => {

    it('renders a LandingPage by default', () => {
        const wrapper = shallow(<LandingPage />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})