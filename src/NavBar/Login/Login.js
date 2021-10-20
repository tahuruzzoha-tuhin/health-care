import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
// import useFirebase from '../../Hooks/useFirebase';
import './Login.css'

const Login = () => {

    const { user, signInUsingGoogle } = useAuth();
    return (
        <div className="main">
            <h2>Please Login Here!</h2>

            <form onSubmit=""  >
                <div className="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Login</button>
                    <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label>
                </div>

                {/* <Link to='/register'> */}
                <div
                    className="container"
                    onClick={signInUsingGoogle}
                >
                    <span>  <button type="button" className="cancelbtn">Log In with Google {user.email ? <Redirect to="/"> </Redirect> : <Redirect to="/login"></Redirect>}</button> </span>
                </div>
                <div className="container">
                    <Link to='/register'><button type="button" className="cancelbtn">Register with email</button></Link>
                </div>
                {/* </Link> */}
            </form>

        </div>
    );
};

export default Login;