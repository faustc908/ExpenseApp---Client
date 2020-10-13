import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AddTransaction from './AddTransaction'
import ReactDOM from 'react-dom';

describe(`AddTransaction component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<AddTransaction />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})