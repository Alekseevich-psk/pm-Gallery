import defOptions from "../def-options";
import pmGalleryClasses from "../../types/pmgClasses";

function positionPreviewsTop(pmGallery: any, innerPreviews: HTMLElement, innerPicture: HTMLElement) {
    innerPreviews.style.left = 0 + 'px';
    innerPreviews.style.top = 0 + 'px';
    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = defOptions.heightSlide + 'px';

    innerPicture.style.left = 0 + 'px';
    innerPicture.style.top = defOptions.heightSlide + 'px';
    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = pmGallery.wrapperHeight - defOptions.heightSlide + 'px';

    pmGallery.track.classList.add('horizontal');
}

export default positionPreviewsTop;