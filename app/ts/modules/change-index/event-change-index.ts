import changeActivePreview from "../change-slide/change-active-preview";
import changeMainPicture from "../change-slide/change-main-picture";

function eventChangeIndex(pmGallery: any, index: number) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex", {
        detail: { activeIndex: index }
    }));
}

export default eventChangeIndex;