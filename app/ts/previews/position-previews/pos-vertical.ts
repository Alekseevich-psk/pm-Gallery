import pmGalleryClasses from "../../core/setting/pmgClasses";
import getSizeElement from "../../helpers/get-size-element";

function positionVertical(pmGallery: any, position: string) {
    const sizeWrapper = getSizeElement(pmGallery.wrapper);
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;
    const sbFullScreen = pmGallery.fullScreen ? pmGallery.spaceBetween : 0;
    innerPreviews.style.display = 'block';

    if (position === pmGalleryClasses['posPreviewsLeft']) {
        innerPreviews.style.left = (0 + sbFullScreen) + 'px';
        innerPreviews.style.right = 'auto';
        innerPicture.style.left = (pmGallery.previewWidth + pmGallery.spaceBetween + sbFullScreen) + 'px';
        innerPicture.style.right = 'auto';
    }

    if (position === pmGalleryClasses['posPreviewsRight']) {
        innerPreviews.style.left = 'auto';
        innerPreviews.style.right = (0 + sbFullScreen) + 'px';
        innerPicture.style.left = 0;
        innerPicture.style.right = 'auto';
    }

    innerPreviews.style.top = '0';
    innerPreviews.style.bottom = 'auto';

    innerPreviews.style.width = pmGallery.previewWidth + 'px';
    innerPreviews.style.height = sizeWrapper.height + 'px';

    innerPicture.style.top = 0;
    innerPicture.style.bottom = 'auto';

    innerPicture.style.width = (sizeWrapper.width - pmGallery.previewWidth - pmGallery.spaceBetween - sbFullScreen) + 'px';
    innerPicture.style.height = sizeWrapper.height + 'px';

    track.className = '';
    track.classList.add(pmGalleryClasses["track"]);
    track.classList.add(pmGalleryClasses["vertical"]);
}

export default positionVertical;