import React from 'react';
import './Care.css';
import { Link } from 'react-router-dom';

function Care() {
    return (
        <div className="Care">


            <div className="step-container">
                <div className="image">

                    <img className="image " src="/IL/il-a.jpg" alt="" />

                </div>
                {/* end of image */}
                <div className="steps">

                    <div className="abc">
                        Steps to Care
                    </div>

                    <div className="line-care">

                        <div className="dot-care">♦</div>
                        <div className="hr-care">
                            <hr className="ahmed" />
                        </div>

                    </div>

                    <div className="line-care p">
                        Lorem ipsum dolor, sit amet
                    </div>

                    <div className="one-step">
                        <article className="num">
                            1.
                        </article>

                        <article className="corr">
                            <p><strong className="bold caps">Initial call - </strong>  We started with a motto to work hard to create a bridge between the doctors and users user-friendly! </p>
                        </article>
                    </div>

                    <div className="one-step">
                        <article className="num">
                            2.
                        </article>

                        <article className="corr">
                            <p><strong className="bold caps">In-home care assessment - </strong>  For aged, ill or working people who lack time, we collect samples for test according to your order.!</p>
                        </article>
                    </div>

                    <div className="one-step">
                        <article className="num">
                            3.
                        </article>

                        <article className="corr">
                            <p><strong className="bold caps">Start of care - </strong>Medical tests are organized & divided in smart packages which users can choose according to their needs.! </p>
                        </article>
                    </div>

                    <div className="one-step">
                        <article className="num">
                            4.
                        </article>

                        <article className="corr">
                            <p><strong className="bold caps">client visits - </strong>It’s a knowledge hub. Gather your knowledge about health hazard. Prominent doctors will write to let you know about complex health issues! </p>
                        </article>
                    </div>
                    <br />

                    <Link to="/contact">

                        <button className="btn-b caps " type="submit ">
                            Schedule free assessment
                        </button>
                    </Link>

                </div>

            </div>
            {/* end of steps container */}





            {/* steps to care */}
            <br />
            <br />
            <br />

        </div>
    )
}

export default Care
