import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import PersonalDetailsPopup from "./popups/PersonalDetailsPopup";
import EducationDetailsPopup from "./popups/EducationDetailsPopup";
import ExperienceDetailsPopup from "./popups/ExperienceDetailsPopup";
import SkillsDetailsPopup from "./popups/SkillsDetailsPopup";
import ResumePreview from "./ResumePreview";
import  "./css/contentPage.css";


function ContentPage():JSX.Element{

    const [isOpenPersonal, setIsOpenPersonal] = useState(false);
    const [isOpenEducation, setIsOpenEducation] = useState(false);
    const [isOpenExperience, setIsOpenExperience] = useState(false);
    const [isOpenSkills, setIsOpenSkills] = useState(false);
 
    const togglePopup = (signal:string) => {

        if(signal==='isOpenPersonal'){
      setIsOpenPersonal(!isOpenPersonal);
        }
        else if(signal==='isOpenEducation'){
            setIsOpenEducation(!isOpenEducation);
        }
        else if(signal==='isOpenExperience'){
            setIsOpenExperience(!isOpenExperience);
        }
        else{
            setIsOpenSkills(!isOpenSkills);
        }
    }

    const {name,email,phone,street,dob} = useSelector((state:any) => state.resumeStruc.personalDetails);

    


    return(
        <div className="main-div">
        <div className="section">
            <div className="section-header">
               <div><h3><b>Personal Details...</b></h3></div>
               <div><button onClick={()=>togglePopup('isOpenPersonal')}>Edit ✍🏻</button></div> 
            </div>

            <div className="personal-details-section">
                <div className="personal-img-name">
                    <div><img/></div>
                    <div><h3><b>{name}</b></h3></div>
                </div>
                <div><b>Email: </b>{email}</div>
                <div><b>Phone: </b>{phone}</div>
                <div><b>Address: </b>{street}</div>
                <div><b>DOB:  </b>{dob}</div>

            </div>

            {isOpenPersonal&&<PersonalDetailsPopup
            handleClose={()=>togglePopup('isOpenPersonal')}/>}

            <div>
            <div className="section-header">
               <div><h3><b>Education Details..</b></h3></div>
               <div><button onClick={()=>togglePopup('isOpenEducation')}>Edit ✍🏻</button></div> 
            </div>
            </div>
            {isOpenEducation&&<EducationDetailsPopup
            handleClose={()=>togglePopup('isOpenEducation')}/>}

            <div className="section-header">
               <div><h3><b>Experiences..</b></h3></div>
               <div><button onClick={()=>togglePopup('isOpenExperience')}>Edit ✍🏻</button></div> 
            </div>
            {isOpenExperience&&<ExperienceDetailsPopup
            handleClose={()=>togglePopup('isOpenExperience')}/>}

      <div className="section-header">
               <div><h3><b>Skills..</b></h3></div>
               <div><button onClick={()=>togglePopup('isOpenSkills')}>Edit ✍🏻</button></div> 
            </div>
            {isOpenSkills&&<SkillsDetailsPopup
            handleClose={()=>togglePopup('isOpenSkills')}/>} 
        </div>
        <ResumePreview></ResumePreview>
     </div>
    );
}

export default ContentPage;
