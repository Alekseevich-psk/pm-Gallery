import defOptions from "../def-options";

function positionPreviewsLeft(pmGallery: any, innerPreviews: HTMLElement, innerPicture: HTMLElement) {
    innerPreviews.style.left = '0';
    innerPreviews.style.right = 'auto';
    innerPreviews.style.width = defOptions.widthSlide + 'px';

    innerPicture.style.left = defOptions.widthSlide + 'px';
    innerPicture.style.width = pmGallery.wrapperWidth - defOptions.widthSlide + 'px';
}

export default positionPreviewsLeft;