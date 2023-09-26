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

    for (let i = 0; i < previews.length; i++) {
        const element = previews[i];

        element.addEventListener('click', () => {
            index = i;
            eventChangeIndex();
        })
    };

    btnArrowPrev.addEventListener('click', () => {
        if (index >= 1) {
            index--;
        } else {
            index = 0;
        }

        eventChangeIndex();
    });

    btnArrowNext.addEventListener('click', () => {
        if (index < pmGallery.previews.length - 1) {
            index++;
        } else {
            index = pmGallery.previews.length - 1;
        }

        eventChangeIndex();
    });

    function eventChangeIndex() {
        pmGallery.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex", {
            detail: { activeIndex: index }
        }));

        changeMainPicture(pmGallery, index);
        changeActivePreview(pmGallery, index, oldIndex);
        oldIndex = index;
    }

    return { activeIndex: index };
}

export default activeItem;