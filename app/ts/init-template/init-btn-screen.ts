import pmgClasses from "../types/pmgClasses";

function initBtnScreen(pmGallery: HTMLElement) {

    const html = `<div class="${pmgClasses['btnScreen']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['controls']).insertAdjacentHTML('beforeend', html);

    return pmGallery.querySelector('.' + pmgClasses['controls']) as HTMLElement;
}

export default initBtnScreen;