import onChangeIndex from "../../event/on-change-index";

function prevIndex(pmGallery: any) {
    const optionLoop = pmGallery.initOptions.loop;
    const countSlides = pmGallery.countSlides;
    let index = pmGallery.activeIndex;

    index--;

    if (index >= 0) {
        onChangeIndex(pmGallery, index);
    }

    if (optionLoop && index < 0) {
        index = countSlides - 1;
        onChangeIndex(pmGallery, index);
    }
}

export default prevIndex;