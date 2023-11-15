import animationMainSlider from "../animations-slide/anim-main-slider";
import checkLoadMainPicture from "../preloader-gallery/check-load-main-picture";

function changeMainPicture(pmGallery: any, index: number) {
    const picture = pmGallery.mainPicture;
    const preview = pmGallery.previews[index].querySelector('img');

    const previewSrc = preview.src;
    const largePicture = preview.getAttribute('data-src');

    checkLoadMainPicture(pmGallery, index);

    picture.src = largePicture ? largePicture : previewSrc;
    animationMainSlider(pmGallery, preview);
}

export default changeMainPicture;