!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},i={},a=e.parcelRequire62cb;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in i){var a=i[e];delete i[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){i[e]=t},e.parcelRequire62cb=a),a("2p6Fd"),a("ewLqX"),a("225Hw"),a("4pmU7"),a("4pmU7"),a("5N6jj");a("7Q2m0"),a("225Hw");var r=a("8wgAC"),n=a("8RZ1j"),s=document.querySelector(".queue-btn"),l=document.querySelector(".watched-btn"),c=document.querySelector(".mylibrary__list"),o=document.querySelector(".mylibrary"),d=document.querySelector(".no-list");function m(){c.innerHTML=""}function p(){var e=JSON.parse(localStorage.getItem("watched"));return e&&0!==e.length?(e&&(c.classList.remove("visually-hidden"),d.classList.add("visually-hidden")),e.map((function(e){var t=e.poster_path,i=e.original_title,a=e.genres,n=e.release_date,s=e.vote_average,l=e.id,c=n.substring(0,4),o=Number(s).toFixed(1),d=[];a.map((function(e){return d.push(e.name)}));var m=(0,r.sliceGenres)(d),p="".concat("https://image.tmdb.org/t/p/original").concat(t);return null===t&&(p="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="mylibrary__item" data-id='.concat(l,'>\n            <div class="mylibrary__item-wrapper js-modal-trigger">\n                <img\n                class="mylibrary__item-img"\n                src="').concat(p,'"\n                alt="').concat(i,'"\n                loading=lazy\n            />\n            <h2 class="mylibrary__item-title js-modal-trigger">').concat(i,'</h2>\n            <div class="mylibrary__item-text-wrapper js-modal-trigger">\n                <p class="mylibrary__item-genres">').concat(m.join(", "),'</p>\n                <p class="mylibrary__item-text-separator">|</p>\n                <p class="mylibrary__item-release-arye">').concat(c,'</p>\n                <div class="reting-wrapper">\n                    <p class="mylibrary__item-reting">').concat(o,"</p>\n                </div>\n            </div>\n            </div>\n        </li>")})).join("")):(c.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),void(o.style.height="100vh"))}function v(e){return e.map((function(e){var t=e.poster_path,i=e.original_title,a=e.genres,n=e.release_date,s=e.vote_average,l=e.id,c=n.substring(0,4),o=Number(s).toFixed(1),d=[];a.map((function(e){return d.push(e.name)}));var m=(0,r.sliceGenres)(d),p="".concat("https://image.tmdb.org/t/p/original").concat(t);return null===t&&(p="https://i.postimg.cc/zG4yJ7P4/No-Image-Available.jpg"),'<li class="mylibrary__item" data-id='.concat(l,'>\n            <div class="mylibrary__item-wrapper js-modal-trigger">\n                <img\n                class="mylibrary__item-img"\n                src="').concat(p,'"\n                alt="').concat(i,'"\n                loading=lazy\n            />\n            <h2 class="mylibrary__item-title js-modal-trigger">').concat(i,'</h2>\n            <div class="mylibrary__item-text-wrapper js-modal-trigger">\n                <p class="mylibrary__item-genres">').concat(m.join(", "),'</p>\n                <p class="mylibrary__item-text-separator">|</p>\n                <p class="mylibrary__item-release-arye">').concat(c,'</p>\n                <div class="reting-wrapper">\n                    <p class="mylibrary__item-reting">').concat(o,"</p>\n                </div>\n            </div>\n            </div>\n        </li>")})).join("")}l.addEventListener("click",(function(){m(),s.classList.add("inactive-btn"),s.classList.remove("active-btn"),l.classList.add("active-btn"),l.classList.remove("inactive-btn"),o.style.height="auto",c.insertAdjacentHTML("beforeend",p())})),s.addEventListener("click",(function(){m(),s.classList.add("active-btn"),s.classList.remove("inactive-btn"),l.classList.add("inactive-btn"),l.classList.remove("active-btn"),o.style.height="auto",c.insertAdjacentHTML("beforeend",function(){var e=JSON.parse(localStorage.getItem("queue"));if(!e||0===e.length)return c.classList.add("visually-hidden"),d.classList.remove("visually-hidden"),void(o.style.height="100vh");e&&(c.classList.remove("visually-hidden"),d.classList.add("visually-hidden"));if(e.length>9)return cutMovies=e.slice(0,9),void v(cutMovies);return v(e)}())})),m(),s.classList.add("inactive-btn"),s.classList.remove("active-btn"),l.classList.add("active-btn"),l.classList.remove("inactive-btn"),o.style.height="auto",c.insertAdjacentHTML("beforeend",p()),(0,n.addBackToTop)({diameter:45,backgroundColor:"transparent",textColor:"#e5882c"}),a("62hKk"),a("9LWrY"),a("5N6jj"),a("69Wut"),a("4pmU7");var u=a("iSUmJ"),y=a("84aGp");a("5N6jj"),a("3DdUG"),a("99tBi"),y.refs.library.addEventListener("click",u.onFilmCardClick)}();
//# sourceMappingURL=myLibrary.b7b030eb.js.map
