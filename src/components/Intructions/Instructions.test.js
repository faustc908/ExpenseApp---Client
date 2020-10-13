import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Instructions from './Instructions'
import ReactDOM from 'react-dom';

describe(`Instructions component`, () => {

    it('renders a Instructions by default', () => {
        const wrapper = shallow(<Instructions />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Instructions />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})