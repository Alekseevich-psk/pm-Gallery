import pmGalleryClasses from "../../core/setting/pmgClasses";

function setCenterPosPreviews(pmGallery: any) {
    const optionOnCenterPreviews = pmGallery.initOptions.onCenterPreviews;
    const track = pmGallery.track as HTMLElement;

    const posPreviews = pmGallery.posPreviews === pmGalleryClasses['horizontal'] ? true : false;
    const countHideSlides = pmGallery.countHideSlides > 0 ? true : false;

    if (optionOnCenterPreviews) {
        if (!countHideSlides && posPreviews) {
            track.style.justifyContent = 'center';
        }
    } else {
        track.style.justifyContent = '';
    }


}

export default setCenterPosPreviews;