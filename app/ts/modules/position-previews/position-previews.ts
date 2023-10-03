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
            positionPreviewsLeft(pmGallery);
            break;
        case 'right':
            positionPreviewsRight(pmGallery);
            break;
        case 'top':
            positionPreviewsTop(pmGallery);
            break;
        case 'bottom':
            positionPreviewsBottom(pmGallery);
            break;

        default:
            positionPreviewsLeft(pmGallery);
            break;
    }

}

export default positionPreviews;