import React from 'react';
import '../styles/login-signup.css'
const Logout = (props) => {
    const {
        handleLogout
    } = props ;
    return(
        <section className='hero'>
            <nav>
                <button id='logout_Btn' onClick={handleLogout}>Logout</button>
            </nav>
        </section>
    );
};

export default Logout;