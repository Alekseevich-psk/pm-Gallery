import pmgClasses from "../setting/pmgClasses";

function initTrack(pmGallery: HTMLElement) {
    const innerPreviews = pmGallery.querySelector('.' + pmgClasses['innerPreviews']);

    const htmlTrack = `<div class="${pmgClasses['track']}"></div>`;
    innerPreviews.insertAdjacentHTML('beforeend', htmlTrack);
    
    return innerPreviews.querySelector('.' + pmgClasses['track']) as HTMLElement;
}

export default initTrack;