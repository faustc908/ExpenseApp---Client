import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Balance from './Balance'
import ReactDOM from 'react-dom';

describe(`Balance component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Balance />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
});