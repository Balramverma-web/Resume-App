"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_redux_1 = require("react-redux");
const jspdf_1 = __importDefault(require("jspdf"));
const html2canvas_1 = __importDefault(require("html2canvas"));
function ResumePreview() {
    const { personalDetails, educationDetails, experienceDetails, skillsDetails } = (0, react_redux_1.useSelector)((state) => state.resumeStruc);
    const socialDetails = (0, react_redux_1.useSelector)((state) => state.resumeStruc.socialDetails);
    const downloadResume = () => {
        const input = document.getElementById('resume-preview');
        console.log(document);
        (0, html2canvas_1.default)(input)
            .then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jspdf_1.default("p", "mm", "a4");
            var width = pdf.internal.pageSize.getWidth();
            var height = pdf.internal.pageSize.getHeight();
            pdf.addImage(imgData, 'JPEG', 0, 0, width, height);
            // pdf.output('dataurlnewwindow');
            pdf.save("resume.pdf");
        }).catch(function (error) {
            console.log(error);
        });
    };
    return (react_1.default.createElement("div", { className: 'outer-div' },
        react_1.default.createElement("div", { id: 'resume-preview' },
            react_1.default.createElement("p", { style: { textDecorationLine: 'underline' } },
                react_1.default.createElement("h2", null,
                    react_1.default.createElement("b", null, "Resume"))),
            react_1.default.createElement("div", { className: 'personal-details' },
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "Name :"),
                    " ",
                    personalDetails.name),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "Email :"),
                    " ",
                    personalDetails.email),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "Phone :"),
                    " ",
                    personalDetails.phone),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "Address :"),
                    " ",
                    personalDetails.street),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "Job Title :"),
                    " ",
                    personalDetails.job_title),
                react_1.default.createElement("p", null,
                    react_1.default.createElement("b", null, "DOB :"),
                    " ",
                    personalDetails.dob)),
            react_1.default.createElement("div", { className: 'social-accounts' },
                react_1.default.createElement("p", { style: { textDecorationLine: 'underline' } },
                    react_1.default.createElement("h2", null, "Social Accounts")),
                socialDetails.map((social, index) => react_1.default.createElement("div", { key: index },
                    react_1.default.createElement("a", { href: social.link },
                        react_1.default.createElement("p", null,
                            react_1.default.createElement("b", null, social.title)))))),
            react_1.default.createElement("div", { className: 'education-details' },
                react_1.default.createElement("p", { style: { textDecorationLine: 'underline' } },
                    react_1.default.createElement("h2", null, "Education Details")),
                educationDetails.map((education, index) => react_1.default.createElement("div", { key: index },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Degree : "),
                        " ",
                        education.degree),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "School : "),
                        " ",
                        education.school),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Start Date : "),
                        " ",
                        education.start_date),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "End Date : "),
                        " ",
                        education.end_date),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Location : "),
                        " ",
                        education.location)))),
            react_1.default.createElement("div", { className: 'experience-details' },
                react_1.default.createElement("p", { style: { textDecorationLine: 'underline' } },
                    react_1.default.createElement("h2", null, "Experience Details")),
                experienceDetails.map((experience, index) => react_1.default.createElement("div", { key: index },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Company Name : "),
                        " ",
                        experience.company_name),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Job Title : "),
                        " ",
                        experience.job_title),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Duration : "),
                        " ",
                        experience.duration),
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null, "Description : "),
                        " ",
                        experience.description)))),
            react_1.default.createElement("div", { className: 'skill-details' },
                react_1.default.createElement("p", { style: { textDecorationLine: 'underline' } },
                    react_1.default.createElement("h2", null, "Skills")),
                skillsDetails.map((skills, index) => react_1.default.createElement("div", { key: index },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("b", null,
                            skills.skill,
                            " : "),
                        " ",
                        skills.level))))),
        react_1.default.createElement("div", { className: "download-resume" },
            react_1.default.createElement("button", { style: { cursor: 'pointer' }, onClick: downloadResume }, "download Resume"))));
}
exports.default = ResumePreview;
