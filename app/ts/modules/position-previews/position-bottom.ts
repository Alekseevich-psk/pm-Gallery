import defOptions from "../def-options";
import pmGalleryClasses from "../../types/pmgClasses";

function positionPreviewsBottom(pmGallery: any, innerPreviews: HTMLElement, innerPicture: HTMLElement) {
    const track = pmGallery.wrapper.querySelector('.' + pmGalleryClasses['track']);
    
    innerPreviews.style.left = 0 + 'px';
    innerPreviews.style.bottom = 0 + 'px';
    innerPreviews.style.top = 'auto';
    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = defOptions.heightSlide + 'px';

    innerPicture.style.left = 0 + 'px';
    innerPicture.style.top = 0 + 'px';
    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = pmGallery.wrapperHeight - defOptions.heightSlide + 'px';

    track.classList.add('horizontal');
}

export default positionPreviewsBottom;