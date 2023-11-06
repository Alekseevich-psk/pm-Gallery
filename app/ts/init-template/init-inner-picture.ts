import pmgClasses from "../core/setting/pmgClasses";

function initMainPicture(pmGallery:  HTMLElement) {
    const htmlInnerForMainPicture = `<div class="${pmgClasses['inner']} ${pmgClasses['innerMainPicture']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['wrapper']).insertAdjacentHTML('beforeend', htmlInnerForMainPicture);

    return pmGallery.querySelector('.' + pmgClasses['innerMainPicture']) as HTMLElement;
};

export default initMainPicture;