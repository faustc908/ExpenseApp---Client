import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TransactionList from './TransactionList'
import ReactDOM from 'react-dom';

describe(`TransactionList component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TransactionList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})