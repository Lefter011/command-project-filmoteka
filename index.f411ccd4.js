function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire62cb;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire62cb=a);document.querySelector(".button--up");const o=document.querySelector(".js-gallery"),i=(document.querySelector(".pag"),document.querySelector(".search-form")),d=document.querySelector("input.js-search"),c=(document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),s=document.querySelector(".alert-b");document.querySelector(".header-buttons"),document.querySelectorAll(".header-button");var l=a("hXrWV"),u=a("4kseb"),m=a("aICLh"),h=a("8JeJA"),g=a("4eRSF");const b=new(0,u.default);function p(){o.innerHTML=""}i.addEventListener("submit",(async function(e,t){e.preventDefault();const n=e.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(!n)return c.classList.add("visually-hidden"),s.classList.remove("visually-hidden"),void setTimeout((()=>{location.reload()}),1e3);b.query=n;const r=await b.getMoviesByName(n,t);if(localStorage.setItem("query",JSON.stringify(r)),0===r.total_results)s.classList.add("visually-hidden"),c.classList.remove("visually-hidden"),setTimeout((()=>{location.reload()}),1e3);else{c.classList.add("visually-hidden"),s.classList.add("visually-hidden"),p();const e=function(e){const{results:t}=e;return t.map((({poster_path:e,original_title:t,genre_ids:n,release_date:r,id:a})=>{const o=new Date(r),i=(0,m.getGenresName)(n),d=(0,h.sliceGenres)(i);let c=`${l.urls.BASE_IMAGE_URL}${e}`;return null===e&&(c="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),`<li class="card__item" data-id=${a}>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="${c}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="card__genres">${d.join(", ")}</p>\n      <p class="card__year">${o.getFullYear()}</p>\n    </div>\n  </div>\n</li>`})).join("")}(r);o.insertAdjacentHTML("beforeend",e)}})),(0,g.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});u=a("4kseb");var y=a("dX4f0");u=a("4kseb"),y=a("dX4f0");const f=new(0,u.default),v=document.querySelector(".button2"),_=document.querySelector(".button1");v.addEventListener("click",(async function(){w+=1,C(),T()})),_.addEventListener("click",(async function(){if(1==w)return console.log("error");w-=1,C(),T()}));const L=document.querySelector('[data-index="1"]'),S=document.querySelector('[data-index="2"]'),k=document.querySelector('[data-index="3"]'),x=document.querySelector('[data-index="4"]'),q=document.querySelector('[data-index="5"]'),M=document.querySelector('[data-index="6"]');L.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="1"]').textContent),T(),C()})),S.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="2"]').textContent),T(),C()})),k.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="3"]').textContent),T(),C()})),x.addEventListener("click",(async function(){return w=Number(document.querySelector('[data-index="4"]').textContent),T(),C()})),q.addEventListener("click",(async function(){return w=1,T(),k.hidden=!1,x.hidden=!1,_.hidden=!0,v.hidden=!1,M.hidden=!1,k.textContent=Number(w)+1,x.textContent=Number(w)+2,C()})),M.addEventListener("click",(async function(){return w=M.textContent,T(),_.hidden=!1,q.hidden=!1,C()})),L.hidden=!0,S.hidden=!0,q.hidden=!0,k.textContent=2,x.textContent=3,q.textContent=1,M.textContent=1e3;let w=1;async function C(){try{if(""!==d.value){const e=(await f.getMoviesByName(d.value,w)).results,t=(0,y.createMarkup)(e);p(),M.hidden=!0,o.innerHTML=t}else{const e=(await f.fetchTrendingMovies(w)).data.results,t=(0,y.createMarkup)(e);p(),o.innerHTML=t}window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("currentPage").textContent=w}catch(e){console.error("Error with search fetch"+e)}}async function T(){k.textContent=Number(w)+1,x.textContent=Number(w)+2,w>=3&&w<=997&&(_.hidden=!1,L.hidden=!1,S.hidden=!1,q.hidden=!1,S.textContent=w-1,L.textContent=w-2,k.hidden=!1,x.hidden=!1,v.hidden=!1,M.hidden=!1),w<3&&(L.hidden=!0,S.hidden=!0,q.hidden=!0),w>=998&&w<=1e3&&(L.hidden=!1,S.hidden=!1,S.textContent=w-1,L.textContent=w-2),w>=998&&(x.hidden=!0),w>=1e3&&(k.hidden=!0,M.hidden=!0,v.hidden=!0)}const N=new(0,u.default);document.addEventListener("DOMContentLoaded",(async function(){const e=(await N.fetchTrendingMovies()).data.results;localStorage.setItem("trendingFilms",JSON.stringify(e));const t=(0,y.createMarkup)(e);o.insertAdjacentHTML("beforeend",t)})),a("HzXMd");var E;E=JSON.parse('[{"username":"Сергій Павлюченко","role":"Developer","image":"https://i.ibb.co/YyF27L5/img-team-sergiy.png","github":"https://github.com/SergeyPavluchenko","id":"1"},{"username":"Ярослава Воробець","role":"Developer","image":"https://i.ibb.co/g6XD07R/img-team-yaroslava.png","github":"https://github.com/Yaroslava-Vorobets","id":"2"},{"username":"Андрій Уткін","role":"Developer","image":"https://i.ibb.co/Gtz0Lx4/img-team-andriy.png","github":"https://github.com/AndreyNik2","id":"3"},{"username":"Катерина Дзюбчук","role":"Developer","image":"https://i.ibb.co/TPzRdYm/img-team-katya.png","github":"https://github.com/Kate-Kitkat19","id":"4"},{"username":"Юлія Пархоменко","role":"Developer","image":"https://i.ibb.co/h7pLcGg/img-team-julia.png","github":"https://github.com/lady-araminta","id":"5"},{"username":"Швець Вікторія","role":"Developer","image":"https://i.ibb.co/3RbrM2N/img-team-viktoria.png","github":"https://github.com/BondarViktoriia","id":"6"},{"username":"Михайло Чернецький","role":"Team lead","image":"https://i.ibb.co/bXdSxKH/img-team-misha.png","github":"https://github.com/Lefter011","id":"7"},{"username":"Уляна Колеснікова","role":"Scrum master","image":"https://i.ibb.co/wLmpFPy/img-team-ulyana.png","github":"https://github.com/Anakole","id":"8"}]');const j={openTeamModal:document.querySelector("[data-new-modal-open]"),closeTeamModal:document.querySelector("[data-new-modal-close]"),teamBackdrop:document.querySelector(".new-footer__modal-backdrop"),teamModal:document.querySelector("[data-new-modal]"),body:document.querySelector("body"),teamList:document.querySelector(".footer__team-list"),memberCard:document.querySelector(".footer__member-card"),title:document.querySelector(".new-footer__title")};(()=>{function t(){j.teamModal.classList.toggle("visually-hidden"),j.body.classList.toggle("no-scroll"),j.memberCard.innerHTML=""}if(j.openTeamModal.addEventListener("click",t),j.closeTeamModal.addEventListener("click",t),j.teamBackdrop.addEventListener("click",(function(e){"new-footer__modal-backdrop"===e.target.className&&(j.teamModal.classList.add("visually-hidden"),j.memberCard.innerHTML="",j.title.classList.remove("visually-hidden"))})),j.teamModal){j.teamList.addEventListener("click",(function(t){t.preventDefault(),j.memberCard.innerHTML="",j.title.classList.remove("visually-hidden");try{const n=t.target.parentNode.dataset.id,r=function(e){const{username:t,role:n,image:r,github:a,id:o}=e;return`<div class="footer__member-wrap" data-id="${o}">\n  <img src="${r}" alt="image of a member" class="footer__member-img" />\n  <a href="${a}" class="footer__member-link">\n    <div class="footer_member-text">\n      <p class="footer__member-name">${t}</p>\n      <p class="footer__member-role">${n}</p>\n    </div>\n    <img\n      class="footer__member-logo"\n      src="https://i.ibb.co/SnqVKhk/Git-Hub-Mark-32px.png"\n      alt="Git-Hub-Mark-32px"\n      border="0"\n    />\n  </a>\n</div>`}(e(E).find((e=>e.id===n)));j.memberCard.insertAdjacentHTML("beforeend",r),j.title.classList.add("visually-hidden")}catch(e){console.log(e)}}))}})(),(()=>{const t=e(E).map((({image:e,id:t})=>`<li class="footer__team-item" data-id=${t}>\n  <img src="${e}" alt="image of a member" class="footer__team-img" />\n</li>`)).join("");j.teamList.insertAdjacentHTML("beforeend",t)})(),a("4S0r6"),a("46fOB"),a("a1Vwq"),a("gBTz3"),a("lWsHk");u=a("4kseb");a("46fOB");new(0,u.default);a("bbkJ9"),a("dvlOj"),a("kCbOd");u=a("4kseb"),y=a("dX4f0");new(0,u.default);
//# sourceMappingURL=index.f411ccd4.js.map
