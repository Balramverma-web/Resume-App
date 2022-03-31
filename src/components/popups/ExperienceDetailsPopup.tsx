import React from 'react';
import {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addExperience} from "../actions/action.js"

function ExperienceDetailsPopup(props: { handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; }) {

  const FexperienceList=useSelector((state:any) => state.resumeStruc.experienceDetails)

const[experienceList,setExperienceList]=useState(
  FexperienceList
);

console.log(experienceList);

    const handleAllChange=(event: React.ChangeEvent<HTMLInputElement>,index: number)=>{
        
       let{name,value}=event.target;

       const list=[...experienceList];

       let obj=list[index];

       if(name==="company_name"){
           obj.company_name=value;
       }
       else if(name==="job_title"){
           obj.job_title=value;
       }
       else if(name==="duration"){
           obj.duration=value;
       }
       else{
           obj.description=value;
       }

       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       list[index]=obj;
       setExperienceList(list);
    }

    const handleDelete=(index:number)=>{
      

        const list=[...experienceList];

        list.splice(index,1);
        setExperienceList(list);
    }
    const handleExperienceAdd = () => {
        setExperienceList([...experienceList, {
          company_name:"",
          job_title:"",
          duration:"",
          description:""
        }]);
      };

      const dispatch = useDispatch();

      function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        dispatch(addExperience(experienceList));
        
      }

  return (
    <div>
      <span onClick={props.handleClose}>x</span>
          <h3><b>Edit Experience Details</b></h3>
          <form>
            {experienceList.map((experience:any,index:number)=>
            <div className="single-input-fields" key={index}>     
            <label htmlFor="company_name" className="field-title">
             Company Name:
         </label>
         <div className="input-fields">
             <input name="company_name" id="company_name"
                 type="text" placeholder="Company Name.."
                 value={experience.company_name}
                 onChange={(e)=>{handleAllChange(e,index)}}  ></input>
                 </div>

                 <label htmlFor="job_title" className="field-title">
             Job Title:
         </label>
         <div className="input-fields">
             <input name="job_title" id="job_title"
                 type="text" placeholder="Job Title.."
                 value={experience.job_title}
                 onChange={(e)=>{handleAllChange(e,index)}}  ></input>
                 </div>

                 <label htmlFor="duration" className="field-title">
                 Duration:
         </label>
         <div className="input-fields">
             <input name="duration" id="duration"
                 type="text" placeholder="Duration.."
                 value={experience.duration}
                 onChange={(e)=>{handleAllChange(e,index)}}  ></input>
                 </div>

                 <label htmlFor="description" className="field-title">
                 Description:
         </label>
         <div className="input-fields">
             <input name="description" id="description"
                 type="text" placeholder="Description.."
                 value={experience.description}
                 onChange={(e)=>{handleAllChange(e,index)}}  ></input>
                 </div>

                 {experienceList.length - 1 === index &&(
         <div>
 <button
   type="button"
   onClick={()=>{handleExperienceAdd()}}
   className="add-btn"
 >
   <span>Add a Experience Detail</span>
 </button>
 <button onClick={handleSubmit}><b>Save</b></button>
 </div>
)}
  {experienceList.length !== 1 && (
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

export default ExperienceDetailsPopup