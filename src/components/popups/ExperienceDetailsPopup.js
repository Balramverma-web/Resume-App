"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const action_js_1 = require("../actions/action.js");
function ExperienceDetailsPopup(props) {
    const FexperienceList = (0, react_redux_1.useSelector)((state) => state.resumeStruc.experienceDetails);
    const [experienceList, setExperienceList] = (0, react_2.useState)(FexperienceList);
    console.log(experienceList);
    const handleAllChange = (event, index) => {
        let { name, value } = event.target;
        const list = [...experienceList];
        let obj = list[index];
        if (name === "company_name") {
            obj.company_name = value;
        }
        else if (name === "job_title") {
            obj.job_title = value;
        }
        else if (name === "duration") {
            obj.duration = value;
        }
        else {
            obj.description = value;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        list[index] = obj;
        setExperienceList(list);
    };
    const handleDelete = (index) => {
        const list = [...experienceList];
        list.splice(index, 1);
        setExperienceList(list);
    };
    const handleExperienceAdd = () => {
        setExperienceList([...experienceList, {
                company_name: "",
                job_title: "",
                duration: "",
                description: ""
            }]);
    };
    const dispatch = (0, react_redux_1.useDispatch)();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch((0, action_js_1.addExperience)(experienceList));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { onClick: props.handleClose }, "x"),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("b", null, "Edit Experience Details")),
        react_1.default.createElement("form", null, experienceList.map((experience, index) => react_1.default.createElement("div", { className: "single-input-fields", key: index },
            react_1.default.createElement("label", { htmlFor: "company_name", className: "field-title" }, "Company Name:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "company_name", id: "company_name", type: "text", placeholder: "Company Name..", value: experience.company_name, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { htmlFor: "job_title", className: "field-title" }, "Job Title:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "job_title", id: "job_title", type: "text", placeholder: "Job Title..", value: experience.job_title, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { htmlFor: "duration", className: "field-title" }, "Duration:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "duration", id: "duration", type: "text", placeholder: "Duration..", value: experience.duration, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { htmlFor: "description", className: "field-title" }, "Description:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "description", id: "description", type: "text", placeholder: "Description..", value: experience.description, onChange: (e) => { handleAllChange(e, index); } })),
            experienceList.length - 1 === index && (react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "button", onClick: () => { handleExperienceAdd(); }, className: "add-btn" },
                    react_1.default.createElement("span", null, "Add a Experience Detail")),
                react_1.default.createElement("button", { onClick: handleSubmit },
                    react_1.default.createElement("b", null, "Save")))),
            experienceList.length !== 1 && (react_1.default.createElement("button", { type: "button", onClick: () => handleDelete(index) },
                react_1.default.createElement("span", null, "Remove"))))))));
}
exports.default = ExperienceDetailsPopup;
