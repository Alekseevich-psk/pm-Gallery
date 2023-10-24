import wheelScrollPreviews from "./wheel-scroll-previews";
import sliderScrollPreviews from "./slider-scroll-previews";

function initScrollPreviews(pmGallery: any) {
    
    const modules = [
        wheelScrollPreviews,
        sliderScrollPreviews
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

}

export default initScrollPreviews;