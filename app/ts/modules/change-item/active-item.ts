import pmGalleryClasses from "../../types/pmgClasses";
import changeMainPicture from "./change-main-picture";
import changeActivePreview from "./change-active-preview";

function activeItem(pmGallery: any) {
    const controls = pmGallery.controls;
    const previews = pmGallery.previews;

    const btnArrowPrev = controls.querySelector('.' + pmGalleryClasses['btnPrev']);
    const btnArrowNext = controls.querySelector('.' + pmGalleryClasses['btnNext']);

    let index: number = 0;
    let oldIndex: number = 0;

    // swipe
    const minDistance = 30;
    let xTouchStart: number = null;
    let xTouchEnd: number = null;

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];

        element.addEventListener('click', () => {
            index = i;
            eventChangeIndex();
        })
    };

    function prevIndex() {
        if (index >= 1) {
            index--;
        } else {
            index = 0;
        }

        eventChangeIndex();
    }

    function nextIndex() {
        if (index < pmGallery.previews.length - 1) {
            index++;
        } else {
            index = pmGallery.previews.length - 1;
        }

        eventChangeIndex();
    }

    function eventChangeIndex() {
        pmGallery.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex", {
            detail: { activeIndex: index }
        }));

        changeMainPicture(pmGallery, index);
        changeActivePreview(pmGallery, index, oldIndex);
        oldIndex = index;
    }

    btnArrowPrev.addEventListener('click', prevIndex);
    btnArrowNext.addEventListener('click', nextIndex);

    pmGallery.innerPreviews.addEventListener('touchstart', function (e: TouchEvent) {
        xTouchStart = e.targetTouches[0].clientX;
    });

    pmGallery.innerPreviews.addEventListener('touchend', (e: TouchEvent) => {
        xTouchEnd = e.changedTouches[0].clientX;
        if ((Math.abs(xTouchStart - xTouchEnd)) <= minDistance) return;

        if(xTouchStart < xTouchEnd) prevIndex();
        if(xTouchStart > xTouchEnd) nextIndex();
    });

    return { activeIndex: index };
}

export default activeItem;