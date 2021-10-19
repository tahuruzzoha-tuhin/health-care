import React from 'react';
// import './ServicePage.css'
import './S.css';
import '../ST.css';
import care from '../i/care.svg';
import hosptoHome from '../i/hospitalcare.svg';
import Medication from '../i/medication.svg';
import PSW from '../i/PSW.svg';
import sweeping from '../i/sweeping.svg';
import mealprep from '../i/mealprep.svg';
import nurse from '../i/nurse.svg';
import { BrowserRouter as Router, Switch, Route }
    from 'react-router-dom';

import { Link } from 'react-router-dom';



function Services() {
    return (
        <div className="Services-Container" id="services">


            <div className="T basic x">Services</div>

            <div className="basic">
                <div className="cont">
                    <div className="T-b italic">It’s simple. We do everything we can to help you live your best life..</div>
                    <div className="serives-para">
                        Fair Health is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform for Doctors & Users. This is created with a vision to provide easy access for mass people to the healthcare system. We are technologically driven with all medical needs.

                    </div>

                </div>
            </div>


            <div className="all-services">

                <article className="service">

                    <img className="service-img" src={care} alt="" />

                    <div className="service-title ">
                        Care and Companionship
                    </div>


                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>

                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>



                </article>

                <article className="service">


                    <img className="service-img" src={nurse} alt="" />



                    <div className="service-title ">
                        Nursing Care
                    </div>


                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>

                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>


                </article>


                <article className="service">

                    <img className="service-img" src={sweeping} alt="" />



                    <div className="service-title ">
                        Housekeeping
                    </div>


                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>


                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>


                </article>


                <article className="service"
                >

                    <img className="service-img" src={PSW} alt="" />



                    <div className="service-title ">
                        Personal Support
                    </div>
                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>



                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>

                </article>


                <article className="service">

                    <img className="service-img" src={mealprep} alt="" />




                    <div className="service-title ">
                        Meal Preperation
                    </div>

                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>

                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>

                </article>


                <article className="service">

                    <img className="service-img" src={Medication} alt="" />



                    <div className="service-title ">
                        Medication
                    </div>

                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>

                    <div className="link">
                        <Link className="width" to="/services">
                            <button className="btn caps" type="submit">Learn more</button>
                        </Link>
                    </div>

                </article>


                <article className="service">

                    <img className="service-img" src={hosptoHome} alt="" />


                    <div className="service-title ">
                        Hospital to home care
                    </div>

                    <div className="line-s">
                        <hr className="ln" />
                        <div className="dot-s">♦</div>
                        <hr className="ln" />
                    </div>

                    <button className="btn caps">Learn more</button>

                </article>

            </div>
            {/* end of all services */}

        </div>
        // end of services container
    )
}

export default Services;
