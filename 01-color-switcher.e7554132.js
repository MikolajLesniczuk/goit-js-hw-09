!function(){var t=document.querySelector("button[data-start]"),n=document.querySelector("button[data-stop]"),e=null;function o(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}t.addEventListener("click",(function(){t.disabled=!0,e=setInterval(o,1e3)})),n.addEventListener("click",(function(){clearInterval(e),t.disabled=!1}))}();
//# sourceMappingURL=01-color-switcher.e7554132.js.map
