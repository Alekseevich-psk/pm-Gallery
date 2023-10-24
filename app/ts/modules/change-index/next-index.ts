import eventChangeItem from "../../event/event-change-index";

function nextIndex(pmGallery: any) {
    let index = pmGallery.activeIndex;

    if (index < pmGallery.countSlides - 1) {
        index++;
        eventChangeItem(pmGallery, index);
    }
}

export default nextIndex;