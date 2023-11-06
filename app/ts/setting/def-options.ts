import { initOptions } from "../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: initOptions = {
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
            slideWidth: 82,
            countPreSlides: 4,
        },
    },
    fullScreen: {
        visiblePreviews: false,
        animSlide: 'none',
        autoPlay: false,
        pagination: true,
    }
}

export default defOptions;