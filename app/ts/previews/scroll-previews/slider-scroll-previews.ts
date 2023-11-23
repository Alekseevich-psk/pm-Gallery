import pmGalleryClasses from "../../core/setting/pmgClasses";

function sliderScrollPreviews(pmGallery: any) {
    const track = pmGallery.track;
    const posPreviews = pmGallery.posPreviews;
    const speedAnimScroll = Number(pmGallery.initOptions.speedAnimScroll);
    const countHideSlides = pmGallery.countHideSlides;
    const spaceBetween = Number(pmGallery.initOptions.spaceBetween);
    const index = pmGallery.activeIndex;
    const posVerticalPreviews = (posPreviews == pmGalleryClasses['vertical']) ? true : false;
    let distance: number = 0;

    distance = posVerticalPreviews ? pmGallery.previewHeight : pmGallery.previewWidth;
    distance += spaceBetween;

    let disEnd = index * distance;
    let disCut = countHideSlides * distance;

    if (countHideSlides === 0) return;

    if (index > 1) {
        disEnd = disEnd - distance;
    }

    if (index === 1) {
        disEnd = 0;
    }

    if (disEnd >= disCut) {
        if (posVerticalPreviews) {
            disEnd = pmGallery.trackHeight - pmGallery.wrapperHeight;
        } else {
            disEnd = pmGallery.trackWidth - pmGallery.wrapperWidth;
        }
    }

    if (posVerticalPreviews) {
        track.style.transitionDuration = speedAnimScroll + 'ms';
        track.style.transform = `translate(0, ${(-1 * disEnd) + 'px'})`;
    } else {
        track.style.transitionDuration = speedAnimScroll + 'ms';
        track.style.transform = `translate(${(-1 * disEnd) + 'px'}, 0)`;
    }

    setTimeout(() => {
        track.style.transitionDuration = 0 + 'ms';
    }, speedAnimScroll);

    return disEnd;
}

export default sliderScrollPreviews;