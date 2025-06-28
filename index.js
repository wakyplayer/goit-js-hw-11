import{a as d,S as f,i as a}from"./assets/vendor-CrlV4O_2.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const p="50807902-002d645a27b80276fb895a01b",m="https://pixabay.com/api/";async function y(s){const o={key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await d.get(m,{params:o})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader"),h=new f(".gallery a",{captionsData:"alt",captionDelay:250});function g(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a href="${t.largeImageURL}">
          <img src="${t.webformatURL}" alt="${t.tags}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${t.likes}</p>
          <p><b>Views:</b> ${t.views}</p>
          <p><b>Comments:</b> ${t.comments}</p>
          <p><b>Downloads:</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");l.insertAdjacentHTML("beforeend",o),h.refresh()}function b(){l.innerHTML=""}function L(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const c=document.querySelector(".form");document.querySelector(".gallery");c.addEventListener("submit",async s=>{s.preventDefault();const o=c.elements["search-text"].value.trim();if(o===""){a.error({message:"Please enter a search query!",position:"topRight"});return}b(),L();try{const t=await y(o);if(t.hits.length===0){a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(t.hits)}catch{a.error({message:"Something went wrong. Please try again later.",position:"topRight"})}finally{w()}});
//# sourceMappingURL=index.js.map
