import React from "react";
import {useNavigate} from 'react-router-dom';

function landingPage():JSX.Element {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate=useNavigate();
    return (
    <div className="outer-div">
            <div className="header">
               <span><h4>Resume Creator</h4></span>
               <span>
                   <button className="logoin-btn">Login</button>
                   <button className="try-btn" onClick={()=>{navigate('/content')}}>Try for Free</button>
               </span>
            </div>

            <div className="short-desc">
                <div className="left">
                <div className="feature">
                    Fast. Easy. Effective.
                </div>
                <div>
                    <h3>
                        Online CV Maker Create a Successfull CV Here For Free !
                    </h3>
                </div>
                <div>
                Use professional field-tested resume templates that follow the exact ‘resume rules’ employers look for. Easy to use and done within minutes - try now for free!
                </div>
               <button className="try-btn" onClick={()=>{navigate('/content')}}>Try For Free</button>
            </div>
        </div>
            <div className="right">
          <div className="sample-cv">
          <img src="https://cdn-images.zety.com/images/zety/landings/builder/in/cv-builder-template@2x.png" alt="sample-resume-pic"/>
           </div>
        </div>

        <div className="footer">
            <h4>Build the future with your CV—
             </h4>
        </div>

        </div>);
}
export default landingPage;
