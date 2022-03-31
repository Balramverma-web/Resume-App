import React from "react";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import {addPersonal,addSocial} from "../actions/action.js"
import {useSelector} from "react-redux"

function PersonalDetailsPopup(props: { handleClose: React.MouseEventHandler<HTMLSpanElement> | undefined; }){

    const dispatch=useDispatch();

    const Fpersonal=useSelector((state:any)=>state.resumeStruc.personalDetails)
    const Fsocial=useSelector((state:any)=>state.resumeStruc.socialDetails)

    const[personal,setPersonal]=useState(
        // name:"",
        // email:"",
        // street:"",
        // phone:"",
        // job_title:"",
        // dob:""
        Fpersonal

    )

   
    
    const [socialList,setSocialList]=useState(
       Fsocial
    );

    console.log(socialList);
    console.log(personal);

    function handlePersonalChange(e: React.ChangeEvent<HTMLInputElement>) {
        let { value, name } = e.target;

        return setPersonal((prev: any) => {
          return { ...prev, [name]: value };
        });
      }


    const handleSocialChange=(event: React.ChangeEvent<HTMLInputElement>,index: number)=>{
        
       let{name,value}=event.target;

       const list=[...socialList];

       let obj=list[index];

       if(name==="title"){
           obj.title=value;
       }
       else{
           obj.link=value;
       }

       // eslint-disable-next-line @typescript-eslint/no-unused-expressions
       list[index]=obj;
       setSocialList(list);
    }

    const handleDelete=(index:number)=>{
        const list=[...socialList];

        list.splice(index,1);
        setSocialList(list);
    }
    const handleSocialAdd = () => {
        setSocialList([...socialList, {title:"",
        link:""}]);
      };

      function handleSubmit(e: { preventDefault: () => void; }) {
        e.preventDefault();
        dispatch(addPersonal(personal));
        dispatch(addSocial(socialList));
      }

    return(

        <div>
            <span onClick={props.handleClose}>x</span>
         <h3><b>Edit Personal Details</b></h3>

         <b>Photo</b><br/>

         <div className="img-div">
             
             <div><img alt="profile-pic"/></div>
             <div><button>Edit ✍🏻</button></div> 
         </div>

         <div><button>Delete 🚮</button></div>
            
            <form>
                <div className="single-input-fields">
                <label className="field-title">
                    Full Name
                </label>
                <div className="input-fields">
                    <input name="name" placeholder="Enter your full name"
                     type="text" value={personal.name}
                     onChange={handlePersonalChange}/>
                </div>
                </div>

                <div className="two-input-fields">
                    <div className="single-input-fields">
                    <label className="field-title">
                    Display Email
                </label>
                <div className="input-fields">
                    <input name="email"  placeholder="Enter your email.."
                     type="email" value={personal.email}
                     onChange={handlePersonalChange}/>
                </div>
                    </div>

                    <div className="single-input-fields">
                    <label className="field-title">
                    Phone
                </label>
                <div className="input-fields">
                    <input name="phone" placeholder="Enter your phone number.."
                     type="tel" value={personal.phone}
                     maxLength={10}
                     onChange={handlePersonalChange}/>
                </div>
                    </div>
                </div>

           <div className="single-input-fields">     
               <label className="field-title">
                    Street
                </label>
                <div className="input-fields">
                    <input name="street" placeholder="Enter your street.."
                     type="text" value={personal.street}
                     onChange={handlePersonalChange}/>
                </div>
              </div>

              <div className="single-input-fields">     
               <label className="field-title">
                    Job title
                </label>
                <div className="input-fields">
                    <input name="job_title" placeholder="Enter your Job title.."
                     type="text" value={personal.job_title}
                     onChange={handlePersonalChange}/>
                </div>
              </div>

              <div className="single-input-fields">     
               <label className="field-title">
                    Date of Birth
                </label>
                <div className="input-fields">
                    <input name="dob"
                     type="date" value={personal.dob} onChange={handlePersonalChange} />
                </div>
              </div>

                 <h3>Social Account Details..</h3>
              {socialList.map((social:any,index:number)=>(
                   <div className="single-input-fields" key={index}>     
                   <label className="field-title">
                    Title:
                </label>
                <div className="input-fields">
                    <input name="title"
                        type="text" placeholder="Enter the title.."
                        value={social.title}
                        onChange={(e)=>{handleSocialChange(e,index)}}  ></input>
                        </div>
                    <div className="input-fields">
                        <input name="link"
                         type="text" placeholder="Enter the link here.."
                         value={social.link}
                         onChange={(e)=>{handleSocialChange(e,index)}} />
                         {/* <button onClick={()=>{handleDelete(index)}}>Delete</button> */}
                    </div>
                    {socialList.length - 1 === index &&(
                        <div>
                <button
                  type="button"
                  onClick={()=>{handleSocialAdd()}}
                  className="add-btn"
                >
                  <span>Add a Social Account</span>
                </button>
                <button onClick={handleSubmit}><b>Save</b></button>
                </div>
              )}

              {socialList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleDelete(index)}
                >
                  <span>Remove</span>
                </button>
              )}
                 
                  </div>
              )
              )}
            </form>

        </div>

    );
}

export default PersonalDetailsPopup;


