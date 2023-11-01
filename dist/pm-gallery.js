!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.PmGallery=t():e.PmGallery=t()}(self,(()=>(()=>{"use strict";var e={d:(t,i)=>{for(var r in i)e.o(i,r)&&!e.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:i[r]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)},t={};e.d(t,{default:()=>M});var i="pm-gallery";const r={wrapper:i+"__wrapper",overlay:i+"__overlay",inner:i+"__inner",innerPreviews:i+"__inner--previews",innerMainPicture:i+"__inner--main-picture",mainPicture:i+"__main-picture",track:i+"__track",preview:i+"__preview",previewPicture:i+"__preview-picture",controls:i+"__controls",btnScreen:i+"__btn-screen",btnArrows:i+"__arrows",btnArrow:i+"__arrow",btnPrev:i+"__arrow--prev",btnNext:i+"__arrow--next",previewActive:"active",overflow:"overflow",horizontal:"horizontal",vertical:"vertical",fullScreen:"fullscreen",posPreviewsTop:"top",posPreviewsBottom:"bottom",posPreviewsLeft:"left",posPreviewsRight:"right",countPreSlidesAuto:"auto",disabled:"disabled"};function n(e){var t={},i=function(e){var t=document.querySelector(e);return t||console.error(e+" - element is not found"),t}(e),n=function(e){if(e){var t=e.querySelectorAll("img"),i=[];return t&&0!==t.length||console.error("Preview elements is not found"),t.forEach((function(e){var t=new Object;t.src=e.src,t.dataSrc=e.getAttribute("data-src"),t.alt=e.alt,i.push(t)})),e.innerHTML="",i}}(i);if(i&&0!==n.length)return t.wrapper=function(e){var t='\n        <div class="'.concat(r.wrapper,'">\n            <div class="').concat(r.overlay,'"></div>\n        </div>');return e.insertAdjacentHTML("afterbegin",t),e.querySelector("."+r.wrapper)}(i),t.innerPreviews=function(e){var t='<div class="'.concat(r.inner," ").concat(r.innerPreviews,'"></div>');return e.querySelector("."+r.wrapper).insertAdjacentHTML("beforeend",t),e.querySelector("."+r.innerPreviews)}(i),t.innerPicture=function(e){var t='<div class="'.concat(r.inner," ").concat(r.innerMainPicture,'"></div>');return e.querySelector("."+r.wrapper).insertAdjacentHTML("beforeend",t),e.querySelector("."+r.innerMainPicture)}(i),t.track=function(e){var t=e.querySelector("."+r.innerPreviews),i='<div class="'.concat(r.track,'"></div>');return t.insertAdjacentHTML("beforeend",i),t.querySelector("."+r.track)}(i),t.previews=function(e,t){for(var i=e.querySelector("."+r.track),n=function(e,t){return'\n        <div class="'.concat(r.preview).concat(0===t?" active":"",'">\n            <img src="').concat(e.src,'" class="').concat(r.previewPicture,'" alt="').concat(e.alt,'">\n        </div>')},s=0;s<t.length;s++)i.insertAdjacentHTML("beforeend",n(t[s],s));return i.querySelectorAll("."+r.preview)}(i,n),t.mainPicture=function(e,t){var i=e.querySelector("."+r.innerMainPicture),n=t[0],s='\n        <img src="'.concat(n.src,'" class="').concat(r.mainPicture,'" data-src="').concat(n.dataSrc,'" alt="').concat(n.alt,'">\n    ');return i.insertAdjacentHTML("beforeend",s),e.querySelector("."+r.mainPicture)}(i,n),t.controls=function(e){var t='<div class="'.concat(r.controls,'"></div>');return e.querySelector("."+r.innerMainPicture).insertAdjacentHTML("beforeend",t),e.querySelector("."+r.controls)}(i),t.btnScreen=function(e){var t='<div class="'.concat(r.btnScreen,'"></div>');return e.querySelector("."+r.controls).insertAdjacentHTML("beforeend",t),e.querySelector("."+r.btnScreen)}(i),t.arrowsSlider=function(e){var t={},i='\n                <div class="'.concat(r.btnArrows,'">\n                    <div class="').concat(r.btnArrow," ").concat(r.btnPrev,'"></div>\n                    <div class="').concat(r.btnArrow," ").concat(r.btnNext,'"></div>\n                </div>');return e.querySelector("."+r.controls).insertAdjacentHTML("beforeend",i),t.arrowsSlider=e.querySelector("."+r.btnArrows),t.defBtnPrev=e.querySelector("."+r.btnPrev),t.defBtnNext=e.querySelector("."+r.btnNext),t}(i),t}const s={visiblePreviews:!1,spaceBetween:10,borderRadius:4,breakpoints:{320:{slideHeight:60,slideWidth:60,countPreSlides:3.6,speedAnim:300,positionPreviews:r.posPreviewsBottom,fullScreen:!1,visiblePreviews:!0},768:{slideHeight:60,slideWidth:80,countPreSlides:4,fullScreen:!0,positionPreviews:r.posPreviewsLeft,visiblePreviews:!0},1024:{slideHeight:100,slideWidth:82,countPreSlides:4}},fullScreen:{visiblePreviews:!0,speedAnim:300,animSlide:"none",breakpoints:{320:{positionPreviews:r.posPreviewsBottom,slideHeight:80,slideWidth:80,countPreSlides:3.4},960:{slideHeight:100,slideWidth:160,countPreSlides:8}}}},o=function(e){e.initOptions=Object.assign({},e.options),e.fullScreen&&(e.initOptions=Object.assign({},e.initOptions.fullScreen));for(var t=document.documentElement.clientWidth,i=e.initOptions.breakpoints,r=0,n=Object.keys(i);r<n.length;r++){var s=n[r];Number(s)<=t&&(e.initOptions=Object.assign(e.initOptions,i[s]))}},c=function(e){var t=e.track,i=e.initOptions.speedAnim,n=e.countHideSlides,s=e.activeIndex,o=0;e.posPreviews==r.vertical&&(o=e.slideHeight),e.posPreviews==r.horizontal&&(o=e.slideWidth);var c=s*o;if(0!==n)return s>1&&(c-=o),1===s&&(c=0),c>=n*o&&(e.posPreviews==r.vertical&&(c=e.trackHeight-e.wrapperHeight),e.posPreviews==r.horizontal&&(c=e.trackWidth-e.wrapperWidth)),e.posPreviews==r.vertical&&(t.style.transitionDuration=i+"ms",t.style.transform="translate(0, ".concat(-1*c+"px",")")),e.posPreviews==r.horizontal&&(t.style.transitionDuration=i+"ms",t.style.transform="translate(".concat(-1*c+"px",", 0)")),setTimeout((function(){t.style.transitionDuration="0ms"}),i),c};var a=["fade","fadeInLeft","fadeInRight","fadeInUp","flipInX","flipInY","zoomIn","slideInRight","slideInLeft"];const l=function(e,t){var i=e.mainPicture,r=e.previews[t].querySelector("img");i.src=r.src,function(e,t){var i=e.mainPicture,r=e.initOptions.animSlide;a.includes(r)&&(i.classList.add(r),setTimeout((function(){i.classList.remove(r)}),500))}(e)},d=function(e){e.wrapper.addEventListener("changeActiveIndex",(function(t){(function(e,t){var i=e.previews;i[e.activeIndex].classList.remove(r.previewActive),i[t].classList.add(r.previewActive)})(e,t.detail.activeIndex),l(e,t.detail.activeIndex),e.activeIndex=t.detail.activeIndex,c(e)}))},u=function(e){e.trackWidth<e.wrapperWidth&&e.trackHeight<e.wrapperHeight&&(e.track.style.transform="translate(0, 0)")},p=function(e){var t=new Object;return t.width=Math.round(e.getBoundingClientRect().width),t.height=Math.round(e.getBoundingClientRect().height),t};var v={slideWidth:0,slideHeight:0,trackWidth:0,trackHeight:0,countSlides:0,countHideSlides:0,wrapperHeight:0,wrapperWidth:0,innerPreviewsHeight:0,innerPreviewsWidth:0,hideTrackLength:0,spaceBetween:0};const f=function(e){var t=e.initOptions,i=e.previews,n=e.posPreviews,s=e.initOptions.spaceBetween?e.initOptions.spaceBetween:0,o=i.length,c=p(e.wrapper),a=n===r.vertical,l=s*(o-1),d=t.countPreSlides,u=t.slideHeight,f=t.slideWidth;if("number"==typeof d){var h=s*(d-1);a?u=Math.abs(c.height-h)/d:f=Math.abs(c.width-h)/d}if(v.innerPreviewsHeight=a?c.height:t.slideHeight,v.innerPreviewsWidth=a?t.slideWidth:c.width,v.trackWidth=a?f:o*f+l,v.trackHeight=a?o*u+l:u,v.hideTrackLength=a?v.trackHeight-c.height:v.trackWidth-c.width,v.countSlides=o,v.wrapperHeight=c.height,v.wrapperWidth=c.width,v.slideWidth=f,v.slideHeight=u,v.spaceBetween=s,v.hideTrackLength>0){var w=a?u:f;v.countHideSlides=Math.ceil(v.hideTrackLength/(w+s))}else v.countHideSlides=0;return v},h=function(e){var t=e.initOptions.positionPreviews,i={posPreviews:""};return t!==r.posPreviewsLeft&&t!==r.posPreviewsRight||(i.posPreviews=r.vertical),t!==r.posPreviewsTop&&t!==r.posPreviewsBottom||(i.posPreviews=r.horizontal),i},w=function(e,t){var i=p(e.wrapper),n=e.innerPreviews,s=e.innerPicture,o=e.track;n.style.display="block",t===r.posPreviewsLeft&&(n.style.left=0,n.style.right="auto",s.style.left=e.slideWidth+e.spaceBetween+"px",s.style.right="auto"),t===r.posPreviewsRight&&(n.style.left="auto",n.style.right=0,s.style.left=0),n.style.top="0",n.style.bottom="auto",n.style.width=e.slideWidth+"px",n.style.height=i.height+"px",s.style.top=0,s.style.bottom="auto",s.style.width=i.width-e.slideWidth-e.spaceBetween+"px",s.style.height=i.height+"px",o.className="",o.classList.add(r.track),o.classList.add(r.vertical)},y=function(e,t){var i=p(e.wrapper),n=e.innerPreviews,s=e.innerPicture,o=e.track;n.style.display="block",t===r.posPreviewsTop&&(n.style.top=0,n.style.bottom="auto",s.style.top=e.slideHeight+e.spaceBetween+"px",s.style.bottom=0),t===r.posPreviewsBottom&&(n.style.top="auto",n.style.bottom=0,s.style.top=0,s.style.bottom="auto"),n.style.left=0,n.style.right="auto",n.style.width="100%",n.style.height=e.slideHeight+"px",s.style.left=0,s.style.right="auto",s.style.width="100%",s.style.height=i.height-e.slideHeight-e.spaceBetween+"px",o.className="",o.classList.add(r.track),o.classList.add(r.horizontal)},P=function(e,t){if(void 0===t&&(t=e.initOptions.positionPreviews),e.initOptions.visiblePreviews)switch(t){case r.posPreviewsLeft:w(e,r.posPreviewsLeft);break;case r.posPreviewsRight:w(e,r.posPreviewsRight);break;case r.posPreviewsTop:y(e,r.posPreviewsTop);break;case r.posPreviewsBottom:y(e,r.posPreviewsBottom);break;default:w(e,r.posPreviewsLeft)}else!function(e){var t=e.innerPreviews,i=e.innerPicture,r=e.track;t.style.display="none",i.style.width="100%",i.style.height="100%",t.style.top=0,t.style.bottom=0,i.style.left=0,i.style.right=0,r.className=""}(e)},g=function(e){e.previews.forEach((function(t){var i=t;i.style.height=e.slideHeight+"px",i.style.width=e.slideWidth+"px",e.posPreviews===r.vertical?i.style.marginBottom=e.spaceBetween+"px":i.style.marginRight=e.spaceBetween+"px"}))},m=function(e){[h,f,u,g,P].forEach((function(t){e=Object.assign(e,t(e))}))},b=function(e){window.addEventListener("resize",(function(){o(e),m(e)}))},S=function(e,t){e.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex",{detail:{activeIndex:t}}))},L=function(e){var t=e.activeIndex;e.activeIndex>=1&&(t--,S(e,t))},k=function(e){var t=e.activeIndex;t<e.countSlides-1&&(t++,S(e,t))},x=function(e){e.arrowsSlider.defBtnPrev.addEventListener("click",(function(){L(e)})),e.arrowsSlider.defBtnNext.addEventListener("click",(function(){k(e)}))},H=function(e){for(var t=e.previews,i=function(i){t[i].addEventListener("click",(function(){S(e,i)}))},r=0;r<t.length;r++)i(r)},E=function(e){var t=document.querySelector("body"),i=e.wrapper;e.fullScreen?e.fullScreen=!1:e.fullScreen=!0,i.classList.toggle(r.fullScreen),t.classList.toggle(r.overflow),o(e),m(e),function(e,t){e.wrapper.dispatchEvent(new CustomEvent("fullScreen",{detail:{fullScreen:t}}))}(e,e.fullScreen)},O=function(e){e.btnScreen.addEventListener("click",(function(){E(e)}))},A=function(e){return[x,H,O,d,b].forEach((function(t){t(e)})),{activeIndex:0}},_=function(e){var t=e.innerPreviews,i=e.track,n=0,s=e.hideTrackLength,o=0;window.addEventListener("resize",(function(){s=e.hideTrackLength,n=0,i.style.transform="translate(0, 0)"})),e.wrapper.addEventListener("changeActiveIndex",(function(t){if(""!==i.style.transform){var s=i.style.transform;e.posPreviews==r.vertical&&(n=Number(s.replace(/[A-Za-z(),]/g,"").split(" ")[1])),e.posPreviews==r.horizontal&&(n=Number(s.replace(/[A-Za-z(),]/g,"").split(" ")[0]))}})),e.wrapper.addEventListener("fullScreen",(function(t){var c=e.hideTrackLength;o=s/c,n=Math.round(n/o),e.posPreviews==r.vertical&&(i.style.transform="translate(0, ".concat(n+"px",")")),e.posPreviews==r.horizontal&&(i.style.transform="translate(".concat(n+"px",", 0)")),s=c})),t.addEventListener("wheel",(function(t){t.preventDefault(),t.wheelDeltaY<0?n-=30:n+=30,n>0&&(n=0),Math.abs(n)>=s&&(n=-1*s),e.posPreviews==r.vertical&&(i.style.transform="translate(0, ".concat(n+"px",")")),e.posPreviews==r.horizontal&&(i.style.transform="translate(".concat(n+"px",", 0)"))}))},q=function(e){[_,c].forEach((function(t){t(e)}))},j=function(e){[m,q].forEach((function(t){e=Object.assign(e,t(e))}))},W=function(e){[e.arrowsSlider.arrowsSlider,e.mainPicture].forEach((function(t){!function(e,t){t.addEventListener("pointerdown",(function(i){var r=i.clientX;t.addEventListener("pointerup",(function i(n){var s=n.clientX;r<s&&L(e),r>s&&k(e),t.removeEventListener("pointerup",i)}))})),t.ondragstart=function(){return!1},t.onselectstart=function(){return!1}}(e,t)}))},B=function(e){var t=e.initOptions.controls;if(t){var i=document.querySelector(t.btnPrev),n=document.querySelector(t.btnNext),s=document.querySelector(t.btnFullScreen);i&&(e.wrapper.querySelector("."+r.btnPrev).classList.add("user-hide"),i.addEventListener("click",(function(){L(e)}))),n&&(e.wrapper.querySelector("."+r.btnNext).classList.add("user-hide"),n.addEventListener("click",(function(){k(e)}))),s&&(e.wrapper.querySelector("."+r.btnScreen).classList.add("user-hide"),s.addEventListener("click",(function(){E(e)})))}},T=function(e){var t=e.initOptions.borderRadius;t&&e.wrapper.style.setProperty("--border-radius",t+"px")},I=function(e){[T].forEach((function(t){t(e)}))},M=function(){function e(e,t){this.options=Object.assign(s,t),this.init(e)}return e.prototype.init=function(e){var t=this,i=n(e);if(i){this.pmGallery=Object.assign(i,this);var r=[A,j,W,B,I];[o].forEach((function(e){t.pmGallery=Object.assign(t.pmGallery,e(t.pmGallery))})),r.forEach((function(e){t.pmGallery=Object.assign(t.pmGallery,e(t.pmGallery))}))}},e}();return t.default})()));