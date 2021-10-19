import { Step } from '@material-ui/core';
import React from 'react';


import '../ST.css';
import './Process.css';
import Care from '../Steps/Care';
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer';



function Process() {
    return (
        <div className="Process">


            {/* <Navbar/>    */}
            <div className="length">
                <div className="main basic">
                    <div className="pt ">
                        Our Process
                    </div>

                    <div className="p-c">
                        All of your medical records will be stored under one secured app. This is Bdcare, where you can store all of your medical documents without any risk. Only doctors who are appointed by you can access to see your records.
                    </div>
                </div>
            </div>

            <Care />
            <Footer />
        </div>
    )
}

export default Process
