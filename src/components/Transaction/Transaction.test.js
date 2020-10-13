import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Transaction from './Transaction'
import ReactDOM from 'react-dom';

describe(`Transaction component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Transaction />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})