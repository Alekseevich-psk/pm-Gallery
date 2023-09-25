import positionPreviewsRight from "./position-right";
import positionPreviewsLeft from "./position-left";
import positionPreviewsTop from "./position-top";
import positionPreviewsBottom from "./position-bottom";

function positionPreviews(pmGallery: any) {
    const positionPreviews = pmGallery.initOptions.positionPreviews;
    const innerPreviews = pmGallery.innerPreviews as HTMLElement;
    const innerPicture = pmGallery.innerPicture as HTMLElement;

    switch (positionPreviews) {
        case 'left':
            positionPreviewsLeft(pmGallery, innerPreviews, innerPicture);
            break;
        case 'right':
            positionPreviewsRight(pmGallery, innerPreviews, innerPicture);
            break;
        case 'top':
            positionPreviewsTop(pmGallery, innerPreviews, innerPicture);
            break;
        case 'bottom':
            positionPreviewsBottom(pmGallery, innerPreviews, innerPicture);
            break;

        default:
            positionPreviewsLeft(pmGallery, innerPreviews, innerPicture);
            break;
    }

}

export default positionPreviews;