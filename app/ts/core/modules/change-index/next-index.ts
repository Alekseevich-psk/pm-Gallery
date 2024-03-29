import changeIndex from "../../events/on-change-index";

function nextIndex(pmGallery: any) {
    const optionLoop = pmGallery.initOptions.loop;
    const countSlides = pmGallery.countSlides;
    let index = pmGallery.activeIndex;

    index++;

    if (index <= countSlides - 1) {
        changeIndex(pmGallery, index);
    }

    if (optionLoop && index === countSlides) {
        index = 0;
        changeIndex(pmGallery, index);
    }
}

export default nextIndex;