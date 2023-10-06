import eventChangeItem from "./event-change-index";

function nextIndex(pmGallery: any) {
    let index = pmGallery.activeIndex;

    (index < pmGallery.previews.length - 1) ? 
    index++ : index = pmGallery.previews.length - 1;

    eventChangeItem(pmGallery, index);
}

export default nextIndex;