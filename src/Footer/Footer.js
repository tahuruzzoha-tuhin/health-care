import React from 'react';
import './Footer.css'
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div className="Footer">

            <div className="top">

                <div className="footer-title">
                    Global Home Health Care
                </div>

                <div className="footer-subtitle">
                    Compassion Lives here..
                    Care that lasts a lifetime..
                </div>
            </div>

            <div className="middle">


                <div className="address">

                    <article className="street">
                        <strong className="tele">(613) 890-6850</strong>
                        <div className="name">
                            1201 Queens Street, Ottawa, ON
                        </div>

                    </article>


                </div>

                <hr className="lines" />




            </div>
            {/* end of Menu Block */}

            <div className="bottom">

                <div className="social-icons">
                    <article className="icon">
                        <FacebookIcon />
                    </article>
                    <article className="icon">
                        <TwitterIcon />
                    </article>
                    <article className="icon">
                        <InstagramIcon />
                    </article>
                    <article className="icon">
                        <YouTubeIcon />
                    </article>

                    <article className="icon">
                        <LinkedInIcon />
                    </article>
                </div>


            </div>
        </div>
    )
}

export default Footer
