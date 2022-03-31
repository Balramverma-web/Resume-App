"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const action_js_1 = require("../actions/action.js");
const react_redux_2 = require("react-redux");
function PersonalDetailsPopup(props) {
    const dispatch = (0, react_redux_1.useDispatch)();
    const Fpersonal = (0, react_redux_2.useSelector)((state) => state.resumeStruc.personalDetails);
    const Fsocial = (0, react_redux_2.useSelector)((state) => state.resumeStruc.socialDetails);
    const [personal, setPersonal] = (0, react_2.useState)(
    // name:"",
    // email:"",
    // street:"",
    // phone:"",
    // job_title:"",
    // dob:""
    Fpersonal);
    const [socialList, setSocialList] = (0, react_2.useState)(Fsocial);
    console.log(socialList);
    console.log(personal);
    function handlePersonalChange(e) {
        let { value, name } = e.target;
        return setPersonal((prev) => {
            return Object.assign(Object.assign({}, prev), { [name]: value });
        });
    }
    const handleSocialChange = (event, index) => {
        let { name, value } = event.target;
        const list = [...socialList];
        let obj = list[index];
        if (name === "title") {
            obj.title = value;
        }
        else {
            obj.link = value;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        list[index] = obj;
        setSocialList(list);
    };
    const handleDelete = (index) => {
        const list = [...socialList];
        list.splice(index, 1);
        setSocialList(list);
    };
    const handleSocialAdd = () => {
        setSocialList([...socialList, { title: "",
                link: "" }]);
    };
    function handleSubmit(e) {
        e.preventDefault();
        dispatch((0, action_js_1.addPersonal)(personal));
        dispatch((0, action_js_1.addSocial)(socialList));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { onClick: props.handleClose }, "x"),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("b", null, "Edit Personal Details")),
        react_1.default.createElement("b", null, "Photo"),
        react_1.default.createElement("br", null),
        react_1.default.createElement("div", { className: "img-div" },
            react_1.default.createElement("div", null,
                react_1.default.createElement("img", { alt: "profile-pic" })),
            react_1.default.createElement("div", null,
                react_1.default.createElement("button", null, "Edit \u270D\uD83C\uDFFB"))),
        react_1.default.createElement("div", null,
            react_1.default.createElement("button", null, "Delete \uD83D\uDEAE")),
        react_1.default.createElement("form", null,
            react_1.default.createElement("div", { className: "single-input-fields" },
                react_1.default.createElement("label", { className: "field-title" }, "Full Name"),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "name", placeholder: "Enter your full name", type: "text", value: personal.name, onChange: handlePersonalChange }))),
            react_1.default.createElement("div", { className: "two-input-fields" },
                react_1.default.createElement("div", { className: "single-input-fields" },
                    react_1.default.createElement("label", { className: "field-title" }, "Display Email"),
                    react_1.default.createElement("div", { className: "input-fields" },
                        react_1.default.createElement("input", { name: "email", placeholder: "Enter your email..", type: "email", value: personal.email, onChange: handlePersonalChange }))),
                react_1.default.createElement("div", { className: "single-input-fields" },
                    react_1.default.createElement("label", { className: "field-title" }, "Phone"),
                    react_1.default.createElement("div", { className: "input-fields" },
                        react_1.default.createElement("input", { name: "phone", placeholder: "Enter your phone number..", type: "tel", value: personal.phone, maxLength: 10, onChange: handlePersonalChange })))),
            react_1.default.createElement("div", { className: "single-input-fields" },
                react_1.default.createElement("label", { className: "field-title" }, "Street"),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "street", placeholder: "Enter your street..", type: "text", value: personal.street, onChange: handlePersonalChange }))),
            react_1.default.createElement("div", { className: "single-input-fields" },
                react_1.default.createElement("label", { className: "field-title" }, "Job title"),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "job_title", placeholder: "Enter your Job title..", type: "text", value: personal.job_title, onChange: handlePersonalChange }))),
            react_1.default.createElement("div", { className: "single-input-fields" },
                react_1.default.createElement("label", { className: "field-title" }, "Date of Birth"),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "dob", type: "date", value: personal.dob, onChange: handlePersonalChange }))),
            react_1.default.createElement("h3", null, "Social Account Details.."),
            socialList.map((social, index) => (react_1.default.createElement("div", { className: "single-input-fields", key: index },
                react_1.default.createElement("label", { className: "field-title" }, "Title:"),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "title", type: "text", placeholder: "Enter the title..", value: social.title, onChange: (e) => { handleSocialChange(e, index); } })),
                react_1.default.createElement("div", { className: "input-fields" },
                    react_1.default.createElement("input", { name: "link", type: "text", placeholder: "Enter the link here..", value: social.link, onChange: (e) => { handleSocialChange(e, index); } })),
                socialList.length - 1 === index && (react_1.default.createElement("div", null,
                    react_1.default.createElement("button", { type: "button", onClick: () => { handleSocialAdd(); }, className: "add-btn" },
                        react_1.default.createElement("span", null, "Add a Social Account")),
                    react_1.default.createElement("button", { onClick: handleSubmit },
                        react_1.default.createElement("b", null, "Save")))),
                socialList.length !== 1 && (react_1.default.createElement("button", { type: "button", onClick: () => handleDelete(index) },
                    react_1.default.createElement("span", null, "Remove")))))))));
}
exports.default = PersonalDetailsPopup;
