import { Options } from "../types/options";

export default function createMainPicture(wrapper: Element, paramForMainPicture: string, options: Options) {
    const pmGalleryInnerPicture = wrapper.querySelector('.pm-gallery__inner--picture') as Element;
    if (!pmGalleryInnerPicture) return;

    const animClass = (!options.animationSlide || options.animationSlide === 'none') ? '' : options.animationSlide;

    const classForMainPicture = paramForMainPicture.substring(1);
    const mainPicture: string = `<img src="./" class="${classForMainPicture} ${animClass} animation-slide" alt="">`;
    pmGalleryInnerPicture.insertAdjacentHTML('afterbegin', mainPicture);
}