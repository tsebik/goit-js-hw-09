const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body;t.addEventListener("click",(function(){o=setInterval(a,1e3),t.disabled=!0})),e.addEventListener("click",(function(){clearInterval(o),t.disabled=!1}));let o=null;function a(){n.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}
//# sourceMappingURL=01-color-switcher.286b0b4f.js.map