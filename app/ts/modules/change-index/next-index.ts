import eventChangeItem from "../../event/event-change-index";

function nextIndex(pmGallery: any) {
    const optionLoop = pmGallery.initOptions.loop;
    const countSlides = pmGallery.countSlides;
    let index = pmGallery.activeIndex;

    index++;

    if (index <= countSlides - 1) {
        eventChangeItem(pmGallery, index);
    }

    if (optionLoop && index === countSlides) {
        index = 0;
        eventChangeItem(pmGallery, index);
    }
}

export default nextIndex;