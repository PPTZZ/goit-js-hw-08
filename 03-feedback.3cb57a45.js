!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequire4c75;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,t){o[e]=t},t.parcelRequire4c75=r);var u={};Object.defineProperty(u,"__esModule",{value:!0}),u.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var l=r("1WSnx"),a=document.querySelector(".feedback-form input"),i=document.querySelector(".feedback-form textarea"),f=document.querySelector(".feedback-form button"),c=function t(n,o){"use strict";e(u)(this,t),this.user=n,this.setMessage=o};f.addEventListener("click",e(l).throttle((function(e){e.preventDefault();var t=new c(a.value,i.value);console.log(t)}),500))}();
//# sourceMappingURL=03-feedback.3cb57a45.js.map
