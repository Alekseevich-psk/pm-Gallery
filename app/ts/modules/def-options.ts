import { initOptions } from "../types/pmgOptions";
import pmgClasses from "../types/pmgClasses";

const defOptions: initOptions = {
    positionPreviews: pmgClasses['posPreviewsLeft'],
    breakpoint: {
        320: {
            slideHeight: 60,
            slideWidth: 60,
            countPreSlides: 3.6,
            speedAnim: 300,
        },
        768: {
            slideHeight: 80,
            slideWidth: 80,
            countPreSlides: 4,
        },
        960: {
            slideHeight: 100,
            slideWidth: 100,
        },
    },
}

export default defOptions;