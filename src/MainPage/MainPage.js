import React from 'react'
import Navbar from '../NavBar/Navbar'

import LandingSection from '../LandingSection/LandingSection'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'
import About from '../About/About'
import Steps from '../Steps/Care'
import Footer from '../Footer/Footer'
import {BrowserRouter as Router, Switch, Route} 
from'react-router-dom';
function MainPage() {
    return (
        <div className = "MainPage">

        


        <LandingSection/>
        <Services/>
        <About/>
        <Contact/>
        <Steps/>
        <Footer/>

   
       

        </div>
    )
}

export default MainPage
