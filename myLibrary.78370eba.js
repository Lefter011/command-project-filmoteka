!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequire62cb;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequire62cb=a),a("2p6Fd"),a("ewLqX"),a("225Hw"),a("4pmU7"),a("4pmU7"),a("5N6jj");a("7Q2m0"),a("225Hw");var r=a("8wgAC"),n=document.querySelector(".queue-btn"),s=document.querySelector(".watched-btn"),l=document.querySelector(".mylibrary__list"),c=document.querySelector(".mylibrary"),o=document.querySelector(".no-list");function d(){l.innerHTML=""}function m(){var e=JSON.parse(localStorage.getItem("watched"));return e?(e&&(l.classList.remove("visually-hidden"),o.classList.add("visually-hidden")),e.map((function(e){var t=e.poster_path,i=e.original_title,a=e.genres,n=e.release_date,s=e.vote_average,l=e.id,c=n.substring(0,4),o=Number(s).toFixed(1),d=[];a.map((function(e){return d.push(e.name)}));var m=(0,r.sliceGenres)(d),y="".concat("https://image.tmdb.org/t/p/original").concat(t);return null===t&&(y="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="mylibrary__item" data-id='.concat(l,'>\n            <div class="mylibrary__item-wrapper js-modal-trigger">\n                <img\n                class="mylibrary__item-img"\n                src="').concat(y,'"\n                alt="').concat(i,'"\n                loading=lazy\n            />\n            <h2 class="mylibrary__item-title js-modal-trigger">').concat(i,'</h2>\n            <div class="mylibrary__item-text-wrapper js-modal-trigger">\n                <p class="mylibrary__item-genres">').concat(m.join(", "),'</p>\n                <p class="mylibrary__item-text-separator">|</p>\n                <p class="mylibrary__item-release-arye">').concat(c,'</p>\n                <div class="reting-wrapper">\n                    <p class="mylibrary__item-reting">').concat(o,"</p>\n                </div>\n            </div>\n            </div>\n        </li>")})).join("")):(l.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),void(c.style.height="100vh"))}s.addEventListener("click",(function(){d(),n.classList.add("inactive-btn"),n.classList.remove("active-btn"),s.classList.add("active-btn"),s.classList.remove("inactive-btn"),c.style.height="auto",l.insertAdjacentHTML("beforeend",m())})),n.addEventListener("click",(function(){d(),n.classList.add("active-btn"),n.classList.remove("inactive-btn"),s.classList.add("inactive-btn"),s.classList.remove("active-btn"),c.style.height="auto",l.insertAdjacentHTML("beforeend",function(){var e=JSON.parse(localStorage.getItem("queue"));if(!e)return l.classList.add("visually-hidden"),o.classList.remove("visually-hidden"),void(c.style.height="100vh");e&&(l.classList.remove("visually-hidden"),o.classList.add("visually-hidden"));return e.map((function(e){var t=e.poster_path,i=e.original_title,a=e.genres,n=e.release_date,s=e.vote_average,l=e.id,c=n.substring(0,4),o=Number(s).toFixed(1),d=[];a.map((function(e){return d.push(e.name)}));var m=(0,r.sliceGenres)(d),y="".concat("https://image.tmdb.org/t/p/original").concat(t);return null===t&&(y="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="mylibrary__item" data-id='.concat(l,'>\n            <div class="mylibrary__item-wrapper js-modal-trigger">\n                <img\n                class="mylibrary__item-img"\n                src="').concat(y,'"\n                alt="').concat(i,'"\n                loading=lazy\n            />\n            <h2 class="mylibrary__item-title js-modal-trigger">').concat(i,'</h2>\n            <div class="mylibrary__item-text-wrapper js-modal-trigger">\n                <p class="mylibrary__item-genres">').concat(m.join(", "),'</p>\n                <p class="mylibrary__item-text-separator">|</p>\n                <p class="mylibrary__item-release-arye">').concat(c,'</p>\n                <div class="reting-wrapper">\n                    <p class="mylibrary__item-reting">').concat(o,"</p>\n                </div>\n            </div>\n            </div>\n        </li>")})).join("")}())})),d(),n.classList.add("inactive-btn"),n.classList.remove("active-btn"),s.classList.add("active-btn"),s.classList.remove("inactive-btn"),c.style.height="auto",l.insertAdjacentHTML("beforeend",m()),a("62hKk"),a("9LWrY"),a("5N6jj"),a("69Wut"),a("4pmU7");var y=a("iSUmJ"),p=a("84aGp");a("5N6jj"),a("3DdUG"),a("99tBi"),p.refs.library.addEventListener("click",y.onFilmCardClick),a("b858O")}();
//# sourceMappingURL=myLibrary.78370eba.js.map
