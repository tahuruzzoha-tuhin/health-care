import React, { useState } from 'react';
import './LandingSection.css';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
// import {Link} from 'react-router-dom';
import { Link } from 'react-scroll';

function LandingSection() {

    const [index, setIndex] = useState(0);
    const [indexa, setIndexa] = useState(0);
    const [indexb, setIndexb] = useState(0);

    const container = document.querySelector(".picture-container");


    const slideImages = ["/HomePics/bcg-0.jpg", "/HomePics/bcg-1.jpg"
    ];

    const slidebannersa = ["Compassion lives here..", "Compassion lives here.."]
    const slidebannersb = ["Care that lasts a lifetime", "Care that lasts a lifetime"]

    const back = {
        backgroundImage: ` url(/HomePics/bcg-${index}.jpg)`,
        backgroundSize: "cover",
        width: "98%",
        marginTop: '20px',
        marginLeft: '1%',
        border: '1px solid white',
        borderRadius: '10px',
        height: "100vh",
        minWidth: "900px",
        objectFit: "cover",
        transition: "all 1.4s fade",
    }



    function prevSlide() {

        const nextIndex = index - 1;
        const nextIndexa = indexa - 1;
        const nextIndexb = indexb - 1;
        if (nextIndex < 0) {
            setIndex(slideImages.length - 1);
            setIndexa(slidebannersa.length - 1);
            setIndexa(slidebannersb.length - 1);
        } else {
            setIndex(nextIndex);
            setIndexa(nextIndexa);
            setIndexb(nextIndexb);
        }

    }

    function nextSlide() {
        setIndex((index + 1) % slideImages.length);
        setIndexa((indexa + 1) % slidebannersa.length);
        setIndexb((indexb + 1) % slidebannersb.length);
    }


    console.log("index is ", index)


    return (


        <div className="Landing-Section">
            <div className="picture-container fade" style={back} >

                <div className="banner" >
                    <div className="title-a fade-b">
                        {slidebannersa[indexa]}

                    </div>

                    <div className="title-b fade-b">
                        {slidebannersb[indexb]}
                    </div>


                    <Link to="services" smooth={true}
                        duration={1000}
                    >
                        <button className="btn-home fade-b" >Learn More</button>
                    </Link>

                </div>

                {/* <div className="banner-b" >
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                            <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div>

                     <div className="banner-c" >
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                            <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div> */}
                {/* <img src={slideImages[index]} alt=""/>  */}
                <article className="left" >

                    <ArrowBackIosIcon onClick={() => prevSlide()} />
                </article>

                <article className="right"> <ArrowForwardIosIcon onClick={() => nextSlide()} />
                </article>

            </div>

            {/* <div className= "picture-container-b">

                    <div className="banner">
                        <div className="title-a">
                            Compassion lives here..
                            </div>

                       <div className="title-b">
                           Care that lasts a lifetime
                           </div> 
                    </div>
            
                  
                       
             </div> */}
        </div>

    )
}

export default LandingSection;
