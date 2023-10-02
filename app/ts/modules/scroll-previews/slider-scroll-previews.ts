import pmGalleryClasses from "../../types/pmgClasses";

function sliderScrollPreviews(pmGallery: any, index: number) {
    const track = pmGallery.track;
    const speedAnim = pmGallery.initOptions.speedAnim;
    const countHideSlides = pmGallery.countHideSlides;

    let disStart: number = 0;
    let disEnd: number = 0;
    let distance: number = 0;
    let disCut: number = 0;

    if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
        distance = pmGallery.slideHeight;
    }

    if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
        distance = pmGallery.slideWidth;
    }

    disStart = pmGallery.activeIndex * distance;
    disEnd = index * distance;
    disCut = countHideSlides * distance;

    if (index > 1) {
        disEnd = disEnd - distance;
    }

    if (index === 1) {
        disEnd = 0
    }

    if (disEnd > disCut) {
        disEnd = countHideSlides * distance;
    }

    if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
        track.style.transitionDuration = speedAnim + 'ms';
        track.style.transform = `translate(0, ${(-1 * disEnd) + 'px'})`;
    }

    if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
        track.style.transitionDuration = speedAnim + 'ms';
        track.style.transform = `translate(${(-1 * disEnd) + 'px'}, 0)`;
    }

    setTimeout(() => {
        track.style.transitionDuration = 0 + 'ms';
    }, speedAnim);
    
    return disEnd;
}

export default sliderScrollPreviews;