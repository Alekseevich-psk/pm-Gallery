import pmGalleryClasses from "../../core/setting/pmgClasses";
import autoPlay from "./auto-play";
import hideBtnAutoPlay from "./hide-btn-auto-play";

function initAutoPlay(pmGallery: any) {
    const optionAutoPlay = Number(pmGallery.initOptions.autoPlay);
    const optionHideBtnAutoPlay = Number(pmGallery.initOptions.hideBtnAutoPlay);

    if (!optionAutoPlay) return hideBtnAutoPlay(pmGallery);

    if (optionHideBtnAutoPlay) {
        hideBtnAutoPlay(pmGallery);
    } else {
        pmGallery.btnAutoPlay.style.display = 'block';
    }

    if (pmGallery.wrapper.classList.contains(pmGalleryClasses['pause'])) return;

    if (pmGallery.autoPlayTimerId) {
        clearTimeout(pmGallery.autoPlayTimerId);
        return autoPlay(pmGallery, optionAutoPlay);
    }

    return autoPlay(pmGallery, optionAutoPlay);
}

export default initAutoPlay;