import pmGalleryClasses from "../../types/pmgClasses";
import positionVertical from "./position-vertical";
import positionHorizontal from "./position-horizontal";

function positionPreviews(pmGallery: any, position: string = pmGallery.initOptions.positionPreviews) {

    switch (position) {
        case pmGalleryClasses['posPreviewsLeft']:
            positionVertical(pmGallery, pmGalleryClasses['posPreviewsLeft']);
            break;
        case pmGalleryClasses['posPreviewsRight']:
            positionVertical(pmGallery, pmGalleryClasses['posPreviewsRight']);
            break;
        case pmGalleryClasses['posPreviewsTop']:
            positionHorizontal(pmGallery, pmGalleryClasses['posPreviewsTop']);
            break;
        case pmGalleryClasses['posPreviewsBottom']:
            positionHorizontal(pmGallery, pmGalleryClasses['posPreviewsBottom']);
            break;

        default:
            positionVertical(pmGallery, pmGalleryClasses['posPreviewsLeft']);
            break;
    }

}

export default positionPreviews;