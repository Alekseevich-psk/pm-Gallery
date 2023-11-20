!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.PmGallery=e():t.PmGallery=e()}(self,(()=>(()=>{var t={308:()=>{!function(){const t=document.querySelector(".demo");if(!t)return;const e={},n=document.querySelector(".demo__gallery"),r=t.querySelectorAll("input"),l=t.querySelectorAll("select");function a(t){e[t.id]=t.value}function i(t){"checkbox"===t.type&&(e[t.name]=!!t.checked),"range"===t.type&&(e[t.name]=t.value)}function d(t){o.update()}r.forEach((t=>{i(t)})),r.forEach((t=>{a(t)})),r.forEach((t=>{i(t),t.addEventListener("change",(e=>{i(t),d()}))})),l.forEach((t=>{a(t),t.addEventListener("change",(e=>{a(t),d()}))}));const o=new PmGallery(n,e)}()},987:()=>{!function(){const t=document.querySelector(".menu");t&&t.querySelector(".menu__btn").addEventListener("click",(()=>{t.classList.toggle("active")}))}()},730:()=>{document.querySelector(".main")&&new PmGallery(".main__pm-gallery",{countPreSlides:4,borderRadius:4,positionPreviews:"bottom",controls:{btnPrev:".main__btn-slide--prev",btnNext:".main__btn-slide--next",btnFullScreen:".main__btn-slide--fullscreen"}})}},e={};function n(r){var l=e[r];if(void 0!==l)return l.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}var r={};return(()=>{"use strict";n(730),n(308),n(987),function(){const t=document.querySelector(".markdown");t&&(t.innerHTML='<h1 id="pm-galleryjs">Pm-Gallery.js</h1> <p>Pm-Gallery.js - A simple yet powerful responsive image gallery</p> <p>With pm-Gallery, you can create professional-quality visual content.</p> <ol> <li><a href="https://alekseevich-psk.github.io/pm-Gallery/dist"><strong>Demo page</strong></a></li> <li><a href="#how-usage"><strong>How usage?</strong></a></li> <li><a href="#example"><strong>Example</strong></a></li> <li><a href="#parameters"><strong>Parameters</strong></a></li> </ol> <hr> <h2 id="how-usage">How usage?</h2> <ol> <li>npm i pm-gallery</li> <li>Add files: <br> HEAD - pm-gallery-style.css <br> Scripts - pm-gallery.js</li> <li>Init:</li> </ol> <pre><code class="language-js">new PmGallery(&quot;.pm-gallery&quot;, {});\n</code></pre> <h2 id="example">Example:</h2> <pre><code class="language-html">&lt;div class=&quot;pm-gallery&quot;&gt;\n    &lt;img src=&quot;./images/img-small-1.svg&quot; data-src=&quot;./images/img-large-1.svg&quot; alt=&quot;img&quot; /&gt;\n    &lt;img src=&quot;./images/img-small-2.svg&quot; data-src=&quot;./images/img-large-2.svg&quot; alt=&quot;img&quot; /&gt;\n    &lt;img src=&quot;./images/img-small-3.svg&quot; data-src=&quot;./images/img-large-3.svg&quot; alt=&quot;img&quot; /&gt;\n&lt;/div&gt;\n</code></pre> <hr> <h2 id="parameters">Parameters</h2> <table> <thead> <tr> <th align="left">Name</th> <th align="center">type</th> <th align="center">Default</th> <th align="center">Value</th> <th align="left">Description</th> </tr> </thead> <tbody><tr> <td align="left"><strong>positionPreviews</strong></td> <td align="center">string</td> <td align="center">&#39;left&#39;</td> <td align="center">&#39;top&#39; &#124; &#39;bottom&#39; &#124; &#39;left&#39;&#124; &#39;right&#39;</td> <td align="left">Positioning of preview images relative to the gallery</td> </tr> <tr> <td align="left"><strong>objectFitPicture</strong></td> <td align="center">string</td> <td align="center">&#39;cover&#39;</td> <td align="center">&#39;fill&#39; &#124; &#39;contain&#39; &#124; &#39;cover&#39; &#124; &#39;scaleDown&#39; &#124; &#39;none&#39;</td> <td align="left">Adds the &#39;object-fit&#39; class for the main image</td> </tr> <tr> <td align="left"><strong>visiblePreviews</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Image preview visibility</td> </tr> <tr> <td align="left"><strong>onCenterPreviews</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Center previews in horizontal mode</td> </tr> <tr> <td align="left"><strong>pagination</strong></td> <td align="center">boolean</td> <td align="center">false</td> <td align="center">true &#124; false</td> <td align="left">Pagination visibility</td> </tr> <tr> <td align="left"><strong>swipeSlider</strong></td> <td align="center">boolean</td> <td align="center">true</td> <td align="center">true &#124; false</td> <td align="left">Swipe on main picture</td> </tr> <tr> <td align="left"><strong>loop</strong></td> <td align="center">boolean</td> <td align="center">false</td> <td align="center">true &#124; false</td> <td align="left">Set to true to enable continuous loop mode</td> </tr> <tr> <td align="left"><strong>countPreSlides</strong></td> <td align="center">number</td> <td align="center">4</td> <td align="center">number</td> <td align="left">Count of preview images</td> </tr> <tr> <td align="left"><strong>spaceBetween</strong></td> <td align="center">number</td> <td align="center">10</td> <td align="center">number</td> <td align="left">Distance between preview images - px</td> </tr> <tr> <td align="left"><strong>previewWidth</strong></td> <td align="center">number</td> <td align="center">100</td> <td align="center">number</td> <td align="left">Width of the preview image - px</td> </tr> <tr> <td align="left"><strong>previewHeight</strong></td> <td align="center">number</td> <td align="center">100</td> <td align="center">number</td> <td align="left">Height of the preview image - px</td> </tr> <tr> <td align="left"><strong>speedAnimScroll</strong></td> <td align="center">number</td> <td align="center">300</td> <td align="center">number</td> <td align="left">Scrolling speed of preview images</td> </tr> <tr> <td align="left"><strong>breakpoints</strong></td> <td align="center">object</td> <td align="center">{}</td> <td align="center">-</td> <td align="left">Object with parameters for responsive mode Parameters</td> </tr> <tr> <td align="left"><strong>fullScreen</strong></td> <td align="center">object</td> <td align="center">{}</td> <td align="center">-</td> <td align="left">Object with parameters for fullScreen mode Parameters</td> </tr> <tr> <td align="left"><strong>borderRadius</strong></td> <td align="center">number &#124; boolean</td> <td align="center">4</td> <td align="center">false &#124; count</td> <td align="left">The options adds border radius for images</td> </tr> <tr> <td align="left"><strong>autoPlay</strong></td> <td align="center">number &#124; boolean</td> <td align="center">false</td> <td align="center">false &#124; count</td> <td align="left">Automatic slide change</td> </tr> <tr> <td align="left"><strong>animSlide</strong></td> <td align="center">string &#124; boolean</td> <td align="center">false</td> <td align="center">false &#124; &#39;fade&#39; &#124; &#39;flipInX&#39; &#124; &#39;zoomIn&#39; &#124;</td> <td align="left">Animation of the slide change</td> </tr> </tbody></table> ')}()})(),r.default})()));