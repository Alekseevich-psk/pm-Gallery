import defOptions from "../def-options";
import pmGalleryClasses from "../../types/pmgClasses";

function positionPreviewsTop(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    innerPreviews.style.left = 0 + 'px';
    innerPreviews.style.top = 0 + 'px';
    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = defOptions.slideHeight + 'px';

    innerPicture.style.left = 0 + 'px';
    innerPicture.style.top = defOptions.slideHeight + 'px';
    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = pmGallery.wrapperHeight - defOptions.slideHeight + 'px';

    track.classList.add(pmGalleryClasses['horizontal']);
}

export default positionPreviewsTop;