import { pmgOptions } from "../../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: pmgOptions = {
    visiblePreviews: true,
    positionPreviews: pmgClasses['posPreviewsLeft'],
    spaceBetween: 8,
    borderRadius: 4,
    countPreSlides: 4,
    previewHeight: 120,
    previewWidth: 100,
    autoPlay: false,
    objectFitPicture: 'cover',
    swipeSlider: true,
    pagination: false,
    loop: false,
    speedAnimScroll: 300,
    fullScreen: {
        pagination: true,
        speedAnimScroll: 300,
        fullScreen: true,
        visiblePreviews: false,
        previewHeight: 80,
        previewWidth: 100,
        spaceBetween: 8,
        countPreSlides: 12,
        positionPreviews: pmgClasses['posPreviewsBottom'],
    }
}

export default defOptions;