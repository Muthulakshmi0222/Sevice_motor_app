import { TextField } from '@material-ui/core'
import React, { useState } from 'react'
import '../styles/Admin.css'
import Admin_Page from './Admin_Page'

const Admin = () => {
    const [adminEmail, setAdminEmail] = useState('');
    const [adminPassword, setAdminPassword] = useState('');
    const [errorMessage, seterrorMessage] = useState();
    const [valid, setValid] = useState(false);

    const ADMIN_EMAIL = process.env.REACT_APP_ADMIN_EMAIL;
    const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD;

    const handleAdmin = (e) => { 
        e.preventDefault();
        if(adminEmail.trim().length > 0 && adminPassword.trim().length > 0){
            if(adminEmail === ADMIN_EMAIL && adminPassword === ADMIN_PASSWORD){
                setValid(true);
            }
            seterrorMessage('Invalid Data');
            return true;
        }
        seterrorMessage('Please fill all the filled')
    }
    return(
        <>{
            valid ? (
                <Admin_Page />
            ) :(
                <div className="admin_login_Div">
                    <div className="adminLoginContainer">
                    <h2>ADMIN</h2>
                        <form>
                        <input type="email" 
                        placeholder='Email'
                        onChange={(e) => setAdminEmail(e.target.value)}
                        />
                        <input type="password" 
                        placeholder='Password'
                        onChange={(e) => setAdminPassword(e.target.value)}
                        />
                        <button type='submit' onClick={handleAdmin}>Log in as Admin</button>
                        <p id='adminErrors'>{errorMessage}</p>
                        </form>
                    </div>
                </div>
            )
        }
        </>
    );
};

export default Admin;