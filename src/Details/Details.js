import React from 'react'
import './AboutPage.css'
import '../ST.css'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import About from '../About/About'

function Details() {
    return (
        <div className="AboutPage">

            {/* <Navbar/> */}

            <div className="MS basic center">
                <div className="vision margin">
                    <div className="about-ms font-title">
                        Extraordinary Expectations
                    </div>

                    <div className="p">
                        The preferred health care provider offering quality care in a supportive environment

                    </div>

                </div>

                <div className="mission margin">

                    <div className="about-ms  font-title">
                        Our Mission
                    </div>

                    <div className="p">
                        Providing a wide range of high quality and culturally sensitive services, while ensuring accessibility to resources and eliminating barriers to quality health care
                    </div>



                </div>

            </div>
            <About />
            <Footer />

        </div>
    )
}

export default Details;
