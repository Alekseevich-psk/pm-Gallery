!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PmGallery=t():e.PmGallery=t()}(self,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>i});const i=function(){function e(e,t){this.activeClass="active",this.previewPictureEl=".pm-gallery__preview-picture",this.mainPictureEl=".pm-gallery__main-picture",this.init=!1,this.activeSlide=0,this.initGallery(e,t)}return e.prototype.initGallery=function(e,t){var i=this;this.hasElements(e,t)&&(this.initActiveSlide(t),function(e,t){var i,r,n=e.querySelector(".pm-gallery__inner--picture");if(n){n.insertAdjacentHTML("afterbegin",'    \n    <div class="pm-gallery__control">\n        <div class="pm-gallery__arrows">\n            <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>\n            <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>\n        </div>\n        <div class="pm-gallery__btn-size"></div>\n    </div>');var l=e.querySelector(".pm-gallery__control"),s=e.querySelector(".pm-gallery__btn-size");if(t.fullScreenMode||s.classList.add("hide"),s.addEventListener("click",(function(){if(e.classList.contains("full-screen"))return e.classList.remove("full-screen"),document.body.style.overflow="";e.classList.add("full-screen"),document.body.style.overflow="hidden"})),(null===(i=t.navigation)||void 0===i?void 0:i.elBtnPrev)&&(null===(r=t.navigation)||void 0===r?void 0:r.elBtnNext)){var a=document.querySelector(t.navigation.elBtnPrev),o=document.querySelector(t.navigation.elBtnNext);a&&a.addEventListener("click",(function(){return d("prev")})),o&&o.addEventListener("click",(function(){return d("next")})),l.classList.add("hide-arrows")}var c=e.querySelector(".pm-gallery__arrow--prev"),v=e.querySelector(".pm-gallery__arrow--next");c&&c.addEventListener("click",(function(){return d("prev")})),v&&v.addEventListener("click",(function(){return d("next")}))}function d(t){e.dispatchEvent(new CustomEvent("changeSlide",{detail:{btn:"prev"===t?"prev":"next"}}))}}(this.wrapper,t),function(e,t){t.orientationPreviews&&("horizontallyBottom"===t.orientationPreviews&&e.classList.add("horizontally-bottom"),"horizontallyTop"===t.orientationPreviews&&e.classList.add("horizontally-top"),"verticalRight"===t.orientationPreviews&&e.classList.add("vertical-right"))}(this.wrapper,t),function(e,t){var i=null,r=null;function n(t,i){Math.abs(t-i)<=100||e.dispatchEvent(new CustomEvent("changeSlide",{detail:{btn:t<i?"prev":"next"}}))}e.addEventListener("touchstart",(function(e){i=e.targetTouches[0].clientX})),e.addEventListener("touchend",(function(e){r=e.changedTouches[0].clientX,n(i,r)})),e.addEventListener("mousedown",(function(e){i=e.clientX})),e.addEventListener("mouseup",(function(e){r=e.clientX,n(i,r)}))}(this.wrapper),this.wrapper.addEventListener("changeSlide",(function(e){"prev"===e.detail.btn?i.prevSlide():i.nextSlide(),i.autoPlay(null)})),t.autoPlay&&this.autoPlay(t.autoPlay))},e.prototype.autoPlay=function(e){var t=this;if(null===e)return clearInterval(this.timerId);this.timerId=setInterval((function(){return t.nextSlide()}),e)},e.prototype.scrollWrapper=function(e,t){var i=this.previews[this.activeSlide];t.scrollTop=i.offsetHeight*(e-1)},e.prototype.prevSlide=function(){this.setActiveSlide(this.activeSlide,this.activeSlide-1),this.scrollWrapper(this.activeSlide,this.pmGalleryInnerPreviews)},e.prototype.nextSlide=function(){this.setActiveSlide(this.activeSlide,this.activeSlide+1),this.scrollWrapper(this.activeSlide,this.pmGalleryInnerPreviews)},e.prototype.initActiveSlide=function(e){e.activeSlide&&e.activeSlide<this.previews.length&&(this.activeSlide=e.activeSlide),this.previews[this.activeSlide].classList.add(this.activeClass),this.getActiveSlide(this.previews)},e.prototype.getActiveSlide=function(e){var t=this;e.forEach((function(e,i){e.addEventListener("click",(function(){t.setActiveSlide(t.activeSlide,i),t.autoPlay(null)}))}))},e.prototype.setActiveSlide=function(e,t){t<0&&(t=this.previews.length-1),t>this.previews.length-1&&(t=0);var i=this.previews[e],r=this.previews[t];i.classList.contains(this.activeClass)&&i.classList.remove(this.activeClass),r.classList.contains(this.activeClass)||r.classList.add(this.activeClass),this.activeSlide=t,this.onMainPicture(this.activeSlide)},e.prototype.onMainPicture=function(e){var t=this.previews[e].querySelector("img");this.mainPicture.src=t.src},e.prototype.hasElements=function(e,t){return this.wrapper=document.querySelector(e),null===this.wrapper?(console.error("Not found wrapper element"),!1):(t.elementForPreviews?this.previews=this.wrapper.querySelectorAll(t.elementForPreviews):this.previews=this.wrapper.querySelectorAll(this.previewPictureEl),0===this.previews.length?(console.error("Not found previews elements"),!1):(t.elementForMainPicture?this.mainPicture=this.wrapper.querySelector(t.elementForMainPicture):this.mainPicture=this.wrapper.querySelector(this.mainPictureEl),null===this.mainPicture?(console.error("Main picture not found"),!1):(this.pmGalleryInnerPreviews=this.wrapper.querySelector(".pm-gallery__inner--previews"),this.wrapper.classList.add("active-gallery"),this.init=!0,!0)))},e}();return t.default})()));