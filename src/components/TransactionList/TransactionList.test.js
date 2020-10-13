import React from 'react';
import TransactionList from './TransactionList'
import ReactDOM from 'react-dom';

describe(`TransactionList component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TransactionList />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})