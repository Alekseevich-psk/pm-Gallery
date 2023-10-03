import pmGalleryClasses from "../../types/pmgClasses";
import positionHorizontal from "./position-horizontal";
import positionVertical from "./position-vertical";

function positionPreviews(pmGallery: any, position: string = pmGallery.initOptions.positionPreviews) {

    switch (position) {
        case pmGalleryClasses['posPreviewsLeft']:
            positionHorizontal(pmGallery, pmGalleryClasses['posPreviewsLeft']);
            break;
        case pmGalleryClasses['posPreviewsRight']:
            positionHorizontal(pmGallery, pmGalleryClasses['posPreviewsRight']);
            break;
        case pmGalleryClasses['posPreviewsTop']:
            positionVertical(pmGallery, pmGalleryClasses['posPreviewsTop']);
            break;
        case pmGalleryClasses['posPreviewsBottom']:
            positionVertical(pmGallery, pmGalleryClasses['posPreviewsBottom']);
            break;

        default:
            positionHorizontal(pmGallery);
            break;
    }

}

export default positionPreviews;