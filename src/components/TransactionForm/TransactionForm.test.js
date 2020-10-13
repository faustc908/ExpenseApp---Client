import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TransactionForm from './TransactionForm'
import ReactDOM from 'react-dom';

describe(`TransactionForm component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<TransactionForm />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})