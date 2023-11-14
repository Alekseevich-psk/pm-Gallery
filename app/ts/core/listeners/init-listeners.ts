
import changeActiveIndex from "./change-state/change-active-index";
import changeSizeWindow from "./change-state/change-size-window";
import changeFullScreen from "./change-state/change-full-screen";
import clickDefArrows from "./click-elements/click-def-arrows";
import clickPreviews from "./click-elements/click-previews";
import clickBtnFullScreen from "./click-elements/click-btn-full-screen";
import clickPaginationItem from "./click-elements/click-pagination-item";
import initSwipeOnSliders from "./swipe-sliders/init-swipe-sliders";
import clickUserButtons from "./click-elements/click-user-buttons";
import changeInitGallery from "./change-state/change-init-gallery";

function initListeners(pmGallery: any) {

    const modules = [
        clickDefArrows,
        clickPreviews,
        clickBtnFullScreen,
        clickPaginationItem,
        clickUserButtons,
        changeActiveIndex,
        changeFullScreen,
        changeSizeWindow,
        changeInitGallery,
        initSwipeOnSliders
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return { activeIndex: 0 }
}

export default initListeners;