
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
import keydownEsc from "./keydown/keydown-esc";
import clickBtnAutoPlay from "./click-elements/click-btn-auto-play";
import keydownArrows from "./keydown/keydown-arrows";

function initListeners(pmGallery: any) {

    const modules = [
        clickDefArrows,
        clickPreviews,
        clickBtnFullScreen,
        clickBtnAutoPlay,
        clickPaginationItem,
        clickUserButtons,
        changeActiveIndex,
        changeFullScreen,
        changeSizeWindow,
        changeInitGallery,
        keydownEsc,
        keydownArrows,
        initSwipeOnSliders
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

    return { activeIndex: 0 }
}

export default initListeners;