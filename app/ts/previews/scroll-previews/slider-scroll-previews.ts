import pmGalleryClasses from "../../core/setting/pmgClasses";

function sliderScrollPreviews(pmGallery: any) {
    const track = pmGallery.track;
    const speedAnimScroll = pmGallery.initOptions.speedAnimScroll;
    const countHideSlides = pmGallery.countHideSlides;
    const spaceBetween = pmGallery.initOptions.spaceBetween;
    const index = pmGallery.activeIndex;
    let distance: number = 0;

    if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
        distance = pmGallery.previewHeight;
    }

    if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
        distance = pmGallery.previewWidth;
    }

    distance += spaceBetween;

    let disEnd = index * distance;
    let disCut = countHideSlides * distance;

    if (countHideSlides === 0) return;

    if (index > 1) {
        disEnd = (disEnd - distance);
    }

    if (index === 1) {
        disEnd = 0;
    }
    
    if (disEnd >= disCut) {

        if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
            disEnd = pmGallery.trackHeight - pmGallery.wrapperHeight;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
            disEnd = pmGallery.trackWidth - pmGallery.wrapperWidth;
        }
    }

    if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
        track.style.transitionDuration = speedAnimScroll + 'ms';
        track.style.transform = `translate(0, ${(-1 * disEnd) + 'px'})`;
    }

    if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
        track.style.transitionDuration = speedAnimScroll + 'ms';
        track.style.transform = `translate(${(-1 * disEnd) + 'px'}, 0)`;
    }

    setTimeout(() => {
        track.style.transitionDuration = 0 + 'ms';
    }, speedAnimScroll);

    return disEnd;
}

export default sliderScrollPreviews;