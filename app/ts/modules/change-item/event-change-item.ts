import changeActivePreview from "./change-active-preview";
import changeMainPicture from "./change-main-picture";

function eventChangeItem(pmGallery: any, index: number) {
    changeActivePreview(pmGallery, index);
    changeMainPicture(pmGallery, index);

    pmGallery.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex", {
        detail: { activeIndex: index }
    }));
}

export default eventChangeItem;