!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PmGallery=t():e.PmGallery=t()}(self,(()=>(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>re});var n="pm-gallery";const i={wrapper:n+"__wrapper",overlay:n+"__overlay",inner:n+"__inner",innerPreviews:n+"__inner--previews",innerMainPicture:n+"__inner--main-picture",mainPicture:n+"__main-picture",track:n+"__track",preview:n+"__preview",previewPicture:n+"__preview-picture",controls:n+"__controls",btnScreen:n+"__btn-screen",btnArrows:n+"__arrows",btnArrow:n+"__arrow",btnPrev:n+"__arrow--prev",btnNext:n+"__arrow--next",pagination:n+"__pagination",paginationList:n+"__pagination-list",paginationItem:n+"__pagination-item",preloader:n+"__preloader",paginationItemActive:"active",previewActive:"active",overflow:"overflow",horizontal:"horizontal",vertical:"vertical",fullScreen:"fullscreen",posPreviewsTop:"top",posPreviewsBottom:"bottom",posPreviewsLeft:"left",posPreviewsRight:"right",countPreSlidesAuto:"auto",disabled:"disabled"},r=function(e){e.classList.contains(i.preloader)||e.classList.add(i.preloader)};function o(e){var t={},n=function(e){if("object"==typeof e)return e||console.error("Element is not found"),e;var t=document.querySelector(e);return t||console.error(e+" - element is not found"),t}(e),o=function(e){if(e){var t=e.querySelectorAll("img"),n=[];return t&&0!==t.length||console.error("Preview elements is not found"),t.forEach((function(e){var t=new Object;t.src=e.src,t.dataSrc=e.getAttribute("data-src"),t.alt=e.alt,n.push(t)})),e.innerHTML="",n}}(n);if(n&&0!==o.length)return r(n),t.gallery=n,t.wrapper=function(e){var t='\n        <div class="'.concat(i.wrapper,'">\n            <div class="').concat(i.overlay,'"></div>\n        </div>');return e.insertAdjacentHTML("afterbegin",t),e.querySelector("."+i.wrapper)}(n),t.innerPreviews=function(e){var t='<div class="'.concat(i.inner," ").concat(i.innerPreviews,'"></div>');return e.querySelector("."+i.wrapper).insertAdjacentHTML("beforeend",t),e.querySelector("."+i.innerPreviews)}(n),t.innerPicture=function(e){var t='<div class="'.concat(i.inner," ").concat(i.innerMainPicture,'"></div>');return e.querySelector("."+i.wrapper).insertAdjacentHTML("beforeend",t),e.querySelector("."+i.innerMainPicture)}(n),t.track=function(e){var t=e.querySelector("."+i.innerPreviews),n='<div class="'.concat(i.track,'"></div>');return t.insertAdjacentHTML("beforeend",n),t.querySelector("."+i.track)}(n),t.previews=function(e,t){for(var n=e.querySelector("."+i.track),r=function(e,t){return'<div class="'.concat(i.preview).concat(0===t?" active":"",'">\n                    <img src="').concat(e.src,'"')+(e.dataSrc?'data-src="'.concat(e.dataSrc,'"'):"")+'class="'.concat(i.previewPicture,'" alt="').concat(e.alt,'"></div>')},o=0;o<t.length;o++)n.insertAdjacentHTML("beforeend",r(t[o],o));return n.querySelectorAll("."+i.preview)}(n,o),t.mainPicture=function(e,t){var n=e.querySelector("."+i.innerMainPicture),r=t[0],o=r.dataSrc?r.dataSrc:r.src,a='<img src="'.concat(o,'" class="').concat(i.mainPicture,'" alt="').concat(r.alt,'">');return n.insertAdjacentHTML("beforeend",a),e.querySelector("."+i.mainPicture)}(n,o),t.controls=function(e){var t='<div class="'.concat(i.controls,'"></div>');return e.querySelector("."+i.innerMainPicture).insertAdjacentHTML("beforeend",t),e.querySelector("."+i.controls)}(n),t.btnScreen=function(e){var t='<div class="'.concat(i.btnScreen,'"></div>');return e.querySelector("."+i.controls).insertAdjacentHTML("beforeend",t),e.querySelector("."+i.btnScreen)}(n),t.pagination=function(e){var t="\n            <div class=".concat(i.pagination,">\n                <ul class=").concat(i.paginationList,">\n                </ul>\n            </div>");return e.querySelector("."+i.innerMainPicture).insertAdjacentHTML("beforeend",t),e.querySelector("."+i.pagination)}(n),t.paginationItems=function(e,t){for(var n=e.querySelector("."+i.paginationList),r="<li class=".concat(i.paginationItem,"></li>"),o=0;o<t.length;o++)n.insertAdjacentHTML("beforeend",r);return e.querySelectorAll("."+i.paginationItem)}(n,o),t.arrowsSlider=function(e){var t={},n='\n                <div class="'.concat(i.btnArrows,'">\n                    <div class="').concat(i.btnArrow," ").concat(i.btnPrev,'"></div>\n                    <div class="').concat(i.btnArrow," ").concat(i.btnNext,'"></div>\n                </div>');return e.querySelector("."+i.controls).insertAdjacentHTML("beforeend",n),t.arrowsSlider=e.querySelector("."+i.btnArrows),t.defBtnPrev=e.querySelector("."+i.btnPrev),t.defBtnNext=e.querySelector("."+i.btnNext),t}(n),t.previewsSrc=o,t}const a=function(e){var t=e.track,n=e.initOptions.speedAnimScroll,r=e.countHideSlides,o=e.activeIndex,a=0;e.posPreviews==i.vertical&&(a=e.previewHeight),e.posPreviews==i.horizontal&&(a=e.previewWidth);var s=o*a;if(0!==r)return o>1&&(s-=a),1===o&&(s=0),s>=r*a&&(e.posPreviews==i.vertical&&(s=e.trackHeight-e.wrapperHeight),e.posPreviews==i.horizontal&&(s=e.trackWidth-e.wrapperWidth)),e.posPreviews==i.vertical&&(t.style.transitionDuration=n+"ms",t.style.transform="translate(0, ".concat(-1*s+"px",")")),e.posPreviews==i.horizontal&&(t.style.transitionDuration=n+"ms",t.style.transform="translate(".concat(-1*s+"px",", 0)")),setTimeout((function(){t.style.transitionDuration="0ms"}),n),s};var s=["fade","fadeInLeft","fadeInRight","fadeInUp","flipInX","flipInY","zoomIn","slideInRight","slideInLeft"];const c=function(e){e.classList.contains(i.preloader)&&setTimeout((function(){e.classList.remove(i.preloader)}),300)},l=function(e,t){var n=e.previewsSrc,i=0;new Promise((function(o,a){if(n[t].dataSrc){var s=new Image;s.src=n[t].dataSrc,s.addEventListener("load",(function(){o(s.src)})),i=setTimeout((function(){r(e.innerPicture)}),300)}})).then((function(t){clearInterval(i),c(e.innerPicture)}),(function(e){console.error(e)}))},u=function(e,t){var n=e.mainPicture,i=e.previews[t].querySelector("img"),r=i.src,o=i.getAttribute("data-src");l(e,t),n.src=o||r,function(e,t){var n=e.mainPicture,i=e.initOptions.animSlide;s.includes(i)&&(n.classList.add(i),setTimeout((function(){n.classList.remove(i)}),500))}(e)},d=function(e,t){var n=e.paginationItems;n[e.activeIndex].classList.remove(i.paginationItemActive),n[t].classList.add(i.paginationItemActive)},p=function(e,t){e.wrapper.dispatchEvent(new CustomEvent("changeIndex",{detail:{activeIndex:t}}))},v=function(e){var t=e.initOptions.loop,n=e.countSlides,i=e.activeIndex;++i<=n-1&&p(e,i),t&&i===n&&p(e,i=0)},f=function(e,t){var n=e.initOptions.loop,i=e.countSlides-1;return e.autoPlayTimerId=setTimeout((function(){v(e),n||e.activeIndex!==i||clearTimeout(e.autoPlayTimerId)}),t),{autoPlayTimerId:e.autoPlayTimerId}},w=function(e){var t=e.initOptions.autoPlay;if(t)return"number"!=typeof t?console.error('The "autoPlay" option must have the type === number'):e.autoPlayTimerId?(clearTimeout(e.autoPlayTimerId),f(e,t)):f(e,t)};var h=function(e,t,n){if(n||2===arguments.length)for(var i,r=0,o=t.length;r<o;r++)!i&&r in t||(i||(i=Array.prototype.slice.call(t,0,r)),i[r]=t[r]);return e.concat(i||Array.prototype.slice.call(t))};const y=function(e,t){var n,r;if(!e.initOptions.loop){var o=[],a=[];(null===(n=e.userControls)||void 0===n?void 0:n.btnPrev)&&o.push(e.userControls.btnPrev),(null===(r=e.userControls)||void 0===r?void 0:r.btnNext)&&o.push(e.userControls.btnNext),o.push(e.arrowsSlider.defBtnPrev),a.push(e.arrowsSlider.defBtnNext);var s=h(h([],o,!0),a,!0),c=i.disabled;t>0&&t<e.countSlides-1&&s.forEach((function(e){e&&e.classList.contains(c)&&e.classList.remove(c)})),0===t&&o.forEach((function(e){e&&!e.classList.contains(c)&&e.classList.add(c)})),t===e.countSlides-1&&a.forEach((function(e){e&&!e.classList.contains(c)&&e.classList.add(c)}))}},g=function(e){e.wrapper.addEventListener("changeIndex",(function(t){w(e),y(e,t.detail.activeIndex),function(e,t){var n=e.previews;n[e.activeIndex].classList.remove(i.previewActive),n[t].classList.add(i.previewActive)}(e,t.detail.activeIndex),d(e,t.detail.activeIndex),u(e,t.detail.activeIndex),e.activeIndex=t.detail.activeIndex,a(e)}))},m=function(e){e.trackWidth<e.wrapperWidth&&e.trackHeight<e.wrapperHeight&&(e.track.style.transform="translate(0, 0)")},P=function(e){var t=new Object;return t.width=Math.round(e.getBoundingClientRect().width),t.height=Math.round(e.getBoundingClientRect().height),t};var b={previewWidth:0,previewHeight:0,trackWidth:0,trackHeight:0,countSlides:0,countHideSlides:0,wrapperHeight:0,wrapperWidth:0,innerPreviewsHeight:0,innerPreviewsWidth:0,hideTrackLength:0,spaceBetween:0};const S=function(e){var t=e.initOptions,n=e.previews,r=e.posPreviews,o=e.initOptions.spaceBetween,a=n.length,s=P(e.wrapper),c=r===i.vertical,l=o*(a-1),u=t.countPreSlides,d=t.previewHeight,p=t.previewWidth;if("number"==typeof u){var v=o*(u-1);c?d=Math.abs(s.height-v)/u:p=Math.abs(s.width-v)/u}if(b.innerPreviewsHeight=c?s.height:t.previewHeight,b.innerPreviewsWidth=c?t.previewWidth:s.width,b.trackWidth=c?p:a*p+l,b.trackHeight=c?a*d+l:d,b.hideTrackLength=c?b.trackHeight-s.height:b.trackWidth-s.width,b.countSlides=a,b.wrapperHeight=s.height,b.wrapperWidth=s.width,b.previewWidth=p,b.previewHeight=d,b.spaceBetween=o,b.hideTrackLength>0){var f=c?d:p;b.countHideSlides=Math.ceil(b.hideTrackLength/(f+o))}else b.countHideSlides=0;return b},L=function(e){var t=e.initOptions.positionPreviews,n={posPreviews:i.vertical};return t?(t!==i.posPreviewsLeft&&t!==i.posPreviewsRight||(n.posPreviews=i.vertical),t!==i.posPreviewsTop&&t!==i.posPreviewsBottom||(n.posPreviews=i.horizontal),n):n},x=function(e,t){var n=P(e.wrapper),r=e.innerPreviews,o=e.innerPicture,a=e.track,s=e.fullScreen?e.spaceBetween:0;r.style.display="block",t===i.posPreviewsLeft&&(r.style.left=0+s+"px",r.style.right="auto",o.style.left=e.previewWidth+e.spaceBetween+s+"px",o.style.right="auto"),t===i.posPreviewsRight&&(r.style.left="auto",r.style.right=0+s+"px",o.style.left=0,o.style.right="auto"),r.style.top="0",r.style.bottom="auto",r.style.width=e.previewWidth+"px",r.style.height=n.height+"px",o.style.top=0,o.style.bottom="auto",o.style.width=n.width-e.previewWidth-e.spaceBetween-s+"px",o.style.height=n.height+"px",a.className="",a.classList.add(i.track),a.classList.add(i.vertical)},k=function(e,t){var n=P(e.wrapper),r=e.innerPreviews,o=e.innerPicture,a=e.track,s=e.fullScreen?e.spaceBetween:0;r.style.display="block",t===i.posPreviewsTop&&(r.style.top=0+s+"px",r.style.bottom="auto",o.style.top=e.previewHeight+e.spaceBetween+s+"px",o.style.bottom=0),t===i.posPreviewsBottom&&(r.style.top="auto",r.style.bottom=0+s+"px",o.style.top=0,o.style.bottom="auto"),r.style.left=0,r.style.right="auto",r.style.width="100%",r.style.height=e.previewHeight+"px",o.style.left=0,o.style.right="auto",o.style.width="100%",o.style.height=n.height-e.previewHeight-e.spaceBetween-s+"px",a.className="",a.classList.add(i.track),a.classList.add(i.horizontal)},I=function(e,t){if(void 0===t&&(t=e.initOptions.positionPreviews),e.initOptions.visiblePreviews)switch(t){case i.posPreviewsLeft:x(e,i.posPreviewsLeft);break;case i.posPreviewsRight:x(e,i.posPreviewsRight);break;case i.posPreviewsTop:k(e,i.posPreviewsTop);break;case i.posPreviewsBottom:k(e,i.posPreviewsBottom);break;default:x(e,i.posPreviewsLeft)}else!function(e){var t=e.innerPreviews,n=e.innerPicture,i=e.track;t.style.display="none",n.style.width="100%",n.style.height="100%",t.style.top=0,t.style.bottom=0,n.style.left=0,n.style.right=0,i.className=""}(e)},E=function(e){for(var t=e.previews,n=0;n<t.length;n++){var r=t[n];if(r.style.height=e.previewHeight+"px",r.style.width=e.previewWidth+"px",n===t.length-1)return r.style.marginRight="",r.style.marginBottom="";e.posPreviews===i.vertical?(r.style.marginBottom=e.spaceBetween+"px",r.style.marginRight=""):(r.style.marginRight=e.spaceBetween+"px",r.style.marginBottom="")}},T=function(e){var t=e.initOptions.onCenterPreviews,n=e.track;if(n.style.justifyContent="",t){var r=e.posPreviews===i.horizontal;!(e.countHideSlides>0)&&r&&(n.style.justifyContent="center")}},H=function(e){[L,S,m,E,I,T].forEach((function(t){Object.assign(e,t(e))}))},O={activeIndex:0,visiblePreviews:!0,positionPreviews:i.posPreviewsLeft,spaceBetween:8,borderRadius:4,countPreSlides:4,previewHeight:100,previewWidth:100,autoPlay:!1,objectFitPicture:"cover",swipeSlider:!0,pagination:!1,loop:!1,speedAnimScroll:300,onCenterPreviews:!0,fullScreen:{onCenterPreviews:!0,pagination:!0,speedAnimScroll:300,fullScreen:!0,visiblePreviews:!1,previewHeight:60,previewWidth:100,spaceBetween:8,countPreSlides:"none",positionPreviews:i.posPreviewsBottom}},_=function(e){e.fullScreen?e.initOptions=Object.assign({},O.fullScreen,e.options.fullScreen):e.initOptions=Object.assign({},O,e.options),function(e){var t=document.documentElement.clientWidth,n=e.initOptions.breakpoints;if(n)for(var i=0,r=Object.keys(n);i<r.length;i++){var o=r[i];Number(o)<=t&&Object.assign(e.initOptions,n[o])}}(e)},A=function(e){window.addEventListener("resize",(function(){_(e),H(e)}))},B=function(e){var t=e.initOptions.pagination,n=e.pagination.classList.contains("hide");t?(n&&e.pagination.classList.remove("hide"),d(e,e.activeIndex)):n||e.pagination.classList.add("hide")},j=function(e){var t=e.initOptions.borderRadius;t&&"number"==typeof t&&e.wrapper.style.setProperty("--border-radius",t+"px")};var q=["fill","contain","cover","scaleDown","none"];const M=function(e){var t=e.initOptions.objectFitPicture;if(t&&"string"==typeof t){var n=e.mainPicture;q.includes(t)&&!n.classList.contains(t)&&n.classList.add(t)}},W=function(e){[j,M].forEach((function(t){t(e)}))},N=function(e){var t=e.initOptions.fullScreen,n=e.pagination.classList.contains("hide");t?n&&e.btnScreen.classList.remove("hide"):n||e.btnScreen.classList.add("hide")},C=function(e){[W,B,w,N].forEach((function(t){e=Object.assign(e,t(e))}))},z=function(e){e.wrapper.addEventListener("fullScreen",(function(){_(e),H(e),C(e)}))},R=function(e){var t=e.initOptions.loop,n=e.countSlides,i=e.activeIndex;--i>=0&&p(e,i),t&&i<0&&p(e,i=n-1)},G=function(e){e.arrowsSlider.defBtnPrev.addEventListener("click",(function(){R(e)})),e.arrowsSlider.defBtnNext.addEventListener("click",(function(){v(e)}))},D=function(e){for(var t=e.previews,n=function(n){t[n].addEventListener("click",(function(){p(e,n)}))},i=0;i<t.length;i++)n(i)},F=function(e){var t=document.querySelector("body"),n=e.wrapper;e.fullScreen=!e.fullScreen,n.classList.toggle(i.fullScreen),t.classList.toggle(i.overflow),function(e,t){e.wrapper.dispatchEvent(new CustomEvent("fullScreen",{detail:{fullScreen:t}}))}(e,e.fullScreen)},X=function(e){e.btnScreen.addEventListener("click",(function(){F(e)}))},Y=function(e){for(var t=e.paginationItems,n=function(n){t[n].addEventListener("click",(function(){p(e,n)}))},i=0;i<t.length;i++)n(i)},Z=function(e){e.initOptions.swipeSlider&&[e.arrowsSlider.arrowsSlider,e.mainPicture].forEach((function(t){!function(e,t){t.addEventListener("pointerdown",(function(n){var i=n.clientX;t.addEventListener("pointerup",(function n(r){var o=r.clientX;i<o&&R(e),i>o&&v(e),t.removeEventListener("pointerup",n)}))})),t.ondragstart=function(){return!1},t.onselectstart=function(){return!1}}(e,t)}))},U=function(e){if(e.userControls){var t=e.userControls.btnPrev,n=e.userControls.btnNext,i=e.userControls.btnScreen;t&&t.addEventListener("click",(function(){R(e)})),n&&n.addEventListener("click",(function(){v(e)})),i&&i.addEventListener("click",(function(){F(e)}))}},J=function(e){(function(e){var t=e.previewsSrc,n=[];t.forEach((function(e){n.push(new Promise((function(t,n){var i=new Image;i.src=e.src,i.addEventListener("load",(function(){t(i.src)}))})))})),Promise.all(n).then((function(t){c(e.gallery)}),(function(e){console.error(e)}))})(e),l(e,e.initOptions.activeIndex)},K=function(e){e.wrapper.addEventListener("initGallery",(function(){J(e)}))},Q=function(e){document.addEventListener("keydown",(function(t){"Escape"===t.key&&e.fullScreen&&F(e)}))},V=function(e){return[G,D,X,Y,U,g,z,A,K,Q,Z].forEach((function(t){t(e)})),{activeIndex:0}},$=function(e){var t=e.innerPreviews,n=e.track,r=0,o=e.hideTrackLength,a=0;window.addEventListener("resize",(function(){o=e.hideTrackLength,r=0,n.style.transform="translate(0, 0)"})),e.wrapper.addEventListener("changeIndex",(function(t){if(""!==n.style.transform){var o=n.style.transform;e.posPreviews==i.vertical&&(r=Number(o.replace(/[A-Za-z(),]/g,"").split(" ")[1])),e.posPreviews==i.horizontal&&(r=Number(o.replace(/[A-Za-z(),]/g,"").split(" ")[0]))}})),e.wrapper.addEventListener("fullScreen",(function(t){if(a=o/e.hideTrackLength,r=Math.round(r/a),o=e.hideTrackLength,e.hideTrackLength<0)return n.style.transform="translate(0, 0)";e.posPreviews==i.vertical&&(n.style.transform="translate(0, ".concat(r+"px",")")),e.posPreviews==i.horizontal&&(n.style.transform="translate(".concat(r+"px",", 0)"))})),t.addEventListener("wheel",(function(t){if(t.preventDefault(),o<0)return n.style.transform="translate(0, 0)";t.wheelDeltaY<0?r-=30:r+=30,r>0&&(r=0),Math.abs(r)>=o&&(r=-1*o),e.posPreviews==i.vertical&&(n.style.transform="translate(0, ".concat(r+"px",")")),e.posPreviews==i.horizontal&&(n.style.transform="translate(".concat(r+"px",", 0)"))}))},ee=function(e){[$,a].forEach((function(t){t(e)}))},te=function(e){[H,ee].forEach((function(t){e=Object.assign(e,t(e))}))},ne=function(e){(function(e){var t=e.initOptions.controls;if(t){var n={},i=document.querySelector(t.btnPrev),r=document.querySelector(t.btnNext),o=document.querySelector(t.btnFullScreen);i&&(e.arrowsSlider.defBtnPrev&&e.arrowsSlider.defBtnPrev.classList.add("user-hide"),n.btnPrev=i),r&&(e.arrowsSlider.defBtnNext&&e.arrowsSlider.defBtnNext.classList.add("user-hide"),n.btnNext=r),o&&(e.btnScreen&&e.btnScreen.classList.add("user-hide"),n.btnScreen=o),e.userControls=n}})(e),y(e,e.activeIndex)},ie=function(e){[_,J,ne].forEach((function(t){e=Object.assign(e,t(e))}))},re=function(){function e(e,t){this.on=function(e,t){var n=this.pmGallery.wrapper;n&&n.addEventListener(e,t)},this.options=t,this.init(e)}return e.prototype.init=function(e){var t=this,n=o(e);n&&(this.pmGallery=Object.assign({},this,n),[ie,V,te,C].forEach((function(e){t.pmGallery=Object.assign(t.pmGallery,e(t.pmGallery))})))},e}();return t.default})()));