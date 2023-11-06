import { pmgOptions } from "../../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: pmgOptions = {
    visiblePreviews: true,
    positionPreviews: pmgClasses['posPreviewsLeft'],
    spaceBetween: 8,
    borderRadius: 4,
    countPreSlides: 4,
    slideHeight: 120,
    slideWidth: 100,
    autoPlay: false,
    swipeSlider: true,
    pagination: false,
    loop: false,
    speedAnim: 300,
    fullScreen: {
        pagination: true,
        speedAnim: 300,
        fullScreen: true,
        visiblePreviews: true,
        slideHeight: 80,
        slideWidth: 100,
        spaceBetween: 8,
        countPreSlides: 12,
        positionPreviews: pmgClasses['posPreviewsBottom'],
    }
}

export default defOptions;