const resumeStruc={
    personalDetails:{},
    socialDetails:[{}],
    educationDetails:[{}],
    experienceDetails:[{}],
    skillsDetails:[{}]
}

const emptyResume={resumeStruc};

const resumeReducer = (state = emptyResume, action:any) => {
    switch (action.type) {
      case "ADD_PERSONAL":
        return { resumeStruc: {...state.resumeStruc, personalDetails:action.details } };
      case "ADD_SOCIAL":
        return { resumeStruc: {...state.resumeStruc, socialDetails:action.details } };
      case "ADD_EDUCATION":
        return { resumeStruc: {...state.resumeStruc, educationDetails:action.details } };
      case "ADD_EXPERIENCE":
        return { resumeStruc: {...state.resumeStruc, experienceDetails:action.details }};
        case "ADD_SKILLS":
        return { resumeStruc: {...state.resumeStruc, skillsDetails:action.details }};
      default:
        return state;
    }
  };

  export {resumeReducer};
