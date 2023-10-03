import pmgClasses from "../types/pmgClasses";
import getPositionPreviews from "./position-previews/position-previews";
import getCountPreSlide from "./count-pre-slides";

function fullScreen(pmGallery: any) {
    const wrapper = pmGallery.wrapper;
    const initCountPreSlides = pmGallery.initOptions.countPreSlides;
    const initPositionPreviews = pmGallery.initOptions.positionPreviews;
    const body = document.querySelector('body');

    const btnScreen = wrapper.querySelector('.' + pmgClasses['btnScreen']);
    let flagFullScreen = false;

    btnScreen.addEventListener('click', () => {
        wrapper.classList.toggle(pmgClasses['fullScreen']);
        (flagFullScreen) ? offFullScreen() : onFullScreen();

        pmGallery = Object.assign(pmGallery, getCountPreSlide(pmGallery));
        getPositionPreviews(pmGallery);

        pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });

    function onFullScreen() {
        pmGallery.initOptions.countPreSlides = 8;
        pmGallery.initOptions.positionPreviews = pmgClasses['posPreviewsBottom'];
        pmGallery.posPreviews = pmgClasses['horizontal'];
        flagFullScreen = true;

        if (!body.classList.contains(pmgClasses['overflow'])) {
            body.classList.add(pmgClasses['overflow']);
        }
    }

    function offFullScreen() {
        pmGallery.initOptions.countPreSlides = initCountPreSlides;
        pmGallery.initOptions.positionPreviews = initPositionPreviews;
        pmGallery.posPreviews = pmgClasses['vertical'];
        flagFullScreen = false;

        if (body.classList.contains(pmgClasses['overflow'])) {
            body.classList.remove(pmgClasses['overflow']);
        }
    }

}

export default fullScreen;