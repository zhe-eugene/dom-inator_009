import{S as d,N as u,A as p,K as A,a as w,i as f}from"./assets/vendor-DO2uNHLQ.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector(".hero-title"),e=document.querySelector(".hero-nav-wrapper");setTimeout(()=>{s.classList.add("fade-in")},300),setTimeout(()=>{e.classList.add("fade-in")},800)});document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".ac").forEach((e,o)=>{const n=e.querySelector(".ac-trigger"),t=e.querySelector(".ac-panel");o===0&&(t.classList.add("open"),n.classList.add("open")),n.addEventListener("click",()=>{t.classList.toggle("open"),n.classList.toggle("open")})})});document.addEventListener("DOMContentLoaded",()=>{new d(".swiper",{loop:!0,slidesPerView:"auto",spaceBetween:0,keyboard:{enabled:!0},mousewheel:{invert:!1},breakpoints:{375:{slidesPerView:3},768:{slidesPerView:4},1220:{slidesPerView:6},1312:{slidesPerView:6},1440:{slidesPerView:7}}});function s(){const r=document.querySelectorAll(".swiper-slide"),c=window.innerWidth;r.forEach(i=>{c<=375||c<=768?(i.style.width="130px",i.style.height="130px"):(c<=1200||c<=1312||c<=1440,i.style.width="200px",i.style.height="200px")})}s(),window.addEventListener("resize",s);const e=["HTML/CSS","JavaScript","React","Node.js","React Native","Soft skills"];let o=0;function n(){document.querySelectorAll(".swiper-slide").forEach((c,i)=>{c.textContent=e[(o+i)%e.length],i===0?c.classList.add("item-color"):c.classList.remove("item-color")})}const t=document.querySelector(".swiper-button-next");t&&t.addEventListener("click",function(){o=(o+1)%e.length,n()}),t.addEventListener("touchstart",function(r){r.preventDefault(),o=(o+1)%e.length,n()}),document.addEventListener("keydown",function(r){(r.key==="ArrowRight"||r.key==="Tab")&&(o=(o+1)%e.length,n()),r.key==="ArrowLeft"&&(o=(o-1+e.length)%e.length,n())})});document.addEventListener("DOMContentLoaded",function(){new d(".projects-swiper-container",{modules:[u,p,A],loop:!1,keyboard:{enabled:!0},navigation:{nextEl:".projects-button-next",prevEl:".projects-button-prev"},watchOverflow:!0,autoplay:{delay:3e3,disableOnInteraction:!1,pauseOnMouseEnter:!0},slidesPerView:1,spaceBetween:15,breakpoints:{375:{slidesPerView:1,spaceBetween:15},768:{slidesPerView:1,spaceBetween:32},1440:{slidesPerView:1,spaceBetween:32}},on:{init:function(){s(this)},slideChange:function(){s(this)}}});function s(e){const o=document.querySelector(".projects-button-prev"),n=document.querySelector(".projects-button-next");o.disabled=e.isBeginning,n.disabled=e.isEnd}});const g=document.querySelectorAll(".accordion-item");g.forEach(s=>{s.addEventListener("click",()=>{s.classList.toggle("active")})});const a={covers:document.querySelector(".covers"),wrapper:document.querySelector(".covers-wrapper")};(()=>{const s=a.wrapper.innerHTML;a.wrapper.innerHTML=[...Array(4).keys()].map(()=>s).join("")})();const h=s=>{s.forEach(e=>{e.isIntersecting?a.wrapper.classList.add("animate"):a.wrapper.classList.remove("animate")})},m={root:null,threshold:.1},v=new IntersectionObserver(h,m);v.observe(a.covers);const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOSURBVHgBzZLLDQAgCEOJE7H/Eo7gKKh3wJrGSBNOvEL4iJSRmfUVCnC62SgxsiJHJgOQBiEImz3DtdkpkpqbvBA1ArVE6oz0I9Gv/E0TMz3NWV1lPHoAAAAASUVORK5CYII=",S="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAEpSURBVHgBrZXtEcIgDIZTzp5/3URHcSPpJLpBXcVd+FPwiqQt1y+SUNv3DuUkvA+0SQQg5Jx7WOt8zsBYyudEmXsPuijg3bbtB1ipa/jQYQ+UZVmBpHjyprEvyBTGSjf52zwbssdchBxhTkI4c2vtTTJMxcwgw6RObZReXDycMSYBcTWuQX/6RqcMQpCmIOPNHbG30SKAgkjmU8AJBJ3PpQ5GOO2KCYVFGEaFa9J+EbCEDIAsc5SCTCkFPjWXlHWD2Jvw5MNP2b1HBEzN42OZvhMRwmURly1cCvfrszSlC41PxR6SKjQs3g4Qg6z9PpdBxsitIhWDXrPDcZCtWplHHQEhzY+AiOZ7IJz5qg5iWygK/wjfFwD+T18pdfXe37e0j07jTeTBPZYfWztI8097RKsAAAAASUVORK5CYII=",l={reviewsSectionBox:document.querySelector(".swiper"),reviewsListBox:document.querySelector(".reviews-list")};async function b(){const s="https://portfolio-js.b.goit.study/api/reviews",e={};try{return await w.get(s,e).then(n=>{const t=L(n.data);return l.reviewsListBox.innerHTML=t})}catch(o){B(o),l.reviewsSectionBox.innerHTML='<p class="reviews-not-found">Not Found</p>'}}const E={messageColor:"#FAFAFB",messageSize:"16px",backgroundColor:"#EF4040",iconUrl:S,close:!1,buttons:[[`<button><img src = "${y}"/></button>`,function(s,e){s.hide({transitionOut:"fadeOut"},e,"button")},!0]],transitionIn:"bounceInLeft",position:"topRight",displayMode:"replace",closeOnClick:!0};function B(s){const e={rootMargin:"0px",threshold:1};new IntersectionObserver(n=>{n[0].isIntersecting&&f.show({...E,message:`Sorry! ${s}`})},e).observe(l.reviewsSectionBox)}function L(s){return s.map(({author:o,avatar_url:n,review:t,_id:r})=>`<li class="review-item swiper-slide">
          <img
            width="48px"
            height="48px"
            src="${n}"
            srcset="${n}"
            alt="Reviewer photo"
            class="review-photo"
          />
          <div class="review-info">
            <h3 class="review-author">${o}</h3>
            <p class="review-text">${t}</p>
          </div>
        </li>`).join(" ")}b();function x(){new d(".swiper",{speed:400,spaceBetween:16,autoHeight:!0,centeredSlidesBounds:!0,breakpoints:{320:{slidesPerView:1,slidesPerGroup:1},768:{slidesPerView:2,slidesPerGroup:2,autoHeight:!1},1440:{slidesPerView:4,slidesPerGroup:4,autoHeight:!1}},direction:"horizontal",modules:[u],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0},mousewheel:{enabled:!0}})}x();
//# sourceMappingURL=index.js.map
