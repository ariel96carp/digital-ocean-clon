const y=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))g(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const m of n.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&g(m)}).observe(document,{childList:!0,subtree:!0});function f(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function g(e){if(e.ep)return;e.ep=!0;const n=f(e);fetch(e.href,n)}};y();Vue.component("panel-card",{template:`
        <article class="rounded-md shadow-lg hover:shadow-2xl transition-shadow duration-75 bg-white overflow-hidden font-medium md:text-sm cursor-pointer h-[360px] dark:bg-gray-600">
            <div class="h-[40%]">
                <slot name="image"></slot>
            </div>
            <div class="px-7 pt-8 pb-4 h-[calc(100%-40%)] flex flex-col">
                <header class="mb-4 text-gray-400 tracking-widest">
                    <slot name="type"></slot>
                </header>
                <main class="font-semibold dark:text-gray-300">
                    <slot name="title"></slot>
                </main>
                <footer class="flex justify-between items-center text-gray-400 mt-auto">
                    <span>
                        <slot name="date"></slot>
                    </span>
                    <div class="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                        <span>
                            <slot name="views"></slot>
                        </span>
                    </div>
                </footer>
            </div>
        </article>
    `});Vue.component("submenu-item",{template:`
        <li class="hover:bg-sky-100 px-3 py-4 rounded-lg group w-fit">
            <a href="#">
                <h3 class="font-semibold text-xl mb-2 group-hover:text-do-blue-light">
                    <slot name="title"></slot>
                </h3>
                <p class="text-gray-400 text-md">
                    <slot name="body"></slot>
                </p>
            </a>
        </li>
    `});Vue.component("submenu-item-v2",{template:`
        <li class="hover:bg-sky-200 px-3 py-4 rounded-xl group w-full">
            <a href="#">
                <h3 class="font-semibold text-xl mb-2 group-hover:text-do-blue-light">
                    <slot name="title"></slot>
                </h3>
                <p class="text-gray-400 text-md">
                    <slot name="body"></slot>
                </p>
            </a>
        </li>
    `});Vue.component("submenu-item-card",{template:`
        <li>
            <h3 class="font-semibold tracking-wider mb-4">
                <slot name="title"></slot>
            </h3>
            <ul class="text-gray-500 font-medium">    
                <slot name="list"></slot>
            </ul>
        </li>
    `});Vue.component("list-card",{template:`
        <li class="group">
            <a href="#">
                <div class="flex items-center gap-4">
                    <div class="rounded-md overflow-hidden h-20 basis-36 shrink-0">
                        <slot name="image"></slot>
                    </div>
                    <p class="group-hover:text-gray-700">
                        <slot name="title"></slot>
                    </p>
                </div>
            </a>
        </li>
    `});new Vue({el:"#app",data:{mode:"light"},methods:{setDarkMode(){this.mode="dark";const l=document.getElementById("app");l.classList.contains("light")&&l.classList.remove("light"),l.classList.add("dark")},setLightMode(){this.mode="light";const l=document.getElementById("app");l.classList.contains("dark")&&l.classList.remove("dark"),l.classList.add("light")}}});window.addEventListener("DOMContentLoaded",()=>{const l=()=>{const t=document.getElementById("page-header"),s=parseFloat(getComputedStyle(t).height),o=getComputedStyle(document.documentElement),r=parseFloat(o.getPropertyValue("--header-size"));s!==r&&document.documentElement.style.setProperty("--header-size",`${s}px`)};l(),window.addEventListener("resize",l);const i=(t=!1)=>{if(t===!1)switch(document.body.style.overflow){case"":document.body.style.overflow="hidden";break;case"visible":document.body.style.overflow="hidden";break;default:document.body.style.overflow="visible"}},f=t=>new Promise((s,o)=>{let r=!1;const c=document.getElementById("menu").querySelectorAll(".item");for(let d=0;d<c.length;d++){const u=c[d].querySelector(".submenu");if(u&&d!==t&&u.classList.contains("show")){const h=u.previousElementSibling;u.classList.toggle("show"),h.classList.toggle("open"),r=!0;break}}s(r)});(()=>{document.getElementById("menu").querySelectorAll(".item").forEach((o,r)=>{o.addEventListener("click",async()=>{const a=o.querySelector(".submenu");if(a){const c=await f(r);a.previousElementSibling.classList.toggle("open"),a.classList.toggle("show"),i(c)}})})})();const e=()=>{if(matchMedia("(max-width: 1024px)").matches){const o=document.getElementById("menu").querySelectorAll(".item");for(let r of o){const a=r.querySelector(".submenu");if(a){const c=a.previousElementSibling;a.classList.contains("show")&&(c.classList.toggle("open"),a.classList.toggle("show"),i())}}}};window.addEventListener("resize",e),(()=>{document.getElementById("offcanvas-button").addEventListener("click",()=>{document.getElementById("offcanvas").classList.toggle("show"),i()})})();const m=()=>{if(matchMedia("(min-width: 1024px)").matches){const s=document.getElementById("offcanvas");s.classList.contains("show")&&(s.classList.toggle("show"),i())}};window.addEventListener("resize",m),(()=>{document.getElementById("main-logo").addEventListener("click",()=>{if(matchMedia("(min-width: 1024px").matches){const r=document.getElementById("menu").querySelectorAll(".item");for(let a of r){const c=a.querySelector(".submenu");if(c){const d=c.previousElementSibling;c.classList.contains("show")&&(d.classList.toggle("open"),c.classList.toggle("show"),i())}}}else{const o=document.getElementById("offcanvas");o.classList.contains("show")&&(o.classList.toggle("show"),i())}})})();const p=()=>{const t=document.getElementById("brands");if(matchMedia("(max-width: 640px)").matches){const o=document.documentElement.getBoundingClientRect().width;t.style.setProperty("--carousel-max-w",`${o}px`)}};p(),window.addEventListener("resize",p),(()=>{const t=document.getElementById("offcanvas"),s=t.querySelectorAll(".offcanvas-item");for(let o of s)o.addEventListener("click",()=>{t.classList.toggle("show"),i()})})()});
