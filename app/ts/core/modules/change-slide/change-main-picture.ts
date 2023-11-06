import animationMainSlider from "../animations-slide/anim-main-slider";

function changeMainPicture(pmGallery: any, index: number) {
    const picture = pmGallery.mainPicture;
    const preview = pmGallery.previews[index].querySelector('img');

    const previewSrc = preview.src;
    const largePicture = preview.getAttribute('data-src');

    picture.src = largePicture ? largePicture : previewSrc;
    animationMainSlider(pmGallery, preview);
}

export default changeMainPicture;