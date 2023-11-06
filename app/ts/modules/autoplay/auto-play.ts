import nextIndex from "../../core/modules/change-index/next-index";

function autoPlay(pmGallery: any, speed: number) {
    const optionLoop = pmGallery.initOptions.loop;
    const countSlides = pmGallery.countSlides - 1;

    pmGallery.autoPlayTimerId = setTimeout(() => {
        nextIndex(pmGallery);

        if (!optionLoop && pmGallery.activeIndex === countSlides) {
            clearTimeout(pmGallery.autoPlayTimerId);
        }

    }, speed);

    return { autoPlayTimerId: pmGallery.autoPlayTimerId };
}

export default autoPlay;