import React from 'react';
import './LandingPage.css'


//  Landing page with application description

const LandingPage = () => {
    return (
        <div>
            <div className='Appdesc'>
                <h2 className='desc'>
                    Welcome to ExpenseApp
            </h2>
                <p className='desc2'>
                    Current times are tough and keeping track of your expenses is as important as ever.  ExpenseApp allows you to calculate your daily transactions so you can keep track of and see where your money is spent.  It also allows you to record any relevant information on a database so you can keep track of disposable income as well as any notes you want to add on good deals or nuances in your daily or monthly expenses.  This app was designed to give you more control in uncertain times.
            </p>
            </div>
            <div className='cards'>
                <p className='card1'>Add and subtract expenses and funds to keep an accurate outlook on your expenses.</p>
                <p className='card2'>Add notes to record specifics on purchases and to keep track of great sales or locations.</p>
                <p className='card3'>Have the confidence of knowing what your balance is and where you are spending unnecessary money.</p>
            </div>
            <footer>
                <p>©Colin Faust 2020</p>
            </footer>
        </div>
    )
}

export default LandingPage;