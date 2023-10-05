import pmgClasses from "../../types/pmgClasses";
import prevItem from "../change-item/prev-item";
import nextItem from "../change-item/next-item";

function defArrows(pmGallery: any) {
    const controls = pmGallery.controls;
    const btnArrowPrev = controls.querySelector('.' + pmgClasses['btnPrev']);
    const btnArrowNext = controls.querySelector('.' + pmgClasses['btnNext']);

    btnArrowPrev.addEventListener('click', () => {
        prevItem(pmGallery);
    });

    btnArrowNext.addEventListener('click', () => {
        nextItem(pmGallery);
    });

}

export default defArrows;