import{c as e,h as t,A as r,p as n}from"./vendor.d53eccf0.js";let s;const o={};function a(e){switch(e){case"./Pages/Index.vue":return function(e,t){if(!t||0===t.length)return e();if(void 0===s){const e=document.createElement("link").relList;s=e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}return Promise.all(t.map((e=>{if(e in o)return;o[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const n=document.createElement("link");return n.rel=t?"stylesheet":s,t||(n.as="script",n.crossOrigin=""),n.href=e,document.head.appendChild(n),t?new Promise(((e,t)=>{n.addEventListener("load",e),n.addEventListener("error",t)})):void 0}))).then((()=>e()))}((()=>import("./Index.5d9ed2ff.js")),["/dist/assets/Index.5d9ed2ff.js","/dist/assets/vendor.d53eccf0.js"]);default:return Promise.reject(new Error("Unknown variable dynamic import: "+e))}}const d=document.getElementById("app");e({render:()=>t(r,{initialPage:JSON.parse(d.dataset.page),resolveComponent:async e=>(await a(`./Pages/${e}.vue`)).default})}).use(n).mount(d);