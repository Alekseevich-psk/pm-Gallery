
import changeActiveIndex from "./change-active-index";
import changeSizeWindow from "./change-size-window";
import changeFullScreen from "./change-full-screen";
import clickDefArrows from "./click-def-arrows";
import clickPreviews from "./click-previews";
import clickBtnFullScreen from "./click-btn-full-screen";
import clickPaginationItem from "./click-pagination-item";

function initListeners(pmGallery: any) {

    const modules = [
        clickDefArrows,
        clickPreviews,
        clickBtnFullScreen,
        clickPaginationItem,
        changeActiveIndex,
        changeFullScreen,
        changeSizeWindow,
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return {activeIndex: 0}
}

export default initListeners;