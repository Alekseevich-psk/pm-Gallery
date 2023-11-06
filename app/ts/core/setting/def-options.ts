import { pmgOptions } from "../../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: pmgOptions = {
    visiblePreviews: true,
    spaceBetween: 10,
    borderRadius: 4,
    swipeSlider: true,
    pagination: false,
    breakpoints: {
        320: {
            slideHeight: 80,
            slideWidth: 80,
            countPreSlides: 3.6,
            speedAnim: 300,
            positionPreviews: pmgClasses['posPreviewsBottom'],
        },
        960: {
            slideHeight: 100,
            slideWidth: 80,
            countPreSlides: 4,
            positionPreviews: pmgClasses['posPreviewsLeft'],
        },
        1024: {
            slideHeight: 100,
            slideWidth: 80,
            countPreSlides: 5,
        }
    },
    fullScreen: {
        visiblePreviews: false,
        borderRadius: 0,
        spaceBetween: 0,
        slideHeight: 120,
        slideWidth: 120,
        animSlide: 'none',
        autoPlay: false,
        pagination: true,
    }
}

export default defOptions;