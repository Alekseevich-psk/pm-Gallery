import pmGalleryClasses from "../../types/pmgClasses";

function positionPreviewsBottom(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    innerPreviews.style.left = 0 + 'px';
    innerPreviews.style.bottom = 0 + 'px';
    innerPreviews.style.top = 'auto';
    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = pmGallery.slideHeight + 'px';

    innerPicture.style.left = 0 + 'px';
    innerPicture.style.top = 0 + 'px';
    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = pmGallery.wrapperHeight - pmGallery.slideHeight + 'px';

    track.classList.add(pmGalleryClasses['horizontal']);
}

export default positionPreviewsBottom;