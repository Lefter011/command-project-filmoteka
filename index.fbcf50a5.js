var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire62cb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var d=new Error("Cannot find module '"+e+"'");throw d.code="MODULE_NOT_FOUND",d}).register=function(e,t){n[e]=t},e.parcelRequire62cb=r),r("98X4p"),r("4S0r6"),r("dBfix");document.querySelector(".button--up");const o=document.querySelector(".js-gallery"),d=(document.querySelector(".pag"),document.querySelector(".search-form")),c=(document.querySelector("input.js-search"),document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),a=document.querySelector(".alert-b");document.querySelector(".header-buttons"),document.querySelectorAll(".header-button");var i=r("hXrWV"),s=r("4kseb"),l=r("aICLh"),u=r("8JeJA"),y=r("4eRSF");const m=new(0,s.default);function f(){o.innerHTML=""}d.addEventListener("submit",(async function(e,t){e.preventDefault();const n=e.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(!n)return c.classList.add("visually-hidden"),void a.classList.remove("visually-hidden");m.query=n;const r=await m.getMoviesByName(n,t);if(localStorage.setItem("query",JSON.stringify(r)),0===r.total_results)a.classList.add("visually-hidden"),c.classList.remove("visually-hidden");else{c.classList.add("visually-hidden"),a.classList.add("visually-hidden"),f();const e=function(e){const{results:t}=e;return t.map((({poster_path:e,original_title:t,genre_ids:n,release_date:r,id:o})=>{const d=r.substring(0,4),c=(0,l.getGenresName)(n),a=(0,u.sliceGenres)(c);let s=`${i.urls.BASE_IMAGE_URL}${e}`;return null===e&&(s="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),`<li class="card__item" data-id=${o}>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="${s}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="card__genres">${a.join(", ")}</p>\n      <p class="card__year">${d}</p>\n    </div>\n  </div>\n</li>`})).join("")}(r);o.insertAdjacentHTML("beforeend",e)}})),(0,y.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});s=r("4kseb");var v=r("dX4f0");s=r("4kseb"),v=r("dX4f0");const g=new(0,s.default),h=document.querySelector(".button2"),p=document.querySelector(".button1");h.addEventListener("click",(async function(){w+=1,k(),C()})),p.addEventListener("click",(async function(){if(1==w)return console.log("error");w-=1,k(),C()}));const S=document.querySelector('[data-index="1"]'),b=document.querySelector('[data-index="2"]'),x=document.querySelector('[data-index="3"]'),q=document.querySelector('[data-index="4"]'),L=document.querySelector('[data-index="5"]'),_=document.querySelector('[data-index="6"]');S.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="1"]').textContent),C(),k()})),b.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="2"]').textContent),C(),k()})),x.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="3"]').textContent),C(),k()})),q.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="4"]').textContent),C(),k()})),L.addEventListener("click",(async function(){return w=1,C(),k()})),_.addEventListener("click",(async function(){return w=1,C(),k()})),S.hidden=!0,b.hidden=!0,x.textContent=2,q.textContent=3,L.textContent=1,_.textContent=1e3;let w=1;async function k(){try{const e=(await g.fetchTrendingMovies(w)).data.results,t=(0,v.createMarkup)(e);f(),o.innerHTML=t,window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("currentPage").textContent=w}catch(e){console.error("Error with search fetch"+e)}}async function C(){x.textContent=w+1,q.textContent=w+2,w>=3?(S.hidden=!1,b.hidden=!1,S.textContent=w-2,b.textContent=w-1):(S.hidden=!0,b.hidden=!0)}const E=new(0,s.default);document.addEventListener("DOMContentLoaded",(async function(){const e=(await E.fetchTrendingMovies()).data.results;localStorage.setItem("trendingFilms",JSON.stringify(e));const t=(0,v.createMarkup)(e);o.insertAdjacentHTML("beforeend",t)})),r("HzXMd"),r("46fOB"),r("a1Vwq"),r("gBTz3"),r("lWsHk");s=r("4kseb");r("46fOB");new(0,s.default);r("bbkJ9"),r("dvlOj"),r("kCbOd");s=r("4kseb"),v=r("dX4f0");new(0,s.default);
//# sourceMappingURL=index.fbcf50a5.js.map
