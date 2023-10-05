import defArrows from "./def-arrows";
import clickPreviews from "./click-previews";
import swipeOnPreviews from "./swipe-on-previews";

function controlsItem(pmGallery: any) {

    const modules = [
        defArrows,
        clickPreviews,
        swipeOnPreviews,
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return { activeIndex: 0 };
}

export default controlsItem;