import React from 'react';
import {useState} from 'react';
import {useDispatch,useSelector} from "react-redux";
import {addSkills} from "../actions/action.js"

function SkillsDetailsPopup(props: { handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; }) {

  const FskillsList=useSelector((state:any)=>state.resumeStruc.skillsDetails)
  
    const[skillsList,setSkillsList]=useState(
      FskillsList
    );

    console.log(skillsList);

    const handleAllChange=(event: React.ChangeEvent<HTMLSelectElement>|React.ChangeEvent<HTMLInputElement>,index: number)=>{
        
       let{name,value}=event.target;

       const list=[...skillsList];

       let obj=list[index];

       if(name==='skill'){
           obj.skill=value;
       }
       else{
           obj.level=value;
       }

       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       list[index]=obj;
       setSkillsList(list);
    }

    const handleDelete=(index:number)=>{
        const list=[...skillsList];

        list.splice(index,1);
        setSkillsList(list);
    }
    const handleSkillsAdd = () => {
        setSkillsList([...skillsList, {
        skill:"",
        level:"medium"
    }]);
      };

      const dispatch = useDispatch();

      function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        dispatch(addSkills(skillsList));
      
      }


  return (
    <div>
        <span onClick={props.handleClose}>x</span>
          <h3><b>Edit Skills Details</b></h3>
        <form>
            {skillsList.map((skills:any,index:number)=> 
            <div className="single-input-fields" key={index}>     
                <label className="field-title">
                 Skill:
                 </label>
                 <div className="input-fields">
                    <input name="skill" placeholder="Skill Name.."
                     type="text" value={skills.skill}
                     onChange={(e)=>{handleAllChange(e,index)}}/>
                </div>
          <select name="level" value={skills.level} onChange={(e)=>{handleAllChange(e,index)}}>
            <option value="basic">Basic</option>
            <option value="medium">Medium</option>
            <option value="expert">Expert</option>
          </select>

        {skillsList.length -1 === index &&(
         <div>
 <button
   type="button"
   onClick={()=>{handleSkillsAdd()}}
   className="add-btn"
 >
   <span>Add a Skill Detail</span>
 </button>
 <button onClick={handleSubmit}><b>Save</b></button>
 </div>
)}
  {skillsList.length !== 1 && (
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

export default SkillsDetailsPopup


