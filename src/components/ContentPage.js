"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const PersonalDetailsPopup_1 = __importDefault(require("./popups/PersonalDetailsPopup"));
const EducationDetailsPopup_1 = __importDefault(require("./popups/EducationDetailsPopup"));
const ExperienceDetailsPopup_1 = __importDefault(require("./popups/ExperienceDetailsPopup"));
const SkillsDetailsPopup_1 = __importDefault(require("./popups/SkillsDetailsPopup"));
const ResumePreview_1 = __importDefault(require("./ResumePreview"));
require("./css/contentPage.css");
function ContentPage() {
    const [isOpenPersonal, setIsOpenPersonal] = (0, react_2.useState)(false);
    const [isOpenEducation, setIsOpenEducation] = (0, react_2.useState)(false);
    const [isOpenExperience, setIsOpenExperience] = (0, react_2.useState)(false);
    const [isOpenSkills, setIsOpenSkills] = (0, react_2.useState)(false);
    const togglePopup = (signal) => {
        if (signal === 'isOpenPersonal') {
            setIsOpenPersonal(!isOpenPersonal);
        }
        else if (signal === 'isOpenEducation') {
            setIsOpenEducation(!isOpenEducation);
        }
        else if (signal === 'isOpenExperience') {
            setIsOpenExperience(!isOpenExperience);
        }
        else {
            setIsOpenSkills(!isOpenSkills);
        }
    };
    const { name, email, phone, street, dob } = (0, react_redux_1.useSelector)((state) => state.resumeStruc.personalDetails);
    return (react_1.default.createElement("div", { className: "main-div" },
        react_1.default.createElement("div", { className: "section" },
            react_1.default.createElement("div", { className: "section-header" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", null,
                        react_1.default.createElement("b", null, "Personal Details.."))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("button", { onClick: () => togglePopup('isOpenPersonal') }, "Edit \u270D\uD83C\uDFFB"))),
            react_1.default.createElement("div", { className: "personal-details-section" },
                react_1.default.createElement("div", { className: "personal-img-name" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("img", null)),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", null,
                            react_1.default.createElement("b", null, name)))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("b", null, "Email: "),
                    email),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("b", null, "Phone: "),
                    phone),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("b", null, "Address: "),
                    street),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("b", null, "DOB:  "),
                    dob)),
            isOpenPersonal && react_1.default.createElement(PersonalDetailsPopup_1.default, { handleClose: () => togglePopup('isOpenPersonal') }),
            react_1.default.createElement("div", null,
                react_1.default.createElement("div", { className: "section-header" },
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", null,
                            react_1.default.createElement("b", null, "Education Details.."))),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("button", { onClick: () => togglePopup('isOpenEducation') }, "Edit \u270D\uD83C\uDFFB")))),
            isOpenEducation && react_1.default.createElement(EducationDetailsPopup_1.default, { handleClose: () => togglePopup('isOpenEducation') }),
            react_1.default.createElement("div", { className: "section-header" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", null,
                        react_1.default.createElement("b", null, "Experiences.."))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("button", { onClick: () => togglePopup('isOpenExperience') }, "Edit \u270D\uD83C\uDFFB"))),
            isOpenExperience && react_1.default.createElement(ExperienceDetailsPopup_1.default, { handleClose: () => togglePopup('isOpenExperience') }),
            react_1.default.createElement("div", { className: "section-header" },
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", null,
                        react_1.default.createElement("b", null, "Skills.."))),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("button", { onClick: () => togglePopup('isOpenSkills') }, "Edit \u270D\uD83C\uDFFB"))),
            isOpenSkills && react_1.default.createElement(SkillsDetailsPopup_1.default, { handleClose: () => togglePopup('isOpenSkills') })),
        react_1.default.createElement(ResumePreview_1.default, null)));
}
exports.default = ContentPage;
