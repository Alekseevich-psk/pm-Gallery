import { pmgAnimSlide } from "../../../types/pmgAnimSlide";

function animationMainSlider(pmGallery: any, slide: HTMLElement) {
    const picture = pmGallery.mainPicture;
    const typeAnim = pmGallery.initOptions.animSlide;
    
    const checkAnimationType = pmgAnimSlide.includes(typeAnim);

    if (checkAnimationType) {
        picture.classList.add(typeAnim);

        setTimeout(() => {
            picture.classList.remove(typeAnim);
        }, 500);
    }
}

export default animationMainSlider;