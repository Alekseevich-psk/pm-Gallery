import pmgClasses from "../../setting/pmgClasses";
import initPosPreviews from "../../previews/position-previews/init-position-previews";
import getOptionsBreakpoints from "../../helpers/get-options-breakpoints";

function fullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    const wrapper = pmGallery.wrapper;

    (pmGallery.fullScreen) ? pmGallery.fullScreen = false : pmGallery.fullScreen = true;

    wrapper.classList.toggle(pmgClasses['fullScreen']);
    body.classList.toggle(pmgClasses['overflow']);
    
    getOptionsBreakpoints(pmGallery);
    initPosPreviews(pmGallery);

    wrapper.dispatchEvent(new CustomEvent("fullScreen", {
        detail: { fullScreen: pmGallery.fullScreen }
    }));

}

export default fullScreen;