import pmgClasses from "../../core/setting/pmgClasses";
import getSizeElement from "../../helpers/get-size-element";

function positionHorizontal(pmGallery: any, position: string) {
    const sizeWrapper = getSizeElement(pmGallery.wrapper);
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;
    const sbFullScreen = pmGallery.fullScreen ? pmGallery.spaceBetween : 0;

    innerPreviews.style.display = 'block';

    if (position === pmgClasses['posPreviewsTop']) {
        innerPreviews.style.top = (0 + sbFullScreen) + 'px';
        innerPreviews.style.bottom = 'auto';

        innerPicture.style.top = (pmGallery.previewHeight + pmGallery.spaceBetween + sbFullScreen) + 'px';
        innerPicture.style.bottom = 0;
    }

    if (position === pmgClasses['posPreviewsBottom']) {
        innerPreviews.style.top = 'auto';
        innerPreviews.style.bottom = (0 + sbFullScreen) + 'px';
        
        innerPicture.style.top = 0;
        innerPicture.style.bottom = 'auto';
    }

    innerPreviews.style.left = 0;
    innerPreviews.style.right = 'auto';

    innerPreviews.style.width = 100 + '%';
    innerPreviews.style.height = pmGallery.previewHeight + 'px';

    innerPicture.style.left = 0;
    innerPicture.style.right = 'auto';

    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = (sizeWrapper.height - pmGallery.previewHeight - pmGallery.spaceBetween - sbFullScreen) + 'px';

    track.className = '';
    track.classList.add(pmgClasses["track"]);
    track.classList.add(pmgClasses["horizontal"]);

}

export default positionHorizontal;