import defOptions from "./def-options";

function positionPreviews(pmGallery: any) {
    const positionPreviews = pmGallery.initOptions.positionPreviews;
    const innerPreviews = pmGallery.innerPreviews as HTMLElement;
    const innerPicture = pmGallery.innerPicture as HTMLElement;

    if (positionPreviews === 'right') {
        innerPreviews.style.left = 'auto';
        innerPreviews.style.right = 0 + 'px';
        
        innerPicture.style.left = 0 + 'px';
        innerPicture.style.width = pmGallery.wrapperWidth - defOptions.widthSlide + 'px';
    }

}

export default positionPreviews;