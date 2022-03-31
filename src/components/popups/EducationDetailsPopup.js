"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const action_js_1 = require("../actions/action.js");
function EducationDetailsPopup(props) {
    const FeducationList = (0, react_redux_1.useSelector)((state) => state.resumeStruc.educationDetails);
    const [educationList, setEducationList] = (0, react_2.useState)(FeducationList);
    console.log(educationList);
    const handleAllChange = (event, index) => {
        let { name, value } = event.target;
        const list = [...educationList];
        let obj = list[index];
        if (name === "degree") {
            obj.degree = value;
        }
        else if (name === "school") {
            obj.school = value;
        }
        else if (name === "start_date") {
            obj.start_date = value;
        }
        else if (name === "end_date") {
            obj.end_date = value;
        }
        else {
            obj.location = value;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        list[index] = obj;
        setEducationList(list);
    };
    const handleDelete = (index) => {
        const list = [...educationList];
        list.splice(index, 1);
        setEducationList(list);
    };
    const handleEducationAdd = () => {
        setEducationList([...educationList, {
                degree: "",
                school: "",
                start_date: "",
                end_date: "",
                loaction: ""
            }]);
    };
    const dispatch = (0, react_redux_1.useDispatch)();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch((0, action_js_1.addEducation)(educationList));
        // setPersonal({ 
        // name:"",
        // email:"",
        // street:"",
        // phone:"",
        // job_title:"",
        // dob:"" });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { onClick: props.handleClose }, "x"),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("b", null, "Edit Education Details")),
        react_1.default.createElement("form", null, educationList.map((education, index) => react_1.default.createElement("div", { className: "single-input-fields", key: index },
            react_1.default.createElement("label", { className: "field-title" }, "Degree:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "degree", type: "text", placeholder: "Degree..", value: education.degree, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { className: "field-title" }, "School:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "school", type: "text", placeholder: "School...", value: education.school, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { className: "field-title" }, "Start Date:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "start_date", type: "date", placeholder: "Start Date..", value: education.start_date, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { className: "field-title" }, "End Date:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "end_date", type: "date", placeholder: "End Date..", value: education.end_date, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("label", { className: "field-title" }, "Location:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "location", type: "text", placeholder: "Location...", value: education.location, onChange: (e) => { handleAllChange(e, index); } })),
            educationList.length - 1 === index && (react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "button", onClick: () => { handleEducationAdd(); }, className: "add-btn" },
                    react_1.default.createElement("span", null, "Add a Education Detail")),
                react_1.default.createElement("button", { onClick: handleSubmit },
                    react_1.default.createElement("b", null, "Save")))),
            educationList.length !== 1 && (react_1.default.createElement("button", { type: "button", onClick: () => handleDelete(index) },
                react_1.default.createElement("span", null, "Remove"))))))));
}
exports.default = EducationDetailsPopup;
