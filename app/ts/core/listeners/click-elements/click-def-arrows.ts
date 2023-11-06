import prevIndex from "../../modules/change-index/prev-index";
import nextIndex from "../../modules/change-index/next-index";

function clickDefArrows(pmGallery: any) {

    pmGallery.arrowsSlider.defBtnPrev.addEventListener('click', () => {
        prevIndex(pmGallery);
    });

    pmGallery.arrowsSlider.defBtnNext.addEventListener('click', () => {
        nextIndex(pmGallery);
    });

}

export default clickDefArrows;