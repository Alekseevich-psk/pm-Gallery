import swipeSlider from "./swipe-slider";

function initSwipeOnSliders(pmGallery: any) {

    const sliders = [
        pmGallery.track,
        pmGallery.mainPicture
    ];

    sliders.forEach(slider => {
        swipeSlider(pmGallery, slider);
    });

}

export default initSwipeOnSliders;