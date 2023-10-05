import pmgClasses from "../types/pmgClasses";
import resizeWindow from "./resize-window";

function fullScreen(pmGallery: any) {

    const wrapper = pmGallery.wrapper;
    const body = document.querySelector('body');

    let flagFullScreen = false;

    pmGallery.btnScreen.addEventListener('click', () => {
        wrapper.classList.toggle(pmgClasses['fullScreen']);
        body.classList.toggle(pmgClasses['overflow']);

        (flagFullScreen) ? offFullScreen() : onFullScreen();

        pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });

    function onFullScreen() {
        resizeWindow(pmGallery);
        flagFullScreen = true;
    }

    function offFullScreen() {
        resizeWindow(pmGallery);
        flagFullScreen = false;
    }

}

export default fullScreen;