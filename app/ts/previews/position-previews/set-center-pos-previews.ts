import pmGalleryClasses from "../../core/setting/pmgClasses";

function setCenterPosPreviews(pmGallery: any) {
    const optionOnCenterPreviews = pmGallery.initOptions.onCenterPreviews;
    const track = pmGallery.track as HTMLElement;
    track.style.justifyContent = '';

    if (!optionOnCenterPreviews) return;

    const posPreviews = pmGallery.posPreviews === pmGalleryClasses['horizontal'] ? true : false;
    const countHideSlides = pmGallery.countHideSlides > 0 ? true : false;

    if (!countHideSlides && posPreviews) {
        track.style.justifyContent = 'center';
    }
}

export default setCenterPosPreviews;