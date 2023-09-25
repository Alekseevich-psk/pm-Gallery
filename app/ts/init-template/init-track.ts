import pmgClasses from "../types/pmgClasses";

function initTrack(innerPreviews: HTMLElement) {
    const htmlTrack = `<div class="${pmgClasses['track']}"></div>`;
    innerPreviews.insertAdjacentHTML('beforeend', htmlTrack);
    return innerPreviews.querySelector('.' + pmgClasses['track']) as HTMLElement;
}

export default initTrack;