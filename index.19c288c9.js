function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},s=t.parcelRequire62cb;null==s&&((s=function(e){if(e in n)return n[e].exports;if(e in a){var t=a[e];delete a[e];var s={id:e,exports:{}};return n[e]=s,t.call(s.exports,s,s.exports),s.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){a[e]=t},t.parcelRequire62cb=s),s.register("fExtF",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t,n){if(!t.has(e))throw new TypeError("attempted to "+n+" private field on non-instance");return t.get(e)}})),s.register("iaRLo",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){return t.get?t.get.call(e):t.value}})),s.register("7K24o",(function(e,t){Object.defineProperty(e.exports,"__esModule",{value:!0}),e.exports.default=function(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}})),s("98X4p");document.querySelector(".button--up");const o=document.querySelector(".js-gallery"),r=(document.querySelector(".pag"),document.querySelector(".search-form")),i=(document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),d=document.querySelector(".alert-b");document.querySelector(".header-buttons"),document.querySelectorAll(".header-button");var c=s("hXrWV"),l={};Object.defineProperty(l,"__esModule",{value:!0}),l.default=function(e,t){var n=u.default(e,t,"get");return m.default(e,n)};var u=_(s("fExtF")),m=_(s("iaRLo"));function _(e){return e&&e.__esModule?e:{default:e}}var p={};Object.defineProperty(p,"__esModule",{value:!0}),p.default=function(e,t,n){f.default(e,t),t.set(e,n)};var v,f=(v=s("7K24o"))&&v.__esModule?v:{default:v};c=s("hXrWV");var y=s("2shzp").default,h=new WeakMap,g=new WeakMap,b=new WeakMap;class w{async fetchGenres(){const t=c.urls.BASE_URL+c.urls.GENRES_PATH_URL;try{const n=await y.get(t,e(l)(this,g));return n.data.genres}catch(e){console.error(e)}}async fetchTrendingMovies(e=1){const t=c.urls.BASE_URL+c.urls.TRENDINGS_PATH_URL,n={params:{api_key:c.API_KEY,page:e}};try{return await y.get(t,n)}catch(e){console.error(e)}}async fetchMoviesByName(){const t=c.urls.BASE_URL+c.urls.SEARCH_PATH_URL;try{return await y.get(t,e(l)(this,h))}catch(e){console.error(e)}}async getMoviesByName(t,n=1){e(l)(this,h).params.query=t,e(l)(this,h).params.page=n;const a=c.urls.BASE_URL+c.urls.SEARCH_PATH_URL;return(await y.get(a,e(l)(this,h))).data}async fetchMoviesByID(t){const n=c.urls.BASE_URL+c.urls.GET_MOVIE_DETAILS_PATH_URL+t;try{return(await y.get(n,e(l)(this,b))).data}catch(e){console.error(e)}}catch(e){console.error(e)}constructor(){e(p)(this,h,{writable:!0,value:{params:{api_key:c.API_KEY,query:"",page:1,include_adult:!1}}}),e(p)(this,g,{writable:!0,value:{params:{api_key:c.API_KEY}}}),e(p)(this,b,{writable:!0,value:{params:{api_key:c.API_KEY}}})}}function L(e,t){const n=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}').genres;let a=[];for(let s=0;s<t&&s<e.length;s+=1)for(genre of n)e[s]===genre.id&&a.push(genre.name);return e.length>t&&a.splice(t-1,1,"Other"),a.join(" ")}const S=new w;r.addEventListener("submit",(async function(e){e.preventDefault();const t=e.currentTarget.elements.searchQuery.value.trim().toLowerCase();if(!t)return i.classList.add("visually-hidden"),void d.classList.remove("visually-hidden");const n=await S.getMoviesByName(t);if(0===n.total_results)d.classList.add("visually-hidden"),i.classList.remove("visually-hidden");else{i.classList.add("visually-hidden"),d.classList.add("visually-hidden"),o.innerHTML="";const e=function(e){const{results:t}=e;return t.map((({poster_path:e,original_title:t,genre_ids:n,release_date:a,id:s})=>{const o=a.substring(0,4),r=L(n,3);let i=`${c.urls.BASE_IMAGE_URL}${e}`;return null===e&&(i="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),`<li class="card__item">\n  <div class="card__img-wrap">\n    <img\n      src="${i}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="visually-hidden">${s}</p>\n      <p class="card__genres">${r}</p>\n      <p class="card__year">${o}</p>\n    </div>\n  </div>\n</li>`})).join("")}(n);o.insertAdjacentHTML("beforeend",e)}}));c=s("hXrWV");const E=new w;document.addEventListener("DOMContentLoaded",(async function(){const e=(await E.fetchTrendingMovies()).data.results;localStorage.setItem("trendingFilms",JSON.stringify(e));const t=e.map((({genre_ids:e,title:t,poster_path:n,release_date:a})=>`<li class="card__item">\n  <div class="card__img-wrap">\n    <img\n      src="${c.urls.BASE_IMAGE_URL}${n}"\n      alt="${t}"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap">\n    <h2 class="card__name">${t}</h2>\n    <div class="card__info">\n      <p class="card__genres">Drama, Action<span class="card__year"></span></p>\n      <p class="card__year">2022</p>\n    </div>\n  </div>\n</li>`)).join("");o.insertAdjacentHTML("beforeend",t)})),s("HzXMd"),s("46fOB");const q={body:document.body,openBtn:document.querySelector("button[data-modal-open]"),closeBtn:document.querySelector("button[data-modal-close]"),backdrop:document.querySelector("div[data-modal]")};q.openBtn.addEventListener("click",(function(){q.backdrop.classList.remove("is-hidden")})),q.closeBtn.addEventListener("click",(function(){q.backdrop.classList.add("is-hidden")}));const A={body:document.body,openBtn:document.querySelector("button[data-modal-open]"),closeBtn:document.querySelector("button[data-modal-close]"),backdrop:document.querySelector("div[data-modal]"),modal:document.querySelector("div.js-movie-card"),containerForInfo:document.querySelector("div.modal__container")};var M=s("gncCB");const k=s("amrNH").compile('<div class="modal__content">\n  <div class="img-thumb">\n  {{#if poster_path}}\n    <picture class="main-modal-img">\n      <source\n        srcset="https://image.tmdb.org/t/p/original{{poster_path}}"\n        media="(min-width: 1024px)"\n      />\n      <source\n        srcset="\n          https://image.tmdb.org/t/p/w780{{poster_path}}  1x,\n          https://image.tmdb.org/t/p/original{{poster_path}} 2x\n        "\n        media="(min-width: 768px)"\n      />\n      <source\n        srcset="\n          https://image.tmdb.org/t/p/w342{{poster_path}} 1x,\n          https://image.tmdb.org/t/p/w780{{poster_path}} 2x\n        "\n        media="(min-width: 320px)"\n      />\n\n      <img\n        src="https://image.tmdb.org/t/p/w342{{poster_path}}"\n        alt="{{title}}"\n        class="main-modal-img"\n      />\n    </picture>\n    {{else}}\n      <img\n      src=\'https://cdn.pixabay.com/photo/2014/03/25/16/27/movie-297135_960_720.png\'\n          alt="{{title}}"\n          class="main-modal-img"\n        />\n    {{/if}}\n  </div>\n  <div class="modal__info-container">\n    <h2 class="modal__title">{{title}}</h2>\n    <table class="modal__stats">\n      <tr class="stats__row">\n        <td class="stats__name">Vote</td>\n        <td class="stats__value">\n          <span class="accent-num">{{vote_average}}</span> /\n          <span class="grey-num">{{vote_count}}</span>\n        </td>\n      </tr>\n      <tr class="stats__row">\n        <td class="stats__name">Popularity</td>\n        <td class="stats__value">{{popularity}}</td>\n      </tr>\n      <tr class="stats__row">\n      {{#if original_title}}\n        <td class="stats__name">Original Title</td>\n        <td class="stats__value">{{original_title}}</td>\n        {{else}}\n        <td class="stats__name">Title</td>\n        <td class="stats__value">{{title}}</td>\n        {{/if}}\n      </tr>\n      <tr class="stats__row">\n      {{#if genre_ids}}\n        <td class="stats__name">Genre</td>\n        <td class="stats__value">{{genre_ids}}</td>\n      {{/if}}\n      </tr>\n    </table>\n\n    <section class="modal__about">\n      <h3 class="about__title">About</h3>\n      <p class="about__text">{{overview}}</p>\n    </section>\n    <div class="modal__buttons">\n      <button\n        type="button"\n        class="modal__btn modal__btn--orange"\n        data-modal-watched\n      >\n        add to watched\n      </button>\n      <button\n        type="button"\n        class="modal__btn modal__btn--light"\n        data-modal-queue\n      >\n        add to queue\n      </button>\n    </div>\n  </div>\n</div>');var T;T=k(M.films[9]),A.containerForInfo.innerHTML=T;var B=s("bbkJ9"),x=s("46fOB");function R(e){const t=x.localStore.load("queue"),n=t.find((t=>t.id===e.id));if(n){const e=t.indexOf(n);t.splice(e,1),x.localStore.save("queue",t)}else t.push(e),x.localStore.save("queue",t)}x=s("46fOB"),B=s("bbkJ9");s("gncCB");x=s("46fOB");new w;function O(){A.backdrop.classList.add("is-hidden"),A.modal.classList.remove("is-open"),A.body.classList.remove("modal-shown"),A.body.removeEventListener("click",H),window.removeEventListener("keydown",j)}function H(e){"backdrop"===e.target.className&&O()}function j(e){"Escape"===e.code&&O()}A.openBtn.addEventListener("click",(function(e){e.preventDefault(),A.backdrop.classList.remove("is-hidden"),A.modal.classList.add("is-open"),A.body.classList.add("modal-shown"),A.body.addEventListener("click",H),window.addEventListener("keydown",j),function(){const e=document.querySelector("button[data-modal-queue]"),t=document.querySelector("button[data-modal-watched]");e.addEventListener("click",R),t.addEventListener("click",B.onWatchedClick)}(),function(){let e=x.localStore.load(B.WATCHED_KEY);e=e||[],x.localStore.save(B.WATCHED_KEY,e);let t=x.localStore.load("queue");t=t||[],x.localStore.save("queue",t)}()})),A.closeBtn.addEventListener("click",O);x=s("46fOB");const P=new w;!async function(){const e=await P.fetchTrendingMovies();x.localStore.save("trendingFilms",e.data.results)}(),s("bbkJ9");
//# sourceMappingURL=index.19c288c9.js.map
