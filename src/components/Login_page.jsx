import React ,{ useState, useEffect} from "react";
import GoogleLogin from 'react-google-login';
import { Link } from "react-router-dom";
import { auth , provider} from "../firebase";
import { useStateValue } from "../StateProvider";
import '../styles/login-signup.css'

const Login_page = (props) => {
    const [userName,setUserName] = useState('');
    const [URL,setUrl] = useState('');
    const [{user}, dispatch] = useStateValue();
    const responseGoogle = (response) => {
        setUserName(response?.profileObj.name);
        setEmail(response?.profileObj.email);
        setUrl(response?.profileObj.imageUrl);
  }
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount,
        emaiError,
        passwordError,
        handleLogout,
    } = props ;

    const googleLogin = () => {
        auth.signInWithPopup(provider).then(result => {
            dispatch({
                type : 'SET_USER',
                user : result.user
            })
        })
    }

  

    return(
        <section className='login'>
            <div className='loginContainer'>
            <img src={URL} />
            <h5>Welcome <span>{userName}</span></h5>
                <label><i className='bx bxs-user-circle'></i>Username</label>
                <input type='email' required value={email} 
                onChange={(e ) => setEmail(e.target.value)}/>
                <p className='errorMsg'>{emaiError}</p>
                <label><i className='bx bxs-shield-x'></i>Password</label>
                <input type='password' autoFocus required 
                onChange={e => setPassword(e.target.value)}/>
                <p className='errorMsg'>{passwordError}</p>
                <div className='btnContainer'>
                    {hasAccount ? ( 
                        <>
                        <button onClick={handleLogin}>Sign in</button>
                        <p>Don't have an account<span onClick ={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                        </>
                    ) : (
                        <>
                        <button onClick= {handleSignup}>Sign up</button>
                        <p>Have an account? <span onClick ={() => setHasAccount(!hasAccount)}>Log in</span></p>
                        </>
                    )}
                </div>
                <div id='glogin' onClick={googleLogin}>
                <GoogleLogin
                    clientId="919852946973-sh99h0fhcnjo82fcg09doqq80i0qsvnb.apps.googleusercontent.com"
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
                </div>
                <div id='logOut'>
                <Link to='/admin_login'><button>Admin Login</button></Link>
                </div>
            </div>
        </section>
    )
}

export default Login_page;