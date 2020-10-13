import React from 'react';
import EditNote from './EditNote'
import ReactDOM from 'react-dom';

describe(`EditNote component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<EditNote />, div);
        ReactDOM.unmountComponentAtNode(div);
    });
})