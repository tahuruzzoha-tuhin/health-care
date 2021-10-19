import React, { useState } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com';


function Contact() {


    const [Toggle, setToggle] = useState(false);
    const height ={
    height:  "200px",
    transition: "all 1s ease"

    };

    const noheight ={
    height:  "0px",
    width: "0px",
    transition: "all 1s ease",
    visibilty: "hidden",
    opacity:0,
  
   
    };
function sendEmail(e){
  e.preventDefault();

    emailjs.sendForm('service_zre2p9n', 'template_dxiiv5o', e.target, 'user_NUpGT9fUNA0oPcI3dPi7i')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset();

}
   
  
    return (
        <div className ="Contact " >
            
            <div className="
            title-container ">
                <div className="contact-title  ">

                Contact Global Home Health Care
                </div>

                    <div className="line-contact">
                        <hr className="lna"/>
                        <div className="dot-contact">♦</div>
                        <hr className="lna"/>
                    </div>

            </div>

            <div className="form-container">

                <form className="form" action="submit" onSubmit={sendEmail}>
                    <input className="input " type="text" name="name" id="" placeholder=" Name*" required
                    />  
                          

                    <input className="input " type="text" name="phone" id=""placeholder="Phone Number*" required />
                           
                           

                    <input className="input " type="email" name="email" id="" placeholder="Email*" required/>

                    <div class="position">
                        <div className="text">Would you like to leave a message?</div>
                               <div className="options">
                            <input type="radio" id="yes" name="option"  value="Yes"  onClick={()=>
                        setToggle(!Toggle) }/>
                            <label for="male">Yes</label>
                            <input type="radio" id="no" name="option" value="No" onClick={()=>
                        setToggle(false)}/>
                            <label for="female">No</label>
                               </div>
                            
                    </div>

                   {Toggle?
                    <textarea name="message"  className="text-area" 

                    placeholder="Message" 
                     style={height}
                    ></textarea>
                   :
                   
                   <textarea name="message" className="text-area"

                    placeholder="Message" 
                     style={noheight}
                    ></textarea>
                   
                   }
                    

                   

                    
                           

                    <button className="btn-contact caps ls " type="submit">
                        Submit
                    </button>
                </form>
                <br/>
                <br/>
                <br/>
                <br/>

               
            </div>

           
                    


        </div>
    )
}

export default Contact
