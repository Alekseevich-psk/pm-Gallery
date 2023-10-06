import pmgClasses from "../../setting/pmgClasses";
import prevIndex from "../change-index/prev-index";
import nextIndex from "../change-index/next-index";

function defArrows(pmGallery: any) {
    const controls = pmGallery.controls;
    const btnArrowPrev = controls.querySelector('.' + pmgClasses['btnPrev']);
    const btnArrowNext = controls.querySelector('.' + pmgClasses['btnNext']);

    btnArrowPrev.addEventListener('click', () => {
        prevIndex(pmGallery);
    });

    btnArrowNext.addEventListener('click', () => {
        nextIndex(pmGallery);
    });

}

export default defArrows;