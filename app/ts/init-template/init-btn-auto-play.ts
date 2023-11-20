import pmgClasses from "../core/setting/pmgClasses";

export default function initBtnAutoPlay(pmGallery: HTMLElement) {
    const html = `<div class="${pmgClasses['btnAutoPlay']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['controls']).insertAdjacentHTML('beforeend', html);
    return pmGallery.querySelector('.' + pmgClasses['btnAutoPlay']) as HTMLElement;
}
