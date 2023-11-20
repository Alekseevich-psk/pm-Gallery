import pmgClasses from "../core/setting/pmgClasses";

export default function initWrapper(pmGallery: HTMLElement) {
    const htmlWrapper = `<div class="${pmgClasses['wrapper']}"></div>`;
    pmGallery.insertAdjacentHTML('afterbegin', htmlWrapper);

    return pmGallery.querySelector('.' + pmgClasses['wrapper']) as HTMLElement;
}