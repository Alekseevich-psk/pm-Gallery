import autoPlay from "./auto-play";
import pmGalleryClasses from "../../core/setting/pmgClasses";

function initAutoPlay(pmGallery: any) {
    const wrapper = pmGallery.wrapper as HTMLElement;
    const optionAutoPlay = Number(pmGallery.initOptions.autoPlay);

    if (wrapper.classList.contains(pmGalleryClasses['pause'])) {
        return clearTimeout(pmGallery.autoPlayTimerId);
    }

    if (!optionAutoPlay) {
        return pmGallery.btnAutoPlay.style.display = 'none';
    }

    if (pmGallery.autoPlayTimerId) {
        clearTimeout(pmGallery.autoPlayTimerId);
        return autoPlay(pmGallery, optionAutoPlay);
    }

    pmGallery.btnAutoPlay.style.display = 'block';
    return autoPlay(pmGallery, optionAutoPlay);
}

export default initAutoPlay;