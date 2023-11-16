!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PmGallery=e():t.PmGallery=e()}(self,(()=>(()=>{var t={202:(t,e,n)=>{const r=n(354);console.log(r)},987:()=>{!function(){const t=document.querySelector(".menu");t&&t.querySelector(".menu__btn").addEventListener("click",(()=>{t.classList.toggle("active")}))}()},691:()=>{!function(){const t=document.querySelector(".menu");if(!t)return;const e=t.querySelectorAll(".menu__link"),n=document.querySelectorAll("section");for(let t=0;t<e.length;t++){const l=e[t];l.addEventListener("click",(t=>{t.preventDefault(),n.forEach((t=>{t.classList.contains("active")&&t.classList.remove("active")})),r(l)}))}function r(t,e=null){const n=e||"#"+function(t){return t.href.split("/").pop()}(t),r=document.querySelector(n);r&&!r.classList.contains("active")&&(r.classList.add("active"),window.location.hash=n,setTimeout((()=>{window.scrollTo(0,0)}),0))}}()},730:()=>{!function(){const t=document.querySelector(".pm-gallery");new PmGallery(t,{countPreSlides:4,positionPreviews:"bottom",controls:{btnPrev:".main__btn-slide--prev",btnNext:".main__btn-slide--next",btnFullScreen:".main__btn-slide--fullscreen"}})}()},354:(t,e,n)=>{"use strict";n.r(e),n.d(e,{default:()=>r});const r='<h1 id="pm-gallery">pm-Gallery</h1> <h2 id="micro-gallery-for-your-project">Micro gallery for your project</h2> <p>pm-Gallery - being developed as a test project within the framework of learning JavaScript</p> <p>With pm-Gallery, you can create professional-quality visual content.</p> <ol> <li><a href="https://alekseevich-psk.github.io/pm-Gallery/dist"><strong>Demo page</strong></a></li> <li><a href="#how-install"><strong>How install?</strong></a></li> <li><a href="#example"><strong>Example</strong></a></li> <li><a href="#parameters"><strong>Parameters</strong></a></li> </ol> <hr> <h2 id="how-install">How install?</h2> <ol> <li>npm i pm-gallery</li> <li>Add files: <br> HEAD - pm-gallery-style.css <br> Scripts - pm-gallery.js</li> <li>Init</li> </ol> <pre><code class="language-js">new PmGallery(&quot;.pm-gallery&quot;, {});\n</code></pre> <h2 id="example">Example:</h2> <pre><code class="language-html">&lt;div class=&quot;pm-gallery&quot;&gt;\n    &lt;img src=&quot;./images/img-small-1.svg&quot; data-src=&quot;./images/img-large-1.svg&quot; alt=&quot;img&quot; /&gt;\n    &lt;img src=&quot;./images/img-small-2.svg&quot; data-src=&quot;./images/img-large-2.svg&quot; alt=&quot;img&quot; /&gt;\n    &lt;img src=&quot;./images/img-small-3.svg&quot; data-src=&quot;./images/img-large-3.svg&quot; alt=&quot;img&quot; /&gt;\n&lt;/div&gt;\n</code></pre> <hr> <h2 id="parameters">Parameters</h2> <hr> <table> <thead> <tr> <th align="left">Name</th> <th align="center">type</th> <th align="center">Default</th> <th align="center">Value</th> <th align="left">Description</th> </tr> </thead> <tbody><tr> <td align="left"><strong>positionPreviews</strong></td> <td align="center">string</td> <td align="center">&#39;left&#39;</td> <td align="center">&#39;top&#39; &#124; &#39;bottom&#39; &#124; &#39;left&#39;&#124; &#39;right&#39;</td> <td align="left">Positioning of preview images relative to the gallery</td> </tr> <tr> <td align="left"><strong>objectFitPicture</strong></td> <td align="center">string</td> <td align="center">&#39;cover&#39;</td> <td align="center">&#39;fill&#39; &#124; &#39;contain&#39; &#124; &#39;cover&#39; &#124; &#39;scaleDown&#39; &#124; &#39;none&#39;</td> <td align="left">Adds the &#39;object-fit&#39; class for the main image</td> </tr> <tr> <td align="left"><strong>visiblePreviews</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Image preview visibility</td> </tr> <tr> <td align="left"><strong>onCenterPreviews</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Center previews in horizontal mode</td> </tr> <tr> <td align="left"><strong>pagination</strong></td> <td align="center">boolean</td> <td align="center">false</td> <td align="center">true &#124; false</td> <td align="left">Pagination visibility</td> </tr> <tr> <td align="left"><strong>swipeSlider</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Swipe on main picture</td> </tr> <tr> <td align="left"><strong>loop</strong></td> <td align="center">boolean</td> <td align="center">false</td> <td align="center">true &#124; false</td> <td align="left">Set to true to enable continuous loop mode</td> </tr> <tr> <td align="left"><strong>countPreSlides</strong></td> <td align="center">number</td> <td align="center">4</td> <td align="center">-</td> <td align="left">Number of preview images</td> </tr> <tr> <td align="left"><strong>spaceBetween</strong></td> <td align="center">number</td> <td align="center">10</td> <td align="center">-</td> <td align="left">Distance between preview images - px</td> </tr> <tr> <td align="left"><strong>previewWidth</strong></td> <td align="center">number</td> <td align="center">100</td> <td align="center">-</td> <td align="left">Width of the preview image - px</td> </tr> <tr> <td align="left"><strong>previewHeight</strong></td> <td align="center">number</td> <td align="center">100</td> <td align="center">-</td> <td align="left">Height of the preview image - px</td> </tr> <tr> <td align="left"><strong>speedAnimScroll</strong></td> <td align="center">number</td> <td align="center">300</td> <td align="center">-</td> <td align="left">Scrolling speed of preview images</td> </tr> <tr> <td align="left"><strong>breakpoints</strong></td> <td align="center">object</td> <td align="center">{}</td> <td align="center">-</td> <td align="left">Adaptive Parameters</td> </tr> <tr> <td align="left"><strong>fullScreen</strong></td> <td align="center">object</td> <td align="center">{}</td> <td align="center">-</td> <td align="left">FullScreen Parameters</td> </tr> <tr> <td align="left"><strong>borderRadius</strong></td> <td align="center">number &#124; boolean</td> <td align="center">4</td> <td align="center">true &#124; false &#124; count</td> <td align="left">Adaptive Parameters</td> </tr> <tr> <td align="left"><strong>autoPlay</strong></td> <td align="center">number &#124; boolean</td> <td align="center">false</td> <td align="center">true &#124; false &#124; count</td> <td align="left">Adaptive Parameters</td> </tr> </tbody></table> '}},e={};function n(r){var l=e[r];if(void 0!==l)return l.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return(()=>{"use strict";n(730),n(987),n(691),n(202)})(),r.default})()));