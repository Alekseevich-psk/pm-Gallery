import initPosPreviews from "./position-previews/init-position-previews";
import initScrollPreviews from "./scroll-previews/init-scroll-previews";

function initPreviews(pmGallery: any) {

    const modules = [
        initPosPreviews,
        initScrollPreviews
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initPreviews;