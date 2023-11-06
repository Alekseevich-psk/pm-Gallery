import pmgClasses from "../core/setting/pmgClasses";
import { preview } from '../types/pmgPreview';

function initMainPicture(pmGallery: HTMLElement, previews: object[]) {
    const pictureWrapper = pmGallery.querySelector('.' + pmgClasses['innerMainPicture']);
    const preview = previews[0] as preview;

    const src = (preview.dataSrc ? preview.dataSrc : preview.src);
    const img = `<img src="${src}" class="${pmgClasses['mainPicture']}" alt="${preview.alt}">`;

    pictureWrapper.insertAdjacentHTML('beforeend', img);
    return pmGallery.querySelector('.' + pmgClasses['mainPicture']) as HTMLElement;
};

export default initMainPicture;