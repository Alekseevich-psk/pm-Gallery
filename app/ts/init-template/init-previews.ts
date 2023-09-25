import pmgClasses from "../classes/pmgClasses";

import { pmgTemplate } from '../types/pmgTemplate';
import { preview } from '../types/preview';

function initPreviews(pmGallery: pmgTemplate['mainElement'], previews: pmgTemplate['previewPictures']) {
    const track = pmGallery.querySelector('.' + pmgClasses['track']);

    const img = (img: preview) => `
        <div class="pm-gallery__preview">
            <img src="${img.src}" alt="${img.alt}">
        </div>`;

    for (var i = 0; i < previews.length; i++) {
        track.insertAdjacentHTML('beforeend', img(previews[i] as preview));
    }
}

export default initPreviews;