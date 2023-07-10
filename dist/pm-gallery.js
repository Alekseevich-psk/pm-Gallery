!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PmGallery=t():e.PmGallery=t()}(self,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var n in i)e.o(i,n)&&!e.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:i[n]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>i});const i=function(){function e(e,t){this.activeClass="active",this.init=!1,this.activeSlide=0,this.pmGalleryWrapperEl=".pm-gallery__wrapper",this.pmGalleryInnerPictureEl=".pm-gallery__inner--picture",this.pmGalleryInnerPreviewsEl=".pm-gallery__inner--previews",this.previewPictureEl=".pm-gallery__preview-picture",this.mainPictureEl=".pm-gallery__main-picture",this.previewsElementsArraySrcImg=[],this.flagPagination=!1,this.initGallery(e,t)}return e.prototype.initGallery=function(e,t){var i=this;this.hasElements(e,t)&&(this.initActiveSlide(t),function(e,t){var i,n,r=e.querySelector(".pm-gallery__inner--picture");if(r){r.insertAdjacentHTML("afterbegin",'    \n    <div class="pm-gallery__control">\n        <div class="pm-gallery__arrows">\n            <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>\n            <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>\n        </div>\n        <div class="pm-gallery__btn-size"></div>\n    </div>');var l=e.querySelector(".pm-gallery__control"),s=e.querySelector(".pm-gallery__btn-size");if(t.fullScreenMode||s.classList.add("hide"),s.addEventListener("click",(function(){if(e.classList.contains("full-screen"))return v();e.classList.add("full-screen"),document.body.style.overflow="hidden"})),window.addEventListener("keydown",(function(e){"Escape"===e.key&&v()})),(null===(i=t.navigation)||void 0===i?void 0:i.elBtnPrev)&&(null===(n=t.navigation)||void 0===n?void 0:n.elBtnNext)){var a=document.querySelector(t.navigation.elBtnPrev),o=document.querySelector(t.navigation.elBtnNext);a&&a.addEventListener("click",(function(){return d("prev")})),o&&o.addEventListener("click",(function(){return d("next")})),l.classList.add("hide-arrows")}var c=e.querySelector(".pm-gallery__arrow--prev"),p=e.querySelector(".pm-gallery__arrow--next");c&&c.addEventListener("click",(function(){return d("prev")})),p&&p.addEventListener("click",(function(){return d("next")}))}function d(t){e.dispatchEvent(new CustomEvent("changeSlide",{detail:{btn:"prev"===t?"prev":"next"}}))}function v(){if(e.classList.contains("full-screen"))return e.classList.remove("full-screen"),document.body.style.overflow=""}}(this.wrapper,t),function(e,t){t.positionPreviews&&("horizontalBottom"===t.positionPreviews&&e.classList.add("horizontal-bottom"),"horizontalTop"===t.positionPreviews&&e.classList.add("horizontal-top"),"verticalRight"===t.positionPreviews&&e.classList.add("vertical-right"))}(this.wrapper,t),function(e,t){var i=null,n=null;function r(t,i){Math.abs(t-i)<=100||e.dispatchEvent(new CustomEvent("changeSlide",{detail:{btn:t<i?"prev":"next"}}))}e.addEventListener("touchstart",(function(e){i=e.targetTouches[0].clientX})),e.addEventListener("touchend",(function(e){n=e.changedTouches[0].clientX,r(i,n)})),e.addEventListener("mousedown",(function(e){i=e.clientX})),e.addEventListener("mouseup",(function(e){n=e.clientX,r(i,n)}))}(this.wrapper),this.wrapper.addEventListener("changeSlide",(function(e){"prev"===e.detail.btn?i.prevSlide():i.nextSlide(),i.autoPlay(null)})),this.pmGalleryInnerPicture.addEventListener("changeSlide",(function(e){i.setActiveSlide(i.activeSlide,e.detail.activeSlide),i.autoPlay(null)})),t.autoPlay&&this.autoPlay(t.autoPlay),t.objectFit&&function(e,t){t.objectFit&&function(e){for(var t=["cover","contain","fill","none","scaleDown"],i=0;i<t.length;i++)if(t[i]===e)return!0}(t.objectFit)?e.querySelector(".pm-gallery__main-picture").classList.add(t.objectFit):console.error('Unknown value "objectFit": '.concat(t.objectFit))}(this.wrapper,t))},e.prototype.autoPlay=function(e){var t=this;if(null===e)return clearInterval(this.timerId);this.timerId=setInterval((function(){return t.nextSlide()}),e)},e.prototype.scrollWrapper=function(e,t){var i=this.previewsElements[this.activeSlide];t.scrollTop=i.offsetHeight*(e-1)},e.prototype.prevSlide=function(){this.setActiveSlide(this.activeSlide,this.activeSlide-1)},e.prototype.nextSlide=function(){this.setActiveSlide(this.activeSlide,this.activeSlide+1)},e.prototype.initActiveSlide=function(e){e.activeSlide&&e.activeSlide<this.previewsElements.length&&(this.activeSlide=e.activeSlide),this.previewsElements[this.activeSlide].classList.add(this.activeClass),this.getActiveSlide(this.previewsElements),this.onMainPicture(this.activeSlide)},e.prototype.getActiveSlide=function(e){var t=this;e.forEach((function(e,i){e.addEventListener("click",(function(){t.setActiveSlide(t.activeSlide,i),t.autoPlay(null)}))}))},e.prototype.setActiveSlide=function(e,t){t<0&&(t=this.previewsElements.length-1),t>this.previewsElements.length-1&&(t=0);var i=this.previewsElements[e],n=this.previewsElements[t];this.flagPagination&&(this.paginationItems[e].classList.remove(this.activeClass),this.paginationItems[t].classList.add(this.activeClass)),i.classList.contains(this.activeClass)&&i.classList.remove(this.activeClass),n.classList.contains(this.activeClass)||n.classList.add(this.activeClass),this.activeSlide=t,this.onMainPicture(this.activeSlide),this.scrollWrapper(this.activeSlide,this.pmGalleryInnerPreviews)},e.prototype.onMainPicture=function(e){this.mainPicture.src=this.previewsElementsArraySrcImg[e],this.mainPicture.style.animation="none",this.mainPicture.offsetHeight,this.mainPicture.style.animation=null},e.prototype.hasElements=function(e,t){var i=this;return this.wrapper=document.querySelector(e),this.pmGalleryWrapper=this.wrapper.querySelector(this.pmGalleryWrapperEl),null===this.wrapper?(console.error("Not found wrapper element"),!1):null===this.pmGalleryWrapper?(console.error('Not found ".main__wrapper" element'),!1):(t.elementForPreviews?this.previewsElements=this.wrapper.querySelectorAll(t.elementForPreviews):this.previewsElements=this.wrapper.querySelectorAll(this.previewPictureEl),0===this.previewsElements.length?(console.error("Not found previews elements"),!1):(this.previewsElements.forEach((function(e){return i.previewsElementsArraySrcImg.push(e.querySelector("img").src)})),this.pmGalleryInnerPicture=this.wrapper.querySelector(this.pmGalleryInnerPictureEl),this.pmGalleryInnerPreviews=this.wrapper.querySelector(this.pmGalleryInnerPreviewsEl),function(e,t,i){var n=e.querySelector(".pm-gallery__inner--picture");if(n){var r=i.animationSlide&&"none"!==i.animationSlide?i.animationSlide:"",l=t.substring(1),s='<img src="./" class="'.concat(l," ").concat(r,' animation-slide" alt="">');n.insertAdjacentHTML("afterbegin",s)}}(this.wrapper,this.mainPictureEl,t),this.mainPicture=this.wrapper.querySelector(this.mainPictureEl),t.pagination&&(this.paginationItems=function(e,t,i){void 0===i&&(i=0),e.insertAdjacentHTML("afterbegin",'<div class="pm-gallery__pagination pagination"><ul class="pagination__list"></ul></div>');for(var n=e.querySelector(".pagination__list"),r=0;r<t;r++)n.insertAdjacentHTML("afterbegin",'<li class="pagination__item"></li>');var l=e.querySelectorAll(".pagination__item");return l[i].classList.add("active"),l.forEach((function(t,i){t.addEventListener("click",(function(){e.dispatchEvent(new CustomEvent("changeSlide",{detail:{activeSlide:i}}))}))})),l}(this.pmGalleryInnerPicture,this.previewsElements.length,t.activeSlide),this.flagPagination=!0),this.wrapper.classList.add("active-gallery"),this.init=!0))},e}();return t.default})()));