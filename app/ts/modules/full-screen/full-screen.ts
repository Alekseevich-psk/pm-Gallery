import pmgClasses from "../../setting/pmgClasses";
import initPosPreviews from "../../previews/position-previews/init-position-previews";
import getOptionsBreakpoints from "../../helpers/get-options-breakpoints";
import eventFullScreen from "../../event/event-full-screen";

function fullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    const wrapper = pmGallery.wrapper;

    (pmGallery.fullScreen) ? pmGallery.fullScreen = false : pmGallery.fullScreen = true;

    wrapper.classList.toggle(pmgClasses['fullScreen']);
    body.classList.toggle(pmgClasses['overflow']);
    
    getOptionsBreakpoints(pmGallery);
    initPosPreviews(pmGallery);
    eventFullScreen(pmGallery, pmGallery.fullScreen);
}

export default fullScreen;