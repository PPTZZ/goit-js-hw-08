function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},o={},n=t.parcelRequire4c75;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return r[e]=n,t.call(n.exports,n,n.exports),n.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){o[e]=t},t.parcelRequire4c75=n);var l=n("kEUo3");const u=document.querySelector(".feedback-form input"),a=document.querySelector(".feedback-form textarea"),c=document.querySelector(".feedback-form button"),d=document.querySelector(".feedback-form");class f{constructor(e,t){this.user=e,this.setMessage=t}}d.insertAdjacentHTML("afterend","<ul></ul>");c.addEventListener("click",e(l).throttle((e=>{e.preventDefault();const t=new f(u.value,a.value);JSON.stringify(t);localStorage.setItem("feedback-form-state")}),1500));
//# sourceMappingURL=03-feedback.19be65a5.js.map
