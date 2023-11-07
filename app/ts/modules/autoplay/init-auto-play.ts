import autoPlay from "./auto-play";

function initAutoPlay(pmGallery: any) {
    const optionAutoPlay = pmGallery.initOptions.autoPlay;

    if (!optionAutoPlay) return;

    if (typeof optionAutoPlay !== 'number') {
        return console.error('The "autoPlay" option must have the type === number');
    }

    if (pmGallery.autoPlayTimerId) {
        clearTimeout(pmGallery.autoPlayTimerId);
        return autoPlay(pmGallery, optionAutoPlay);
    }

    return autoPlay(pmGallery, optionAutoPlay);
}

export default initAutoPlay;