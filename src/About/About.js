import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';

function About() {


    return (

        <div className="About">

            <div className="box">


                <div className="about-img">
                    <img className="image " src="/IL/il-b.jpg" alt="" />
                </div>

                <div className="content">

                    <div className="first">
                        <div className="ab">
                            Premimium Home Care Services in Ottawa, ON
                        </div>


                        <div className="line-about">

                            <div className="dot-about">♦</div>
                            <div className="hr-about" >
                                <hr className="ahmed" />
                            </div>

                        </div>
                    </div>

                    <div className="para-a">
                        <p>Fair Health is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform for Doctors & Users. This is created with a vision to provide easy access for mass people to the healthcare system. We are technologically driven with all medical needs.</p>
                    </div>

                    <div className="middle-statement">
                        <span>  <hr className="vr" />

                            <p2 className="vr-b">Over 20 years of experience</p2>

                        </span>


                    </div>

                    <div className="para-a">
                        <p>We started with a motto to work hard to create a bridge between the doctors and users and smoothen to total healthcare process by making all related services user-friendly & accessible. Our journey began in early 2019 with a goal to cover the whole Bangladesh & create the largest league of healthcare service. Our biggest strength is honesty & dedication towards our work to establish the largest platforms to serve people with the best.
                        </p>
                    </div>


                    <Link to="/about">
                        <button className="btn-a caps ls " type="submit">
                            About us
                        </button>
                    </Link>

                </div>


                {/* end of content */}

            </div>
            {/* end of container */}


            <br />
            <br />

        </div>

    )
}

export default About
