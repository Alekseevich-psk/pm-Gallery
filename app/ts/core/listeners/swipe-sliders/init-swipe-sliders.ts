import swipeSlider from "./swipe-slider";

function initSwipeOnSliders(pmGallery: any) {
    
    const optionSwipeSlide = pmGallery.initOptions.swipeSlider;
    if(!optionSwipeSlide) return;

    const sliders = [
        pmGallery.arrowsSlider.arrowsSlider,
        pmGallery.mainPicture
    ];

    sliders.forEach(slider => {
        swipeSlider(pmGallery, slider);
    });

}

export default initSwipeOnSliders;