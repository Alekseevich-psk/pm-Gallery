interface UserControls {
    btnPrev?: Element,
    btnNext?: Element,
    btnScreen?: Element
}

function getUserControls(pmGallery: any) {

    const controls = pmGallery.initOptions.controls;
    if (!controls) return;

    const res: UserControls = {};

    const btnPrev = document.querySelector(controls.btnPrev);
    const btnNext = document.querySelector(controls.btnNext);
    const btnFullScreen = document.querySelector(controls.btnFullScreen);

    if (btnPrev) {

        if (pmGallery.arrowsSlider.defBtnPrev) {
            pmGallery.arrowsSlider.defBtnPrev.classList.add('user-hide');
        };

        res.btnPrev = btnPrev;
    }


    if (btnNext) {

        if (pmGallery.arrowsSlider.defBtnNext) {
            pmGallery.arrowsSlider.defBtnNext.classList.add('user-hide');
        };

        res.btnNext = btnNext;
    }


    if (btnFullScreen) {

        if (pmGallery.btnScreen) {
            pmGallery.btnScreen.classList.add('user-hide');
        };

        res.btnScreen = btnFullScreen;
    }

    pmGallery.userControls = res;

}

export default getUserControls;