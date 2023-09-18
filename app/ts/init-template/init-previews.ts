import pmGalleryClasses from "../classes/pmGalleryClasses";

import { msGalleryTemplate } from '../types/pmGalleryTemplate';
import { preview } from '../types/preview';

function initPreviews(pmGallery: msGalleryTemplate['mainElement'], previews: msGalleryTemplate['previewPictures']) {
    const wrapper = pmGallery.querySelector('.' + pmGalleryClasses['wrapper']);

    const htmlInnerPreviews = `
        <div class="${pmGalleryClasses['inner']} ${pmGalleryClasses['wrapperForPreviews']}">
            <div class="${pmGalleryClasses['track']}"></div>
        </div>`;

    wrapper.insertAdjacentHTML('beforeend', htmlInnerPreviews);

    const track = pmGallery.querySelector('.' + pmGalleryClasses['track']);

    const img = (img: preview) => `
        <div class="pm-gallery__preview">
            <img src="${img.src}" alt="${img.alt}">
        </div>`;

    for (var i = 0; i < previews.length; i++) {
        track.insertAdjacentHTML('beforeend', img(previews[i] as preview));
    }
}

export default initPreviews;