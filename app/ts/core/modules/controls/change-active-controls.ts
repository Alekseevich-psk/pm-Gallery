import pmgClasses from "../../setting/pmgClasses";

function changeActiveControls(pmGallery: any, index: number) {
    const optionLoop = pmGallery.initOptions.loop;

    if (optionLoop) return;

    const buttonsPrev = [];
    const buttonsNext = [];
    
    if (pmGallery.userControls?.btnPrev) {
        buttonsPrev.push(pmGallery.userControls.btnPrev);
    }

    if (pmGallery.userControls?.btnNext) {
        buttonsPrev.push(pmGallery.userControls.btnNext);
    }

    buttonsPrev.push(pmGallery.arrowsSlider.defBtnPrev);
    buttonsNext.push(pmGallery.arrowsSlider.defBtnNext);

    const buttons = [...buttonsPrev, ...buttonsNext];
    const disabled = pmgClasses['disabled'];

    if (index > 0 && index < pmGallery.countSlides - 1) {
        buttons.forEach(element => {
            if (element && element.classList.contains(disabled)) {
                element.classList.remove(disabled);
            }
        });
    }

    if (index === 0) {
        buttonsPrev.forEach(element => {
            if (element && !element.classList.contains(disabled)) {
                element.classList.add(disabled);
            }
        });
    }

    if (index === pmGallery.countSlides - 1) {
        buttonsNext.forEach(element => {
            if (element && !element.classList.contains(disabled)) {
                element.classList.add(disabled);
            }
        });
    }


}

export default changeActiveControls;