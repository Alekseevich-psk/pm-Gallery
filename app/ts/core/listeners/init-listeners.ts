
import changeActiveIndex from "./change-state/change-active-index";
import changeSizeWindow from "./change-state/change-size-window";
import changeFullScreen from "./change-state/change-full-screen";
import clickDefArrows from "./click-elements/click-def-arrows";
import clickPreviews from "./click-elements/click-previews";
import clickBtnFullScreen from "./click-elements/click-btn-full-screen";
import clickPaginationItem from "./click-elements/click-pagination-item";
import initUserControls from "./user-controls/init-user-controls";
import initSwipeOnSliders from "./swipe-sliders/init-swipe-sliders";

function initListeners(pmGallery: any) {

    const modules = [
        clickDefArrows,
        clickPreviews,
        clickBtnFullScreen,
        clickPaginationItem,
        changeActiveIndex,
        changeFullScreen,
        changeSizeWindow,
        initUserControls,
        initSwipeOnSliders
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return {activeIndex: 0}
}

export default initListeners;