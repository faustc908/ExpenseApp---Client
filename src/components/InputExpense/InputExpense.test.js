import React from 'react';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import InputExpense from './InputExpense'
import ReactDOM from 'react-dom';

describe(`InputExpense component`, () => {

    it('renders a InputExpense by default', () => {
        const wrapper = shallow(<InputExpense />)
        expect(toJson(wrapper)).toMatchSnapshot()
    })

})