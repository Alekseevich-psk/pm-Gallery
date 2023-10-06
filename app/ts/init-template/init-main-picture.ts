import pmgClasses from "../setting/pmgClasses";
import { preview } from '../types/pmgPreview';

function initMainPicture(pmGallery: HTMLElement, previews: object[]) {
    const pictureWrapper = pmGallery.querySelector('.' + pmgClasses['innerMainPicture']);
    const preview = previews[0] as preview;

    const img = `
        <img src="${preview.src}" class="${pmgClasses['mainPicture']}" data-src="${preview.dataSrc}" alt="${preview.alt}">
    `;

    pictureWrapper.insertAdjacentHTML('beforeend', img);
    return pmGallery.querySelector('.' + pmgClasses['mainPicture']) as HTMLElement;
};

export default initMainPicture;