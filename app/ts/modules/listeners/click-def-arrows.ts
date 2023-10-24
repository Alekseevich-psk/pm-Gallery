import prevIndex from "../change-index/prev-index";
import nextIndex from "../change-index/next-index";

function clickDefArrows(pmGallery: any) {

    pmGallery.arrowsSlider.defBtnPrev.addEventListener('click', () => {
        prevIndex(pmGallery);
    });

    pmGallery.arrowsSlider.defBtnNext.addEventListener('click', () => {
        nextIndex(pmGallery);
    });

}

export default clickDefArrows;