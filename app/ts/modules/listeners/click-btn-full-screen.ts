import pmgClasses from "../../setting/pmgClasses";
import initPosPreviews from "../../previews/position-previews/init-position-previews";

function clickBtnFullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    let flagFullScreen = false;

    pmGallery.btnScreen.addEventListener('click', () => {

        (!flagFullScreen) ? flagFullScreen = true : flagFullScreen = false;

        pmGallery.wrapper.classList.toggle(pmgClasses['fullScreen']);
        body.classList.toggle(pmgClasses['overflow']);

        pmGallery.fullScreen = flagFullScreen;
        initPosPreviews(pmGallery);

        pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
            detail: { fullScreen: flagFullScreen }
        }));
    });
}

export default clickBtnFullScreen;