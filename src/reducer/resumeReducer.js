"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resumeReducer = void 0;
const resumeStruc = {
    personalDetails: {},
    socialDetails: [{}],
    educationDetails: [{}],
    experienceDetails: [{}],
    skillsDetails: [{}]
};
const emptyResume = { resumeStruc };
const resumeReducer = (state = emptyResume, action) => {
    switch (action.type) {
        case "ADD_PERSONAL":
            return { resumeStruc: Object.assign(Object.assign({}, state.resumeStruc), { personalDetails: action.details }) };
        case "ADD_SOCIAL":
            return { resumeStruc: Object.assign(Object.assign({}, state.resumeStruc), { socialDetails: action.details }) };
        case "ADD_EDUCATION":
            return { resumeStruc: Object.assign(Object.assign({}, state.resumeStruc), { educationDetails: action.details }) };
        case "ADD_EXPERIENCE":
            return { resumeStruc: Object.assign(Object.assign({}, state.resumeStruc), { experienceDetails: action.details }) };
        case "ADD_SKILLS":
            return { resumeStruc: Object.assign(Object.assign({}, state.resumeStruc), { skillsDetails: action.details }) };
        default:
            return state;
    }
};
exports.resumeReducer = resumeReducer;
