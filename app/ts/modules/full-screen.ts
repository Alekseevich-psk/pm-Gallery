import pmgClasses from "../types/pmgClasses";
import resizeWindow from "./resize-window";

function fullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    let flagFullScreen = false;

    pmGallery.btnScreen.addEventListener('click', () => {

        (!flagFullScreen) ? flagFullScreen = true : flagFullScreen = false;

        pmGallery.wrapper.classList.toggle(pmgClasses['fullScreen']);
        body.classList.toggle(pmgClasses['overflow']);

        pmGallery.fullScreen = flagFullScreen;
        resizeWindow(pmGallery);

        pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });
}

export default fullScreen;