!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire62cb;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var c=new Error("Cannot find module '"+e+"'");throw c.code="MODULE_NOT_FOUND",c}).register=function(e,t){r[e]=t},t.parcelRequire62cb=a),a("2p6Fd"),a("9VC5X"),a("7Q2m0");var c=a("bpxeT"),u=a("2TvXO"),o=(document.querySelector(".button--up"),document.querySelector(".js-gallery")),i=(document.querySelector(".pag"),document.querySelector(".search-form")),s=(document.querySelector("input.js-search"),document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),d=document.querySelector(".alert-b"),l=(document.querySelector(".header-buttons"),document.querySelectorAll(".header-button"),a("iqi4A")),p=a("62hKk"),f=a("225Hw"),h=a("8wgAC"),m=a("8RZ1j"),y=new(0,p.default);function v(){return(v=e(c)(e(u).mark((function t(n,r){var a,c,i;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.preventDefault(),a=n.currentTarget.elements.searchQuery.value.trim().toLowerCase()){e.next=6;break}return s.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),e.abrupt("return");case 6:return y.query=a,e.next=9,y.getMoviesByName(a,r);case 9:c=e.sent,localStorage.setItem("query",JSON.stringify(c)),0===c.total_results?(d.classList.add("visually-hidden"),s.classList.remove("visually-hidden")):(s.classList.add("visually-hidden"),d.classList.add("visually-hidden"),w(),i=x(c),o.insertAdjacentHTML("beforeend",i));case 12:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function x(e){return e.results.map((function(e){var t=e.poster_path,n=e.original_title,r=e.genre_ids,a=e.release_date,c=e.id,u=a.substring(0,4),o=(0,f.getGenresName)(r),i=(0,h.sliceGenres)(o),s="".concat(l.urls.BASE_IMAGE_URL).concat(t);return null===t&&(s="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="card__item" data-id='.concat(c,'>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="').concat(s,'"\n      alt="').concat(n,'"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">').concat(n,'</h2>\n    <div class="card__info">\n      <p class="card__genres">').concat(i.join(", "),'</p>\n      <p class="card__year">').concat(u,"</p>\n    </div>\n  </div>\n</li>")})).join("")}function w(){o.innerHTML=""}i.addEventListener("submit",(function(e,t){return v.apply(this,arguments)})),(0,m.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});c=a("bpxeT"),u=a("2TvXO"),p=a("62hKk");var g=a("6hXJ8"),b=(c=a("bpxeT"),u=a("2TvXO"),p=a("62hKk"),g=a("6hXJ8"),new(0,p.default)),k=document.querySelector(".button2"),S=document.querySelector(".button1");k.addEventListener("click",(function(){return O.apply(this,arguments)})),S.addEventListener("click",(function(){return X.apply(this,arguments)}));var q=document.querySelector('[data-index="1"]'),_=document.querySelector('[data-index="2"]'),L=document.querySelector('[data-index="3"]'),C=document.querySelector('[data-index="4"]'),T=document.querySelector('[data-index="5"]'),E=document.querySelector('[data-index="6"]');q.addEventListener("click",(function(){return A.apply(this,arguments)})),_.addEventListener("click",(function(){return J.apply(this,arguments)})),L.addEventListener("click",(function(){return U.apply(this,arguments)})),C.addEventListener("click",(function(){return G.apply(this,arguments)})),T.addEventListener("click",(function(){return I.apply(this,arguments)})),E.addEventListener("click",(function(){return B.apply(this,arguments)}));var j=localStorage.getItem("query"),M=JSON.parse(j).total_pages;console.log(M),_.hidden=!0,L.textContent=2,C.textContent=3,T.textContent=1,E.textContent=1e3;var N=1;function O(){return(O=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:N+=1,D(),K();case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function X(){return(X=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1==N){e.next=4;break}N-=1,D(),K(),e.next=5;break;case 4:return e.abrupt("return",console.log("error"));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=Number(document.querySelector('[data-index="1"]').textContent),K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function J(){return(J=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=Number(document.querySelector('[data-index="2"]').textContent),K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function U(){return(U=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=Number(document.querySelector('[data-index="3"]').textContent),K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function G(){return(G=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=Number(document.querySelector('[data-index="4"]').textContent),K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function I(){return(I=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=1,K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function B(){return(B=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N=1,K(),e.abrupt("return",D());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){return H.apply(this,arguments)}function H(){return(H=e(c)(e(u).mark((function t(){var n,r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,b.fetchTrendingMovies(N);case 3:n=e.sent,r=n.data.results,a=(0,g.createMarkup)(r),w(),o.innerHTML=a,document.getElementById("currentPage").textContent=N,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error("Error with search fetch"+e.t0);case 14:case"end":return e.stop()}}),t,null,[[0,11]])})))).apply(this,arguments)}function K(){return R.apply(this,arguments)}function R(){return(R=e(c)(e(u).mark((function t(){return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:L.textContent=N+1,C.textContent=N+2,N>=3?(q.hidden=!1,_.hidden=!1,q.textContent=N-2,_.textContent=N-1):(q.hidden=!0,_.hidden=!0);case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}var F=new(0,p.default);function P(){return(P=e(c)(e(u).mark((function t(){var n,r,a;return e(u).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.fetchTrendingMovies();case 2:n=e.sent,r=n.data.results,localStorage.setItem("trendingFilms",JSON.stringify(r)),a=(0,g.createMarkup)(r),o.insertAdjacentHTML("beforeend",a);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return P.apply(this,arguments)})),a("ewLqX"),a("4pmU7"),a("84aGp"),a("99tBi"),a("iSUmJ");p=a("62hKk");a("4pmU7");new(0,p.default);a("5N6jj"),a("9LWrY"),a("3DdUG");c=a("bpxeT"),u=a("2TvXO"),p=a("62hKk"),g=a("6hXJ8"),new(0,p.default)}();
//# sourceMappingURL=index.7f72a4d5.js.map
