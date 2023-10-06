import eventChangeItem from "./event-change-index";

function prevIndex(pmGallery: any) {
    let index = pmGallery.activeIndex;

    (index >= 1) ? index-- : index = 0;
    
    eventChangeItem(pmGallery, index);
}

export default prevIndex;