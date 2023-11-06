import pmgClasses from "../../core/setting/pmgClasses";
import getSizeElement from "../../helpers/get-size-element";

function positionHorizontal(pmGallery: any, position: string) {
    const sizeWrapper = getSizeElement(pmGallery.wrapper);
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    innerPreviews.style.display = 'block';

    if (position === pmgClasses['posPreviewsTop']) {
        innerPreviews.style.top = 0;
        innerPreviews.style.bottom = 'auto';

        innerPicture.style.top = (pmGallery.slideHeight + pmGallery.spaceBetween) + 'px';
        innerPicture.style.bottom = 0;
    }

    if (position === pmgClasses['posPreviewsBottom']) {
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
    innerPicture.style.height = (sizeWrapper.height - pmGallery.slideHeight - pmGallery.spaceBetween) + 'px';

    track.className = '';
    track.classList.add(pmgClasses["track"]);
    track.classList.add(pmgClasses["horizontal"]);

}

export default positionHorizontal;