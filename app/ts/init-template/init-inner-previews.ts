import pmgClasses from "../types/pmgClasses";

function initPreviews(pmGallery: HTMLElement) {

    const htmlInnerPreviews = `
        <div class="${pmgClasses['inner']} ${pmgClasses['innerPreviews']}">
            <div class="${pmgClasses['track']}"></div>
        </div>`;

    pmGallery.querySelector('.' + pmgClasses['wrapper']).insertAdjacentHTML('beforeend', htmlInnerPreviews);

    return pmGallery.querySelector('.' + pmgClasses['innerPreviews']) as HTMLElement;
}

export default initPreviews;