var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire62cb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var d={id:e,exports:{}};return t[e]=d,r.call(d.exports,d,d.exports),d.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequire62cb=r);document.querySelector(".button--up");const d=document.querySelector(".js-gallery"),o=(document.querySelector(".pag"),document.querySelector(".search-form")),a=document.querySelector("input.js-search"),i=(document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),c=document.querySelector(".alert-b");document.querySelector(".header-buttons"),document.querySelectorAll(".header-button");var s=r("hXrWV"),l=r("4kseb"),u=r("aICLh"),m=r("8JeJA"),y=r("4eRSF"),h=(l=r("4kseb"),r("dX4f0"));const f=new(0,l.default),v=document.querySelector(".button2"),g=document.querySelector(".button1");v.addEventListener("click",(async function(){w+=1,C(),_()})),g.addEventListener("click",(async function(){if(1==w)return console.log("error");w-=1,C(),_()}));const b=document.querySelector('[data-index="1"]'),p=document.querySelector('[data-index="2"]'),x=document.querySelector('[data-index="3"]'),S=document.querySelector('[data-index="4"]'),q=document.querySelector('[data-index="5"]'),L=document.querySelector('[data-index="6"]');b.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="1"]').textContent),_(),C()})),p.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="2"]').textContent),_(),C()})),x.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="3"]').textContent),_(),C()})),S.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="4"]').textContent),_(),C()})),q.addEventListener("click",(async function(){return w=1,_(),x.hidden=!1,S.hidden=!1,g.hidden=!0,v.hidden=!1,L.hidden=!1,x.textContent=Number(w)+1,S.textContent=Number(w)+2,C()})),L.addEventListener("click",(async function(){return w=L.textContent,_(),g.hidden=!1,q.hidden=!1,C()})),b.hidden=!0,p.hidden=!0,q.hidden=!0,x.textContent=2,S.textContent=3,q.textContent=1,L.textContent=1e3;let w=1;async function C(){try{if(""!==a.value){const e=(await f.getMoviesByName(a.value,w)).results,t=(0,h.createMarkup)(e);N(),L.hidden=!0,d.innerHTML=t}else{const e=(await f.fetchTrendingMovies(w)).data.results,t=(0,h.createMarkup)(e);N(),d.innerHTML=t}window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("currentPage").textContent=w}catch(e){console.error("Error with search fetch"+e)}}async function _(){x.textContent=Number(w)+1,S.textContent=Number(w)+2,w>=3&&w<=997&&(g.hidden=!1,b.hidden=!1,p.hidden=!1,q.hidden=!1,p.textContent=w-1,b.textContent=w-2,x.hidden=!1,S.hidden=!1,v.hidden=!1,L.hidden=!1),w<3&&(b.hidden=!0,p.hidden=!0,q.hidden=!0),w>=998&&w<=1e3&&(b.hidden=!1,p.hidden=!1,p.textContent=w-1,b.textContent=w-2),w>=998&&(S.hidden=!0),w>=1e3&&(x.hidden=!0,L.hidden=!0,v.hidden=!0)}new(0,(l=r("4kseb")).default);const k=new(0,l.default);let M=1;function E(e){const{results:t}=e;return t.map((({poster_path:e,original_title:t,genre_ids:n,release_date:r,id:d})=>{const o=new Date(r),a=(0,u.getGenresName)(n),i=(0,m.sliceGenres)(a);let c=`${s.urls.BASE_IMAGE_URL}${e}`;return null===e&&(c="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),`<li class="card__item" data-id=${d}>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="${c}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="card__genres">${i.join(", ")}</p>\n      <p class="card__year">${o.getFullYear()}</p>\n    </div>\n  </div>\n</li>`})).join("")}function N(){d.innerHTML=""}o.addEventListener("submit",(async function(e,t){e.preventDefault();const n=e.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(!n)return i.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),void setTimeout((()=>{location.reload()}),1e3);k.query=n;const r=new IntersectionObserver((async(e,t)=>{e.forEach((async e=>{if(e.isIntersecting){M+=1;const e=E(await k.getMoviesByName(n,M));d.insertAdjacentHTML("beforeend",e)}}))}),{root:null,rootMargin:"100px",threshold:1}),o=document.querySelector(".pagination-container");r.observe(o),o.style.opacity="0",o.style.pointerEvents="none";const a=await k.getMoviesByName(n,t);if(localStorage.setItem("query",JSON.stringify(a)),0===a.total_results)c.classList.add("visually-hidden"),i.classList.remove("visually-hidden"),setTimeout((()=>{location.reload()}),1e3);else{i.classList.add("visually-hidden"),c.classList.add("visually-hidden"),N();const e=E(a);d.insertAdjacentHTML("beforeend",e)}})),(0,y.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});l=r("4kseb"),h=r("dX4f0");const T=new(0,l.default);document.addEventListener("DOMContentLoaded",(async function(){const e=(await T.fetchTrendingMovies()).data.results;localStorage.setItem("trendingFilms",JSON.stringify(e));const t=(0,h.createMarkup)(e);d.insertAdjacentHTML("beforeend",t)})),r("HzXMd"),r("7JDNM"),r("4S0r6"),r("46fOB"),r("a1Vwq"),r("gBTz3"),r("lWsHk");l=r("4kseb");r("46fOB");new(0,l.default);r("bbkJ9"),r("dvlOj"),r("kCbOd");l=r("4kseb"),h=r("dX4f0");new(0,l.default);
//# sourceMappingURL=index.08295b7b.js.map