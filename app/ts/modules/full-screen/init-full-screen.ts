import pmGalleryClasses from "../../core/setting/pmgClasses";

function initFullScreen(pmGallery: any) {
    const optionFullScreen = pmGallery.initOptions.fullScreen;
    const hasHideClass = pmGallery.pagination.classList.contains('hide');

    
    if (optionFullScreen) {
        if (hasHideClass) {
            pmGallery.btnScreen.classList.remove('hide');
        }
    } else {
        if (!hasHideClass) {
            pmGallery.btnScreen.classList.add('hide');
        }
    }
}

export default initFullScreen;