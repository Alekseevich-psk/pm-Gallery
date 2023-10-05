import { initOptions } from "../types/pmgOptions";
import pmgClasses from "../types/pmgClasses";

const defOptions: initOptions = {
    positionPreviews: pmgClasses['posPreviewsLeft'],
    countPreSlidesFullScreen: 12,
    breakpoint: {
        320: {
            slideHeight: 60,
            slideWidth: 60,
            countPreSlides: 3.6,
            speedAnim: 300,
        },
        768: {
            slideHeight: 60,
            slideWidth: 80,
            countPreSlides: 4,
            positionPreviews: pmgClasses['posPreviewsTop'],
        },
        1024: {
            positionPreviews: pmgClasses['posPreviewsLeft'],
            slideHeight: 100,
            slideWidth: 100,
            countPreSlides: 5,
        },
    },
}

export default defOptions;