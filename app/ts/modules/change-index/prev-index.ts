import eventChangeItem from "./event-change-index";

function prevIndex(pmGallery: any) {
    let index = pmGallery.activeIndex;

    if (pmGallery.activeIndex >= 1) {
        index--;
        eventChangeItem(pmGallery, index);
    }
}

export default prevIndex;