import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './Login.css'

const Login = () => {
    const { user } = useAuth();
    return (
        <div className="main">
            <h2>Please Register Here!</h2>

            <form onSubmit=""  >
                <div className="imgcontainer">
                    <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label for="uname"><b>Username</b></label>
                    <input type="text" placeholder="Enter Username" name="uname" required />

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <label for="psw"><b>Re-Enter Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" required />

                    <button type="submit">Register</button>
                    {/* <label>
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                    </label> */}
                </div>
                <span>Already have an account? Go to
                    <Link to='/login'>
                        <div className="container">
                            <button type="button" className="cancelbtn">Login</button>
                        </div>
                    </Link></span>
                {user.email ? <Redirect to="/"> </Redirect> : <Redirect to="/register"></Redirect>}

            </form>

        </div>
    );
};

export default Login;