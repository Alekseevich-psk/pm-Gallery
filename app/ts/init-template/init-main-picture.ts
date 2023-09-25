import pmgClasses from "../types/pmgClasses";
import { pmgTemplate } from '../types/pmgTemplate';
import { preview } from '../types/pmgPreview';

function initMainPicture(pmGallery: pmgTemplate['mainElement'], previews: pmgTemplate['previewPictures']) {
    const pictureWrapper = pmGallery.querySelector('.' + pmgClasses['innerMainPicture']);
    const preview = previews[0] as preview;

    const img = `
        <img src="${preview.src}" class="pm-gallery__main-picture" data-src="${preview.dataSrc}" alt="${preview.alt}">
    `;

    pictureWrapper.insertAdjacentHTML('beforeend', img);
};

export default initMainPicture;