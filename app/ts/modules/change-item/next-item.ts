import eventChangeItem from "./event-change-item";

function nextItem(pmGallery: any) {
    let index = pmGallery.activeIndex;

    (index < pmGallery.previews.length - 1) ? 
    index++ : index = pmGallery.previews.length - 1;

    eventChangeItem(pmGallery, index);
}

export default nextItem;