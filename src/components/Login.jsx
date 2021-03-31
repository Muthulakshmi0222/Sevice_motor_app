import React from "react";
import Login_page from './Login_page';
import { useEffect, useState } from 'react';
import firebaseApp from '../firebase'
import Logout from './Logout'
import { useHistory } from "react-router-dom";
import Admin_Page from './Admin_Page'

const Login = () => {
    const [user,setUser ] = useState('');
        const [email,setEmail ] = useState('');
        const [password,setPassword] = useState('');
        const [emaiError,setEmailError ] = useState('');
        const [passwordError,setPasswordError ] = useState('');
        const [hasAccount,setHasAccount ] = useState(false);
        const history = useHistory()

        const clearInput = () => {
            setEmail('');
            setPassword('');
        }

        const clearErrors = () => {
            setEmailError('');
            setPasswordError('');
        }


        const handleLogin = () => {
            clearErrors();
            firebaseApp
            .auth()
            .signInWithEmailAndPassword(email,password).then(() => {
                alert('Login Successful')
            })
            .catch(err => {
            switch (err.code) {
                case 'auth/invalid-email':
                case 'auth/user-disabled':
                    case 'auth/user-not-found':
                    setEmailError(err.message);
                    break;
                    case 'auth/wrong-password':
                        setPasswordError(err.message);
                        break;
            }
            });
        };

        const  handleSignup = () => {
            clearErrors();
            firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email,password).then(snapshot => {
                alert('Signup Successful')
            })
            .catch(err => {
            switch (err.code) {
                case 'auth/email-already-in-use':
                case 'auth/invalid-email':
                    setEmailError(err.message);
                    break;
                    case 'auth/weak-password':
                        setPasswordError(err.message);
                        break;
            }
            });
        }
        const authListener = () => {
            firebaseApp.auth().onAuthStateChanged(user => {
            if(user){
                setUser(user);
            }
            else {
                setUser('');
            }
            });
        };

        const handleLogout = () =>{
            firebaseApp.auth().signOut();
            history.push("/")
        }

        useEffect( () => {
            authListener();
        },[]);
    return(
        <>
        {user ? (
            <div>
            <Logout handleLogout = {handleLogout}/>
            <Admin_Page/>
            </div>
        ): (
            <Login_page
             email = {email}
            setEmail = {setEmail}
            password = {password}
            setPassword = {setPassword}
            handleLogin = {handleLogin}
            handleSignup = {handleSignup}
            hasAccount = {hasAccount}
            setHasAccount = {setHasAccount}
            emaiError = {emaiError}
            setEmailError = {setEmailError}
            passwordError = {passwordError}
            setPasswordError = {setPasswordError}
            handleLogout = {handleLogout}
            />
        )}
        </>
    );
};
export default Login;