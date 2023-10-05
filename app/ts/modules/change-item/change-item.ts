import pmGalleryClasses from "../../types/pmgClasses";

import nextItem from "./next-item";
import prevItem from "./prev-item";

function changeItem(pmGallery: any) {
    const controls = pmGallery.controls;
    const previews = pmGallery.previews;

    const btnArrowPrev = controls.querySelector('.' + pmGalleryClasses['btnPrev']);
    const btnArrowNext = controls.querySelector('.' + pmGalleryClasses['btnNext']);

    let index: number = 0;
    let oldIndex: number = 0;

    // swipe
    // const minDistance = 30;
    // let xTouchStart: number = null;
    // let xTouchEnd: number = null;

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];

        element.addEventListener('click', () => {
            index = i;
        })
    };


    btnArrowPrev.addEventListener('click', () => {
        prevItem(pmGallery);
    });

    btnArrowNext.addEventListener('click', () => {
        nextItem(pmGallery);
    });

    // pmGallery.innerPreviews.addEventListener('touchstart', function (e: TouchEvent) {
    //     xTouchStart = e.targetTouches[0].clientX;
    // });

    // pmGallery.innerPreviews.addEventListener('touchend', (e: TouchEvent) => {
    //     xTouchEnd = e.changedTouches[0].clientX;
    //     if ((Math.abs(xTouchStart - xTouchEnd)) <= minDistance) return;

    //     if (xTouchStart < xTouchEnd) prevIndex();
    //     // if (xTouchStart > xTouchEnd) nextIndex();
    // });

    return { activeIndex: index };
}

export default changeItem;