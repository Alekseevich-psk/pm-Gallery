import pmGalleryClasses from "../../setting/pmgClasses";
import posVertical from "../position-previews/vertical";
import posHorizontal from "../position-previews/horizontal";
import hidePreviews from "./hide-previews";


function setPosPreviews(pmGallery: any, position: string = pmGallery.initOptions.positionPreviews) {

    const visiblePreviews = pmGallery.initOptions.visiblePreviews;

    if (visiblePreviews) {
        switch (position) {
            case pmGalleryClasses['posPreviewsLeft']:
                posVertical(pmGallery, pmGalleryClasses['posPreviewsLeft']);
                break;
            case pmGalleryClasses['posPreviewsRight']:
                posVertical(pmGallery, pmGalleryClasses['posPreviewsRight']);
                break;
            case pmGalleryClasses['posPreviewsTop']:
                posHorizontal(pmGallery, pmGalleryClasses['posPreviewsTop']);
                break;
            case pmGalleryClasses['posPreviewsBottom']:
                posHorizontal(pmGallery, pmGalleryClasses['posPreviewsBottom']);
                break;

            default:
                posVertical(pmGallery, pmGalleryClasses['posPreviewsLeft']);
                break;
        }
    } else {
        hidePreviews(pmGallery);
    }

}

export default setPosPreviews;