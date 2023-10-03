import pmGalleryClasses from "../../types/pmgClasses";

function positionPreviewsLeft(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    innerPreviews.style.right = 'auto';
    innerPreviews.style.left = '0';
    innerPreviews.style.width = pmGallery.slideWidth + 'px';

    innerPicture.style.left = pmGallery.slideWidth + 'px';
    innerPicture.style.width = pmGallery.wrapperWidth - pmGallery.slideWidth + 'px';

    track.classList.add(pmGalleryClasses["vertical"]);
}

export default positionPreviewsLeft;