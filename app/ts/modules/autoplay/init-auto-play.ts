import autoPlay from "./auto-play";

function initAutoPlay(pmGallery: any) {
    const optionAutoPlay = Number(pmGallery.initOptions.autoPlay);
    if (!optionAutoPlay) return pmGallery.btnAutoPlay.style.display = 'none';
    
    pmGallery.btnAutoPlay.style.display = 'block';

    if (pmGallery.autoPlayTimerId) {
        clearTimeout(pmGallery.autoPlayTimerId);
        return autoPlay(pmGallery, optionAutoPlay);
    }

    return autoPlay(pmGallery, optionAutoPlay);
}

export default initAutoPlay;