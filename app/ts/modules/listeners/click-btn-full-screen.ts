import pmgClasses from "../../setting/pmgClasses";
import initPosPreviews from "../../previews/position-previews/init-position-previews";
import getOptionsBreakpoints from "../../helpers/get-options-breakpoints";

function clickBtnFullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    const wrapper = pmGallery.wrapper;

    let flagFullScreen = false;

    pmGallery.btnScreen.addEventListener('click', () => {

        (!flagFullScreen) ? flagFullScreen = true : flagFullScreen = false;

        wrapper.classList.toggle(pmgClasses['fullScreen']);
        body.classList.toggle(pmgClasses['overflow']);

        pmGallery.fullScreen = flagFullScreen;

        getOptionsBreakpoints(pmGallery);
        initPosPreviews(pmGallery);

        wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });
}

export default clickBtnFullScreen;