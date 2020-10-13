import React from 'react';
import NavBar from './NavBar'
import ReactDOM from 'react-dom';

describe(`NavBar component`, () => {

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<NavBar />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

})