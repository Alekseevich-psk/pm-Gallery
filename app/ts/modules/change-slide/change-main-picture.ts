import animationMainSlider from "../animations-slide/anim-main-slider";

function changeMainPicture(pmGallery: any, index: number) {
    const picture = pmGallery.mainPicture;
    const preview = pmGallery.previews[index].querySelector('img');
    
    picture.src = preview.src;
    animationMainSlider(pmGallery, preview);
}

export default changeMainPicture;