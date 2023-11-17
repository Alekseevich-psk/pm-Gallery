import pmgClasses from "../core/setting/pmgClasses";

export default function initOverlay(pmGallery: HTMLElement) {
    const html = `<div class="${pmgClasses['overlay']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['wrapper']).insertAdjacentHTML('afterbegin', html);

    return pmGallery.querySelector('.' + pmgClasses['overlay']) as HTMLElement;
}