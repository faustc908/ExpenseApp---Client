import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import IncomeExpenses from './IncomeExpenses'
import ReactDOM from 'react-dom';

describe(`IncomeExpenses component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IncomeExpenses />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})