import React from 'react';
import {useSelector} from "react-redux";
import  jsPDF  from "jspdf";
import html2canvas from 'html2canvas';

function ResumePreview() {

  const{personalDetails,educationDetails,experienceDetails,skillsDetails}=useSelector(
      (state:any) => state.resumeStruc);

      const socialDetails = useSelector((state:any) => state.resumeStruc.socialDetails);

      const downloadResume=()=> {
    
        const input:any = document.getElementById('resume-preview');
       console.log(document)
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0,width,height);
            // pdf.output('dataurlnewwindow');
            pdf.save("resume.pdf");
          }).catch(function(error){
            console.log(error)
          })
      }

  return (
    <div className='outer-div'>
    <div id='resume-preview'>
      
       <p style={{textDecorationLine: 'underline'}}><h2><b>Resume</b></h2></p>

    <div className='personal-details'>
        <p><b>Name :</b> {personalDetails.name}</p>
        <p><b>Email :</b> {personalDetails.email}</p>
        <p><b>Phone :</b> {personalDetails.phone}</p>
        <p><b>Address :</b> {personalDetails.street}</p>
        <p><b>Job Title :</b> {personalDetails.job_title}</p>
        <p><b>DOB :</b> {personalDetails.dob}</p>
    </div>

    <div className='social-accounts'>

    <p style={{textDecorationLine: 'underline'}}><h2>Social Accounts</h2></p>

        {socialDetails.map((social:any,index:number) => 
        <div key={index}>
          <a href={social.link}><p><b>{social.title}</b></p></a>
        </div>
        )}

    </div>

    <div className='education-details'>
    <p style={{textDecorationLine: 'underline'}}><h2>Education Details</h2></p>
          
          {educationDetails.map((education:any,index:number) => 
          <div key={index}>
            <p><b>Degree : </b> {education.degree}</p>
            <p><b>School : </b> {education.school}</p>
            <p><b>Start Date : </b> {education.start_date}</p>
            <p><b>End Date : </b> {education.end_date}</p>
            <p><b>Location : </b> {education.location}</p>
          </div>
          )}

    </div>

    <div className='experience-details'>
    <p style={{textDecorationLine: 'underline'}}><h2>Experience Details</h2></p>
          
          {experienceDetails.map((experience:any,index:number) => 
          <div key={index}>
            <p><b>Company Name : </b> {experience.company_name}</p>
            <p><b>Job Title : </b> {experience.job_title}</p>
            <p><b>Duration : </b> {experience.duration}</p>
            <p><b>Description : </b> {experience.description}</p>
          </div>
          )}

    </div>

    <div className='skill-details'>
    <p style={{textDecorationLine: 'underline'}}><h2>Skills</h2></p>
          
          {skillsDetails.map((skills:any,index:number) => 
          <div key={index}>
             <p><b>{skills.skill} : </b> {skills.level}</p>
          </div>
          )}

    </div>
    </div>
    <div className="download-resume">
                
                    <button style={{cursor:'pointer'}}  onClick={downloadResume}  >download Resume</button>
             </div>
  </div>
  )
}

export default ResumePreview;