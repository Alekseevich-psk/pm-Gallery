import pmGalleryClasses from "../classes/pmGalleryClasses";
import { msGalleryTemplate } from '../types/pmGalleryTemplate';
import { preview } from '../types/preview';

function initMainPicture(pmGallery: msGalleryTemplate['mainElement'], previews: msGalleryTemplate['previewPictures']) {
    const wrapper = pmGallery.querySelector('.' + pmGalleryClasses['wrapper']);

    const htmlWrapperForMainPicture = `
    <div class="${pmGalleryClasses['inner']} ${pmGalleryClasses['wrapperForMainPicture']}"></div>`;
    wrapper.insertAdjacentHTML('beforeend', htmlWrapperForMainPicture);

    const pictureWrapper = pmGallery.querySelector('.' + pmGalleryClasses['wrapperForMainPicture']);
    const preview = previews[0] as preview;

    const img = `
        <img src="${preview.src}" class="pm-gallery__main-picture" data-src="${preview.dataSrc}" alt="${preview.alt}">
    `;

    pictureWrapper.insertAdjacentHTML('beforeend', img);
};

export default initMainPicture;