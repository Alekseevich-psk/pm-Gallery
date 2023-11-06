import pmgClasses from "../../setting/pmgClasses";
import onFullScreen from "../../event/on-full-screen";

function fullScreen(pmGallery: any) {
    const body = document.querySelector('body');
    const wrapper = pmGallery.wrapper;

    pmGallery.fullScreen = pmGallery.fullScreen ? false : true;

    wrapper.classList.toggle(pmgClasses['fullScreen']);
    body.classList.toggle(pmgClasses['overflow']);
    onFullScreen(pmGallery, pmGallery.fullScreen);
}

export default fullScreen;