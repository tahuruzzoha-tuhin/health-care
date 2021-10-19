import React from 'react';
import './ContactPage.css';
import Contact from '../Contact/Contact'
import Navbar from '../NavBar/Navbar'
import Footy from '../Footer/Footer'


function ContactPage() {
    return (
        <div className = "ContactPage">
            {/* <Navbar/> */}
            <Contact/>
            <Footy/>
        </div>
    )
}

export default ContactPage
