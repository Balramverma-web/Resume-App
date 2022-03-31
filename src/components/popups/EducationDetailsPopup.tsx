import React from 'react';
import {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addEducation} from "../actions/action.js"

function EducationDetailsPopup(props: { handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; }) {

    const FeducationList=useSelector((state:any)=>state.resumeStruc.educationDetails)

    const [educationList,setEducationList]=useState(
        FeducationList
     );

    console.log(educationList);

    const handleAllChange=(event: React.ChangeEvent<HTMLInputElement>,index: number)=>{
        
       let{name,value}=event.target;

       const list=[...educationList];

       let obj=list[index];

       if(name==="degree"){
           obj.degree=value;
       }
       else if(name==="school"){
           obj.school=value;
       }
       else if(name==="start_date"){
           obj.start_date=value;
       }
       else if(name==="end_date"){
           obj.end_date=value;
       }
       else{
           obj.location=value;
       }

       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       list[index]=obj;
       setEducationList(list);
    }

    const handleDelete=(index:number)=>{
      

        const list=[...educationList];

        list.splice(index,1);
        setEducationList(list);
    }
    const handleEducationAdd = () => {
        setEducationList([...educationList, {
        degree:"",
        school:"",
        start_date:"",
        end_date:"",
        loaction:""
        }]);
      };

      const dispatch=useDispatch();

      function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        dispatch(addEducation(educationList));
        // setPersonal({ 
        // name:"",
        // email:"",
        // street:"",
        // phone:"",
        // job_title:"",
        // dob:"" });
      }



  return (
      <div>
          <span onClick={props.handleClose}>x</span>
          <h3><b>Edit Education Details</b></h3>
    <form>
    {educationList.map((education: any,index: number)=>
    
    <div className="single-input-fields" key={index}>     
    <label className="field-title">
     Degree:
 </label>
 <div className="input-fields">
     <input name="degree"
         type="text" placeholder="Degree.."
         value={education.degree}
         onChange={(e)=>{handleAllChange(e,index)}}  ></input>
         </div>

<label className="field-title">
     School:
 </label>
 <div className="input-fields">
     <input name="school"
         type="text" placeholder="School..."
         value={education.school}
         onChange={(e)=>{handleAllChange(e,index)}}  ></input>
         </div>

<label className="field-title">
     Start Date:
 </label>
 <div className="input-fields">
     <input name="start_date"
         type="date" placeholder="Start Date.."
         value={education.start_date}
         onChange={(e)=>{handleAllChange(e,index)}}  ></input>
         </div>

<label className="field-title">
     End Date:
 </label>
 <div className="input-fields">
     <input name="end_date"
         type="date" placeholder="End Date.."
         value={education.end_date}
         onChange={(e)=>{handleAllChange(e,index)}}  ></input>
         </div>

<label className="field-title">
     Location:
 </label>
 <div className="input-fields">
     <input name="location"
         type="text" placeholder="Location..."
         value={education.location}
         onChange={(e)=>{handleAllChange(e,index)}}  ></input>
         </div>
    
     {educationList.length - 1 === index &&(
         <div>
 <button
   type="button"
   onClick={()=>{handleEducationAdd()}}
   className="add-btn"
 >
   <span>Add a Education Detail</span>
 </button>
 <button onClick={handleSubmit}><b>Save</b></button>
 </div>
)}
  {educationList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span>Remove</span>
                </button>
              )}
  
   </div>

    )}
    </form>
    </div>
  )
}

export default EducationDetailsPopup

