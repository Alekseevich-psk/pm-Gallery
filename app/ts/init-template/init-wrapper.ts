import pmgClasses from "../types/pmgClasses";

export default function initWrapper(pmGallery: HTMLElement) {
    const htmlWrapper = `
        <div class="${pmgClasses['wrapper']}">
            <div class="${pmgClasses['overlay']}"></div>
        </div>`;

    pmGallery.insertAdjacentHTML('afterbegin', htmlWrapper);

    return pmGallery.querySelector('.' + pmgClasses['wrapper']) as HTMLElement;
}