var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire62cb;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){n[e]=t},e.parcelRequire62cb=r),r("98X4p"),r("4S0r6"),r("dBfix");document.querySelector(".button--up");const o=document.querySelector(".js-gallery"),c=(document.querySelector(".pag"),document.querySelector(".search-form")),a=(document.querySelector("input.js-search"),document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),d=document.querySelector(".alert-b");document.querySelector(".header-buttons"),document.querySelectorAll(".header-button");var s=r("hXrWV"),i=r("4kseb"),l=r("aICLh"),u=r("8JeJA"),y=r("4eRSF");const m=new(0,i.default);function f(){o.innerHTML=""}c.addEventListener("submit",(async function(e,t){e.preventDefault();const n=e.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(!n)return a.classList.add("visually-hidden"),void d.classList.remove("visually-hidden");m.query=n;const r=await m.getMoviesByName(n,t);if(localStorage.setItem("query",JSON.stringify(r)),0===r.total_results)d.classList.add("visually-hidden"),a.classList.remove("visually-hidden");else{a.classList.add("visually-hidden"),d.classList.add("visually-hidden"),f();const e=function(e){const{results:t}=e;return t.map((({poster_path:e,original_title:t,genre_ids:n,release_date:r,id:o})=>{const c=r.substring(0,4),a=(0,l.getGenresName)(n),d=(0,u.sliceGenres)(a);let i=`${s.urls.BASE_IMAGE_URL}${e}`;return null===e&&(i="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),`<li class="card__item" data-id=${o}>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="${i}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="card__genres">${d.join(", ")}</p>\n      <p class="card__year">${c}</p>\n    </div>\n  </div>\n</li>`})).join("")}(r);o.insertAdjacentHTML("beforeend",e)}})),(0,y.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});i=r("4kseb");var g=r("dX4f0");i=r("4kseb"),g=r("dX4f0");const v=new(0,i.default),p=document.querySelector(".button2"),S=document.querySelector(".button1");p.addEventListener("click",(async function(){w+=1,E(),M()})),S.addEventListener("click",(async function(){if(1==w)return console.log("error");w-=1,E(),M()}));const h=document.querySelector('[data-index="1"]'),q=document.querySelector('[data-index="2"]'),x=document.querySelector('[data-index="3"]'),b=document.querySelector('[data-index="4"]'),_=document.querySelector('[data-index="5"]'),L=document.querySelector('[data-index="6"]');h.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="1"]').textContent),M(),E()})),q.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="2"]').textContent),M(),E()})),x.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="3"]').textContent),M(),E()})),b.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="4"]').textContent),M(),E()})),_.addEventListener("click",(async function(){return w=1,M(),E()})),L.addEventListener("click",(async function(){return w=1,M(),E()}));const k=localStorage.getItem("query"),C=JSON.parse(k).total_pages;console.log(C),q.hidden=!0,x.textContent=2,b.textContent=3,_.textContent=1,L.textContent=1e3;let w=1;async function E(){try{const e=(await v.fetchTrendingMovies(w)).data.results,t=(0,g.createMarkup)(e);f(),o.innerHTML=t,document.getElementById("currentPage").textContent=w}catch(e){console.error("Error with search fetch"+e)}}async function M(){x.textContent=w+1,b.textContent=w+2,w>=3?(h.hidden=!1,q.hidden=!1,h.textContent=w-2,q.textContent=w-1):(h.hidden=!0,q.hidden=!0)}const T=new(0,i.default);document.addEventListener("DOMContentLoaded",(async function(){const e=(await T.fetchTrendingMovies()).data.results;localStorage.setItem("trendingFilms",JSON.stringify(e));const t=(0,g.createMarkup)(e);o.insertAdjacentHTML("beforeend",t)})),r("HzXMd"),r("46fOB"),r("a1Vwq"),r("gBTz3"),r("lWsHk");i=r("4kseb");r("46fOB");new(0,i.default);r("bbkJ9"),r("dvlOj"),r("kCbOd");i=r("4kseb"),g=r("dX4f0");new(0,i.default);
//# sourceMappingURL=index.adf237ef.js.map
