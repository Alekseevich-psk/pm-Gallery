import pmgClasses from "../types/pmgClasses";
import getPositionPreviews from "./position-previews/position-previews";
import getCountPreSlide from "./count-pre-slides";

function fullScreen(pmGallery: any) {
    return;
    const wrapper = pmGallery.wrapper;
    const body = document.querySelector('body');

    const btnScreen = wrapper.querySelector('.' + pmgClasses['btnScreen']);
    let flagFullScreen = false;

    btnScreen.addEventListener('click', () => {
        wrapper.classList.toggle(pmgClasses['fullScreen']);
        body.classList.toggle(pmgClasses['overflow']);

        (flagFullScreen) ? offFullScreen() : onFullScreen();

        pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });

    function onFullScreen() {

        flagFullScreen = true;
    }

    function offFullScreen() {

        flagFullScreen = false;
    }

}

export default fullScreen;