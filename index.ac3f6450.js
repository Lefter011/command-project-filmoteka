!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire62cb;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},t.parcelRequire62cb=a);var o=a("bpxeT"),i=a("2TvXO"),c=(document.querySelector(".button--up"),document.querySelector(".js-gallery")),u=(document.querySelector(".pag"),document.querySelector(".search-form")),s=document.querySelector("input.js-search"),d=(document.querySelector(".js-movie-card"),document.querySelector("#accordion"),document.querySelector(".js-spinner"),document.querySelector("#header"),document.querySelector(".alert-a")),l=document.querySelector(".alert-b"),m=(document.querySelector(".header-buttons"),document.querySelectorAll(".header-button"),a("iqi4A")),p=a("62hKk"),h=a("225Hw"),f=a("8wgAC"),b=a("8RZ1j"),g=(o=a("bpxeT"),i=a("2TvXO"),p=a("62hKk"),a("6hXJ8")),v=new(0,p.default),y=document.querySelector(".button2"),x=document.querySelector(".button1");y.addEventListener("click",(function(){return M.apply(this,arguments)})),x.addEventListener("click",(function(){return C.apply(this,arguments)}));var k=document.querySelector('[data-index="1"]'),w=document.querySelector('[data-index="2"]'),_=document.querySelector('[data-index="3"]'),L=document.querySelector('[data-index="4"]'),S=document.querySelector('[data-index="5"]'),q=document.querySelector('[data-index="6"]');k.addEventListener("click",(function(){return E.apply(this,arguments)})),w.addEventListener("click",(function(){return N.apply(this,arguments)})),_.addEventListener("click",(function(){return j.apply(this,arguments)})),L.addEventListener("click",(function(){return H.apply(this,arguments)})),S.addEventListener("click",(function(){return D.apply(this,arguments)})),q.addEventListener("click",(function(){return A.apply(this,arguments)})),k.hidden=!0,w.hidden=!0,S.hidden=!0,_.textContent=2,L.textContent=3,S.textContent=1,q.textContent=1e3;var T=1;function M(){return(M=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:T+=1,O(),B();case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function C(){return(C=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(1==T){e.next=4;break}T-=1,O(),B(),e.next=5;break;case 4:return e.abrupt("return",console.log("error"));case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function E(){return(E=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=Number(document.querySelector('[data-index="1"]').textContent),B(),e.abrupt("return",O());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function N(){return(N=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=Number(document.querySelector('[data-index="2"]').textContent),B(),e.abrupt("return",O());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function j(){return(j=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=Number(document.querySelector('[data-index="3"]').textContent),B(),e.abrupt("return",O());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function H(){return(H=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=Number(document.querySelector('[data-index="4"]').textContent),B(),e.abrupt("return",O());case 3:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function D(){return(D=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=1,B(),_.hidden=!1,L.hidden=!1,x.hidden=!0,y.hidden=!1,q.hidden=!1,_.textContent=Number(T)+1,L.textContent=Number(T)+2,e.abrupt("return",O());case 10:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function A(){return(A=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return T=q.textContent,B(),x.hidden=!1,S.hidden=!1,e.abrupt("return",O());case 5:case"end":return e.stop()}}),t)})))).apply(this,arguments)}function O(){return X.apply(this,arguments)}function X(){return(X=e(o)(e(i).mark((function t(){var n,r,a,o,u,d;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,""===s.value){e.next=12;break}return e.next=4,v.getMoviesByName(s.value,T);case 4:n=e.sent,r=n.results,a=(0,g.createMarkup)(r),U(),q.hidden=!0,c.innerHTML=a,e.next=19;break;case 12:return e.next=14,v.fetchTrendingMovies(T);case 14:o=e.sent,u=o.data.results,d=(0,g.createMarkup)(u),U(),c.innerHTML=d;case 19:window.scrollTo({top:0,behavior:"smooth"}),document.getElementById("currentPage").textContent=T,e.next=26;break;case 23:e.prev=23,e.t0=e.catch(0),console.error("Error with search fetch"+e.t0);case 26:case"end":return e.stop()}}),t,null,[[0,23]])})))).apply(this,arguments)}function B(){return G.apply(this,arguments)}function G(){return(G=e(o)(e(i).mark((function t(){return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:_.textContent=Number(T)+1,L.textContent=Number(T)+2,T>=3&&T<=997&&(x.hidden=!1,k.hidden=!1,w.hidden=!1,S.hidden=!1,w.textContent=T-1,k.textContent=T-2,_.hidden=!1,L.hidden=!1,y.hidden=!1,q.hidden=!1),T<3&&(k.hidden=!0,w.hidden=!0,S.hidden=!0),T>=998&&T<=1e3&&(k.hidden=!1,w.hidden=!1,w.textContent=T-1,k.textContent=T-2),T>=998&&(L.hidden=!0),T>=1e3&&(_.hidden=!0,q.hidden=!0,y.hidden=!0);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}new(0,(p=a("62hKk")).default);var K=new(0,p.default),J=1;function I(){return I=e(o)(e(i).mark((function t(n,r){var a,u,s,m,p,h;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n.preventDefault(),a=n.currentTarget.elements.searchQuery.value.trim().toLowerCase()){t.next=7;break}return d.classList.add("visually-hidden"),l.classList.remove("visually-hidden"),setTimeout((function(){location.reload()}),1e3),t.abrupt("return");case 7:return K.query=a,u={root:null,rootMargin:"100px",threshold:1},s=new IntersectionObserver(function(){var t=e(o)(e(i).mark((function t(n,r){return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n.forEach(function(){var t=e(o)(e(i).mark((function t(n){var r,o;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.isIntersecting){e.next=10;break}return console.log("YEEEY"),Y(),e.next=5,K.getMoviesByName(a,J);case 5:r=e.sent,console.log("io   results",r),console.log("callback   searchQuery",a),o=R(r),c.insertAdjacentHTML("beforeend",o);case 10:case"end":return e.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 1:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),u),m=document.querySelector(".pagination-container"),s.observe(m),console.log("onSubmit   observer",s),console.log("onSubmit   observerTarget",m),t.next=16,K.getMoviesByName(a,r);case 16:p=t.sent,localStorage.setItem("query",JSON.stringify(p)),0===p.total_results?(l.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),setTimeout((function(){location.reload()}),1e3)):(d.classList.add("visually-hidden"),l.classList.add("visually-hidden"),U(),h=R(p),c.insertAdjacentHTML("beforeend",h));case 19:case"end":return t.stop()}}),t)}))),I.apply(this,arguments)}function R(e){return e.results.map((function(e){var t=e.poster_path,n=e.original_title,r=e.genre_ids,a=e.release_date,o=e.id,i=new Date(a),c=(0,h.getGenresName)(r),u=(0,f.sliceGenres)(c),s="".concat(m.urls.BASE_IMAGE_URL).concat(t);return null===t&&(s="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="card__item" data-id='.concat(o,'>\n  <div class="card__img-wrap js-modal-trigger">\n    <img\n      src="').concat(s,'"\n      alt="').concat(n,'"\n      class="card__img"\n    />\n  </div>\n  <div class="card__text-wrap js-modal-trigger">\n    <h2 class="card__name">').concat(n,'</h2>\n    <div class="card__info">\n      <p class="card__genres">').concat(u.join(", "),'</p>\n      <p class="card__year">').concat(i.getFullYear(),"</p>\n    </div>\n  </div>\n</li>")})).join("")}function U(){c.innerHTML=""}function Y(){return J+=1}u.addEventListener("submit",(function(e,t){return I.apply(this,arguments)})),(0,b.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"});o=a("bpxeT"),i=a("2TvXO"),p=a("62hKk"),g=a("6hXJ8");var F=new(0,p.default);function P(){return(P=e(o)(e(i).mark((function t(){var n,r,a;return e(i).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,F.fetchTrendingMovies();case 2:n=e.sent,r=n.data.results,localStorage.setItem("trendingFilms",JSON.stringify(r)),a=(0,g.createMarkup)(r),c.insertAdjacentHTML("beforeend",a);case 7:case"end":return e.stop()}}),t)})))).apply(this,arguments)}document.addEventListener("DOMContentLoaded",(function(){return P.apply(this,arguments)})),a("ewLqX");var V;V=JSON.parse('[{"username":"Сергій Павлюченко","role":"Developer","image":"https://i.ibb.co/YyF27L5/img-team-sergiy.png","github":"https://github.com/SergeyPavluchenko","id":"1"},{"username":"Ярослава Воробець","role":"Developer","image":"https://i.ibb.co/g6XD07R/img-team-yaroslava.png","github":"https://github.com/Yaroslava-Vorobets","id":"2"},{"username":"Андрій Уткін","role":"Developer","image":"https://i.ibb.co/Gtz0Lx4/img-team-andriy.png","github":"https://github.com/AndreyNik2","id":"3"},{"username":"Катерина Дзюбчук","role":"Developer","image":"https://i.ibb.co/TPzRdYm/img-team-katya.png","github":"https://github.com/Kate-Kitkat19","id":"4"},{"username":"Юлія Пархоменко","role":"Developer","image":"https://i.ibb.co/h7pLcGg/img-team-julia.png","github":"https://github.com/lady-araminta","id":"5"},{"username":"Швець Вікторія","role":"Developer","image":"https://i.ibb.co/3RbrM2N/img-team-viktoria.png","github":"https://github.com/BondarViktoriia","id":"6"},{"username":"Михайло Чернецький","role":"Team lead","image":"https://i.ibb.co/bXdSxKH/img-team-misha.png","github":"https://github.com/Lefter011","id":"7"},{"username":"Уляна Колеснікова","role":"Scrum master","image":"https://i.ibb.co/wLmpFPy/img-team-ulyana.png","github":"https://github.com/Anakole","id":"8"}]');var z,Q={openTeamModal:document.querySelector("[data-new-modal-open]"),closeTeamModal:document.querySelector("[data-new-modal-close]"),teamBackdrop:document.querySelector(".new-footer__modal-backdrop"),teamModal:document.querySelector("[data-new-modal]"),body:document.querySelector("body"),teamList:document.querySelector(".footer__team-list"),memberCard:document.querySelector(".footer__member-card"),title:document.querySelector(".new-footer__title")};!function(){function t(){Q.teamModal.classList.toggle("visually-hidden"),Q.body.classList.toggle("no-scroll"),Q.memberCard.innerHTML=""}if(Q.openTeamModal.addEventListener("click",t),Q.closeTeamModal.addEventListener("click",t),Q.teamBackdrop.addEventListener("click",(function(e){"new-footer__modal-backdrop"===e.target.className&&(Q.teamModal.classList.add("visually-hidden"),Q.memberCard.innerHTML="",Q.title.classList.remove("visually-hidden"))})),Q.teamModal){Q.teamList.addEventListener("click",(function(t){t.preventDefault(),Q.memberCard.innerHTML="",Q.title.classList.remove("visually-hidden");try{var n=t.target.parentNode.dataset.id,r=e(V).find((function(e){return e.id===n})),a=(i=(o=r).username,c=o.role,u=o.image,s=o.github,d=o.id,'<div class="footer__member-wrap" data-id="'.concat(d,'">\n  <img src="').concat(u,'" alt="image of a member" class="footer__member-img" />\n  <a href="').concat(s,'" class="footer__member-link">\n    <div class="footer_member-text">\n      <p class="footer__member-name">').concat(i,'</p>\n      <p class="footer__member-role">').concat(c,'</p>\n    </div>\n    <img\n      class="footer__member-logo"\n      src="https://i.ibb.co/SnqVKhk/Git-Hub-Mark-32px.png"\n      alt="Git-Hub-Mark-32px"\n      border="0"\n    />\n  </a>\n</div>'));Q.memberCard.insertAdjacentHTML("beforeend",a),Q.title.classList.add("visually-hidden")}catch(e){console.log(e)}var o,i,c,u,s,d}))}}(),z=e(V).map((function(e){var t=e.image,n=e.id;return'<li class="footer__team-item" data-id='.concat(n,'>\n  <img src="').concat(t,'" alt="image of a member" class="footer__team-img" />\n</li>')})).join(""),Q.teamList.insertAdjacentHTML("beforeend",z),a("9VC5X"),a("4pmU7"),a("84aGp"),a("99tBi"),a("iSUmJ");p=a("62hKk");a("4pmU7");new(0,p.default);a("5N6jj"),a("9LWrY"),a("3DdUG");o=a("bpxeT"),i=a("2TvXO"),p=a("62hKk"),g=a("6hXJ8"),new(0,p.default)}();
//# sourceMappingURL=index.ac3f6450.js.map
