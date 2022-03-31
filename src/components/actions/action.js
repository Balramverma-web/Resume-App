"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addSkills = exports.addExperience = exports.addEducation = exports.addSocial = exports.addPersonal = void 0;
function addPersonal(details) {
    return {
        type: "ADD_PERSONAL",
        details: details,
    };
}
exports.addPersonal = addPersonal;
function addSocial(details) {
    return {
        type: "ADD_SOCIAL",
        details: details,
    };
}
exports.addSocial = addSocial;
function addEducation(details) {
    return {
        type: "ADD_EDUCATION",
        details: details,
    };
}
exports.addEducation = addEducation;
function addExperience(details) {
    return {
        type: "ADD_EXPERIENCE",
        details: details,
    };
}
exports.addExperience = addExperience;
function addSkills(details) {
    return {
        type: "ADD_SKILLS",
        details: details,
    };
}
exports.addSkills = addSkills;
