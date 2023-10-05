import eventChangeItem from "./event-change-item";

function prevItem(pmGallery: any) {
    let index = pmGallery.activeIndex;

    (index >= 1) ? index-- : index = 0;
    
    eventChangeItem(pmGallery, index);
}

export default prevItem;