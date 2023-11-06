import onChangeIndex from "../../event/on-change-index";

function nextIndex(pmGallery: any) {
    const optionLoop = pmGallery.initOptions.loop;
    const countSlides = pmGallery.countSlides;
    let index = pmGallery.activeIndex;

    index++;

    if (index <= countSlides - 1) {
        onChangeIndex(pmGallery, index);
    }

    if (optionLoop && index === countSlides) {
        index = 0;
        onChangeIndex(pmGallery, index);
    }
}

export default nextIndex;