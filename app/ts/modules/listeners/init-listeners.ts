
import changeActiveIndex from "./change-active-index";
import resizeWindow from "./resize-window";
import defArrows from "./def-arrows";
import clickPreviews from "./click-previews";
import fullScreen from "./full-screen";
import swipeOnPreviews from "./swipe-on-previews";

function initListeners(pmGallery: any) {

    const modules = [
        changeActiveIndex,
        resizeWindow,
        defArrows,
        clickPreviews,
        fullScreen,
        swipeOnPreviews,
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return {activeIndex: 0}
}

export default initListeners;