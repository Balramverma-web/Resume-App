"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_2 = require("react");
const react_redux_1 = require("react-redux");
const action_js_1 = require("../actions/action.js");
function SkillsDetailsPopup(props) {
    const FskillsList = (0, react_redux_1.useSelector)((state) => state.resumeStruc.skillsDetails);
    const [skillsList, setSkillsList] = (0, react_2.useState)(FskillsList);
    console.log(skillsList);
    const handleAllChange = (event, index) => {
        let { name, value } = event.target;
        const list = [...skillsList];
        let obj = list[index];
        if (name === 'skill') {
            obj.skill = value;
        }
        else {
            obj.level = value;
        }
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        list[index] = obj;
        setSkillsList(list);
    };
    const handleDelete = (index) => {
        const list = [...skillsList];
        list.splice(index, 1);
        setSkillsList(list);
    };
    const handleSkillsAdd = () => {
        setSkillsList([...skillsList, {
                skill: "",
                level: "medium"
            }]);
    };
    const dispatch = (0, react_redux_1.useDispatch)();
    function handleSubmit(e) {
        e.preventDefault();
        dispatch((0, action_js_1.addSkills)(skillsList));
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("span", { onClick: props.handleClose }, "x"),
        react_1.default.createElement("h3", null,
            react_1.default.createElement("b", null, "Edit Skills Details")),
        react_1.default.createElement("form", null, skillsList.map((skills, index) => react_1.default.createElement("div", { className: "single-input-fields", key: index },
            react_1.default.createElement("label", { className: "field-title" }, "Skill:"),
            react_1.default.createElement("div", { className: "input-fields" },
                react_1.default.createElement("input", { name: "skill", placeholder: "Skill Name..", type: "text", value: skills.skill, onChange: (e) => { handleAllChange(e, index); } })),
            react_1.default.createElement("select", { name: "level", value: skills.level, onChange: (e) => { handleAllChange(e, index); } },
                react_1.default.createElement("option", { value: "basic" }, "Basic"),
                react_1.default.createElement("option", { value: "medium" }, "Medium"),
                react_1.default.createElement("option", { value: "expert" }, "Expert")),
            skillsList.length - 1 === index && (react_1.default.createElement("div", null,
                react_1.default.createElement("button", { type: "button", onClick: () => { handleSkillsAdd(); }, className: "add-btn" },
                    react_1.default.createElement("span", null, "Add a Skill Detail")),
                react_1.default.createElement("button", { onClick: handleSubmit },
                    react_1.default.createElement("b", null, "Save")))),
            skillsList.length !== 1 && (react_1.default.createElement("button", { type: "button", onClick: () => handleDelete(index) },
                react_1.default.createElement("span", null, "Remove"))))))));
}
exports.default = SkillsDetailsPopup;
