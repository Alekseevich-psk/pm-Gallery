import pmGalleryClasses from "../../types/pmgClasses";
import getSizeElement from "../../helpers/get-size-element";

function positionHorizontal(pmGallery: any, position: string) {
    const sizeWrapper = getSizeElement(pmGallery.wrapper);
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    if (position === pmGalleryClasses['posPreviewsTop']) {
        innerPreviews.style.top = 0;
        innerPreviews.style.bottom = 'auto';

        innerPicture.style.top = pmGallery.slideHeight + 'px';
        innerPicture.style.bottom = 0;
    }

    if (position === pmGalleryClasses['posPreviewsBottom']) {
        innerPreviews.style.top = 'auto';
        innerPreviews.style.bottom = 0;

        innerPicture.style.top = 0;
        innerPicture.style.bottom = 'auto';
    }

    innerPreviews.style.left = 0;
    innerPreviews.style.right = 'auto';

    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = pmGallery.slideHeight + 'px';

    innerPicture.style.left = 0;
    innerPicture.style.right = 'auto';

    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = sizeWrapper.height - pmGallery.slideHeight + 'px';

    track.className = '';
    track.classList.add(pmGalleryClasses["track"]);
    track.classList.add(pmGalleryClasses["horizontal"]);

}

export default positionHorizontal;