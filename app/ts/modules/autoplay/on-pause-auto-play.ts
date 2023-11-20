import pmGalleryClasses from "../../core/setting/pmgClasses";
import initAutoPlay from "./init-auto-play";

export default function onPauseAutoPlay(pmGallery: any) {
    const wrapper = pmGallery.wrapper as HTMLElement;

    if (!wrapper.classList.contains(pmGalleryClasses['pause'])) {
        wrapper.classList.add(pmGalleryClasses['pause']);
        clearTimeout(pmGallery.autoPlayTimerId)
    } else {
        wrapper.classList.remove(pmGalleryClasses['pause']);
        initAutoPlay(pmGallery);
    }

};