
import React, { useState } from 'react';
import '../ST.css';
import './ServicePage.css'
import Navbar from '../NavBar/Navbar';
import Footer from '../Footer/Footer'
import Contact from '../Contact/Contact'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
// above are components

import care from '../i/care.svg';
import hosptoHome from '../i/hospitalcare.svg';
import Medication from '../i/medication.svg';
import PSW from '../i/PSW.svg';
import sweeping from '../i/sweeping.svg';
import mealprep from '../i/mealprep.svg';
import nurse from '../i/nurse.svg';
import { Link } from 'react-router-dom';


function ServicePage() {
    const [Toggle, setToggle] = useState(false);
    const [ToggleB, setToggleB] = useState(false);
    const [ToggleC, setToggleC] = useState(false);
    const [ToggleD, setToggleD] = useState(false);
    const [ToggleE, setToggleE] = useState(false);
    const [ToggleF, setToggleF] = useState(false);

    const Show = {
        height: "auto"
    };


    function a() {
        console.log("fcn called");
        setToggle(!Toggle);
        setToggleB(false);
        setToggleC(false);
        setToggleD(false);
        setToggleE(false);
        setToggleF(false);
    }

    function b() {
        console.log("fcn called");
        setToggle(false);
        setToggleB(!ToggleB);
        setToggleC(false);
        setToggleD(false);
        setToggleE(false);
        setToggleF(false);
    }

    function c() {
        console.log("fcn called");
        setToggle(false);
        setToggleB(false);
        setToggleC(!ToggleC);
        setToggleD(false);
        setToggleE(false);
        setToggleF(false);
    }

    function d() {
        console.log("fcn called");
        setToggle(false);
        setToggleB(false);
        setToggleC(false);
        setToggleD(!ToggleD);
        setToggleE(false);
        setToggleF(false);
    }


    function e() {
        console.log("fcn called");
        setToggle(false);
        setToggleB(false);
        setToggleC(false);
        setToggleD(false);
        setToggleE(!ToggleE);
        setToggleF(false);
    }

    function f() {
        console.log("fcn called");
        setToggle(false);
        setToggleB(false);
        setToggleC(false);
        setToggleD(false);
        setToggleE(false);
        setToggleF(!ToggleF);
    }

    return (
        <div className="Serivce-Page">
            {/* <Navbar/> */}

            {/* <Navbar/>    */}
            <div className="intro-service pads basic">

                {/* <img src="./IL/moon.jpg" alt=""/> */}

                <div className="servicePage-title center  font-title ">

                    Our In-Home Care Services
                </div>

                <div className="cont">
                    <div className="para-a-a italic">
                        It’s simple. We do everything we can to help you live your best life..
                    </div>



                    <div className="para-a-a">
                        It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.
                    </div>

                </div>

            </div>

            <div className="service-section">

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


                        <button className="btn caps" onClick={() => a()}
                        >Learn more</button>

                    </article>
                    {/* END OF CARE & COMP */}

                    {Toggle ?

                        <div className="Pop-box  "  >

                            <article className="detail ">

                                <div className="detail-title">
                                    Caregiver
                                </div>

                                <div className="detail-desc">
                                    It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.
                                </div>

                                <Link to="/details">

                                    <button className="service-buttons">Get Details </button>

                                </Link>




                            </article>

                        </div>
                        : console.log("k")

                    }
                    {/* end of pop box of care-giver */}


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

                        <button className="btn caps" onClick={() => b()}>Learn more</button>



                    </article>
                    {/* end of nusring service */}




                    {ToggleB ?
                        <div className="Pop-box" style={Show} >

                            <article className="detail">

                                <div className="detail-title">
                                    Practical Nursing
                                </div>

                                <div className="detail-desc">
                                    It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.
                                </div>
                                <Link to="/details">
                                    <button className="service-buttons">Get Details </button>
                                </Link>

                            </article>

                            <hr className="lineService" />

                            <article className="detail-a">

                                <div className="detail-title">
                                    Nursing
                                </div>



                                <div className="detail-desc">
                                    Fair Health is the first and largest innovative online healthcare startup, built with a mission
                                </div>

                                <Link to="/details">
                                    <button className="service-buttons">Get Details </button>

                                </Link>


                            </article>

                        </div>

                        :
                        console.log("lo")}
                    {/* end of pop box of nursing*/}



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

                        <button className="btn caps" onClick={() => c()}>Learn more</button>

                    </article>
                    {/* end of house keeping service */}

                    {ToggleC ?

                        <div className="Pop-box" style={Show} >

                            <article className="detail">

                                <div className="detail-title">
                                    House Keeping
                                </div>

                                <div className="detail-desc">
                                    All of your medical records will be stored under one secured app. This is Bdcare, where you can store all of your medical documents without any risk. Only doctors who are appointed by you can access to see your records.
                                </div>

                                <Link to="/details">
                                    <button className="service-buttons">Get Details </button>


                                </Link>


                            </article>

                        </div>
                        :
                        console.log("op")

                    }

                    {/* end of House Keeping POP UP */}



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

                        <button className="btn caps " onClick={() => d()}>Learn more</button>

                    </article>




                    {ToggleD ?


                        <div className="Pop-box" style={Show} >

                            <article className="detail">

                                <div className="detail-title">
                                    Personal Support
                                </div>

                                <div className="detail-desc">
                                    It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues.
                                </div>

                                <Link to="/details">

                                    <button className="service-buttons">Get Details </button>

                                </Link>


                            </article>

                        </div>
                        :
                        console.log("op")
                    }
                    {/* end of Peronal Support POP UP  */}



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
                        <button className="btn caps " onClick={() => e()}>Learn more</button>

                    </article>
                    {/* END OF MEAL PREP */}

                    {ToggleE ?

                        <div className="Pop-box" style={Show} >

                            <article className="detail">

                                <div className="detail-title">
                                    Meal Preperation
                                </div>

                                <div className="detail-desc">
                                    Medical tests are organized & divided in smart packages which users can choose according to their needs.
                                </div>

                                <Link to="/details">
                                    <button className="service-buttons">Get Details </button>

                                </Link>


                            </article>

                        </div> :
                        console.log("P")
                    }

                    {/* end of Meal Support pop box*/}


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

                        <button className="btn caps " onClick={() => f()}>Learn more</button>

                    </article>
                    {/* end of Medication Service */}


                    {ToggleF ?

                        <div className="Pop-box" style={Show} >

                            <article className="detail">

                                <div className="detail-title">
                                    Medication
                                </div>

                                <div className="detail-desc">
                                    Fair Health is the first and largest innovative online healthcare startup, built with a mission to create a “one-stop” healthcare platform
                                </div>

                                <Link to="/details">
                                    <button className="service-buttons">Get Details </button>
                                </Link>


                            </article>

                        </div> :

                        console.log("p")

                    }

                    {/* end of Medication care POP*/}

                </div>
                {/* end of all services */}

            </div>

            {/* <Contact /> */}
            <Footer />
        </div>
    )
}

export default ServicePage
