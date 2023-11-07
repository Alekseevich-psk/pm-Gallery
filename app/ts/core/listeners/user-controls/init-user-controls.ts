import pmgClasses from "../../setting/pmgClasses";
import nextIndex from "../../modules/change-index/next-index";
import prevIndex from "../../modules/change-index/prev-index";
import fullScreen from "../../modules/full-screen/full-screen";

function initUserControls(pmGallery: any) {
    const controls = pmGallery.initOptions.controls;
    if (!controls) return;

    const btnPrev = document.querySelector(controls.btnPrev);
    const btnNext = document.querySelector(controls.btnNext);
    const btnFullScreen = document.querySelector(controls.btnFullScreen);

    if (btnPrev) {
        const defBtnPrev = pmGallery.wrapper.querySelector('.' + pmgClasses['btnPrev']);
        defBtnPrev.classList.add('user-hide');

        btnPrev.addEventListener('click', () => {
            prevIndex(pmGallery);
        });
    }

    if (btnNext) {
        const defBtnNext = pmGallery.wrapper.querySelector('.' + pmgClasses['btnNext']);
        defBtnNext.classList.add('user-hide');

        btnNext.addEventListener('click', () => {
            nextIndex(pmGallery);
        });
    }

    if (btnFullScreen) {
        const defBtnScreen = pmGallery.wrapper.querySelector('.' + pmgClasses['btnScreen']);
        defBtnScreen.classList.add('user-hide');

        btnFullScreen.addEventListener('click', () => {
            fullScreen(pmGallery);
        });
    }


}

export default initUserControls;