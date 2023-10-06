import { initOptions } from "../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: initOptions = {
    visiblePreviews: false,
    breakpoints: {
        320: {
            slideHeight: 60,
            slideWidth: 60,
            countPreSlides: 3.6,
            speedAnim: 300,
            positionPreviews: pmgClasses['posPreviewsBottom'],
            fullScreen: false,
        },
        768: {
            slideHeight: 60,
            slideWidth: 80,
            countPreSlides: 4,
            fullScreen: true,
            positionPreviews: pmgClasses['posPreviewsLeft'],
            visiblePreviews: true
        },
        1024: {
            positionPreviews: pmgClasses['posPreviewsBottom'],
            slideHeight: 100,
            slideWidth: 82,
            countPreSlides: 5,
        },
    },
    fullScreen: {
        visiblePreviews: true,
        speedAnim: 300,
        breakpoints: {
            320: {
                positionPreviews: pmgClasses['posPreviewsBottom'],
                slideHeight: 80,
                slideWidth: 80,
                countPreSlides: 3.4,
            },
            960: {
                slideHeight: 100,
                slideWidth: 160,
                countPreSlides: 'auto',
            },
        },
    }
}

export default defOptions;