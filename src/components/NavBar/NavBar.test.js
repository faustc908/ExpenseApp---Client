import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import NavBar from './NavBar'

describe(`NavBar component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})