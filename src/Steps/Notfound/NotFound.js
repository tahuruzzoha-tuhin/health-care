import React from 'react';
import { Link } from 'react-router-dom';
import errorPic from '../../images/404-error.jpg'

const styles = { display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px' };
const NotFound = () => {

    return (
        <div style={styles}>
            <div>
                <h1>Oops! You are in danger zone! please go <Link to='mainpage'>HOME</Link></h1>
                <img style={{ width: '80%' }} src={errorPic} alt="" />
            </div>
        </div>
    );
};

export default NotFound;