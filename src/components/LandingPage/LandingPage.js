import React from 'react';
import './LandingPage.css'


//  Landing page with application description

const LandingPage = () => {
    return (
        <div className='Appdesc'>
            <h2 className='desc'>
                Welcome to ExpenseApp
            </h2>
            <p className='desc'>
                Current times are tough and keeping track of your expenses is as important as ever.  ExpenseApp allows you to calculate your daily transactions so you can keep track of and see where your money is spent.  It also allows you to record any relevant information on a database so you can keep track of disposable income as well as any notes you want to add on good deals or nuances in your daily or monthly expenses.  This app was designed to give you more control in uncertain times.
            </p>
        </div>
    )
}

export default LandingPage;