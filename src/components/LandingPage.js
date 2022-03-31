"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_router_dom_1 = require("react-router-dom");
function landingPage() {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const navigate = (0, react_router_dom_1.useNavigate)();
    return (react_1.default.createElement("div", { className: "outer-div" },
        react_1.default.createElement("div", { className: "header" },
            react_1.default.createElement("span", null,
                react_1.default.createElement("h4", null, "Resume Creator")),
            react_1.default.createElement("span", null,
                react_1.default.createElement("button", { className: "logoin-btn" }, "Login"),
                react_1.default.createElement("button", { className: "try-btn", onClick: () => { navigate('/content'); } }, "Try for Free"))),
        react_1.default.createElement("div", { className: "short-desc" },
            react_1.default.createElement("div", { className: "left" },
                react_1.default.createElement("div", { className: "feature" }, "Fast. Easy. Effective."),
                react_1.default.createElement("div", null,
                    react_1.default.createElement("h3", null, "Online CV Maker Create a Successfull CV Here For Free !")),
                react_1.default.createElement("div", null, "Use professional field-tested resume templates that follow the exact \u2018resume rules\u2019 employers look for. Easy to use and done within minutes - try now for free!"),
                react_1.default.createElement("button", { className: "try-btn", onClick: () => { navigate('/content'); } }, "Try For Free"))),
        react_1.default.createElement("div", { className: "right" },
            react_1.default.createElement("div", { className: "sample-cv" },
                react_1.default.createElement("img", { src: "https://cdn-images.zety.com/images/zety/landings/builder/in/cv-builder-template@2x.png", alt: "sample-resume-pic" }))),
        react_1.default.createElement("div", { className: "footer" },
            react_1.default.createElement("h4", null, "Build the future with your CV\u2014"))));
}
exports.default = landingPage;
