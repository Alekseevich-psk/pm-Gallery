import defOptions from "../def-options";

function positionPreviewsRight(pmGallery: any, innerPreviews: HTMLElement, innerPicture: HTMLElement) {
    innerPreviews.style.left = 'auto';
    innerPreviews.style.right = 0 + 'px';
    innerPreviews.style.width = defOptions.widthSlide + 'px';
    
    innerPicture.style.left = 0 + 'px';
    innerPicture.style.width = pmGallery.wrapperWidth - defOptions.widthSlide + 'px';
}

export default positionPreviewsRight;