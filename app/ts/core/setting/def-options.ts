import { pmgOptions } from "../../types/pmgOptions";
import pmgClasses from "./pmgClasses";

const defOptions: pmgOptions = {
    activeIndex: 0,
    visiblePreviews: true,
    positionPreviews: pmgClasses['posPreviewsLeft'],
    spaceBetween: 8,
    borderRadius: 4,
    countPreSlides: 4,
    previewHeight: 100,
    previewWidth: 100,
    autoPlay: false,
    objectFitPicture: 'cover',
    swipeSlider: true,
    pagination: false,
    loop: false,
    speedAnimScroll: 300,
    animSlide: false,
    onCenterPreviews: true,
    fullScreen: {
        onCenterPreviews: true,
        animSlide: 'fade',
        pagination: true,
        speedAnimScroll: 300,
        fullScreen: true,
        visiblePreviews: false,
        previewHeight: 60,
        previewWidth: 100,
        spaceBetween: 8,
        countPreSlides: 'none',
        positionPreviews: pmgClasses['posPreviewsBottom'],
    }
}

export default defOptions;