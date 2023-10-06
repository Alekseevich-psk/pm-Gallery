import initPosPreviews from "./position-previews/init-position-previews";

function initPreviews(pmGallery: any) {

    const modules = [
        initPosPreviews,
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initPreviews;