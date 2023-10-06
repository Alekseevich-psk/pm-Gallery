
import changeActiveIndex from "./change-active-index";
import resizeWindow from "./resize-window";
import clickDefArrows from "./click-def-arrows";
import clickPreviews from "./click-previews";
import clickBtnFullScreen from "./click-btn-full-screen";
import swipeOnPreviews from "./swipe-on-previews";

function initListeners(pmGallery: any) {

    const modules = [
        clickDefArrows,
        clickPreviews,
        clickBtnFullScreen,
        changeActiveIndex,
        swipeOnPreviews,
        resizeWindow,
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return {activeIndex: 0}
}

export default initListeners;