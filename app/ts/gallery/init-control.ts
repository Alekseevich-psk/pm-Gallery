import { Options } from "html-webpack-plugin";

export default function initControl(wrapper: Element, options: Options) {
    const pmGalleryInnerPicture = wrapper.querySelector('.pm-gallery__inner--picture') as Element;

    const controlElements: string = `    
    <div class="pm-gallery__control">
        <div class="pm-gallery__arrows">
            <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>
            <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>
        </div>
        <div class="pm-gallery__btn-size"></div>
    </div>`;

    pmGalleryInnerPicture.insertAdjacentHTML('afterbegin', controlElements);

    const pmGalleryWrapperControl = wrapper.querySelector('.pm-gallery__control') as Element;
    const pmGalleryBtnSize = wrapper.querySelector('.pm-gallery__btn-size') as Element;

    if (!options.fullScreenMode) pmGalleryBtnSize.classList.add('hide');

    let btnPrevSlide: Element;
    let btnNextSlide: Element;

    if (options.navigation?.elBtnPrev && options.navigation?.elBtnNext) {
        btnPrevSlide = document.querySelector(options.navigation.elBtnPrev);
        btnNextSlide = document.querySelector(options.navigation.elBtnNext);
        pmGalleryWrapperControl.classList.add('hide-arrows');
    } else {
        btnPrevSlide = wrapper.querySelector('.pm-gallery__arrow--prev');
        btnNextSlide = wrapper.querySelector('.pm-gallery__arrow--next');
    }

    btnPrevSlide.addEventListener('click', function () {
        wrapper.dispatchEvent(new CustomEvent("changeSlide", {
            detail: { btn: "prev" }
        }));
    })

    btnNextSlide.addEventListener('click', function () {
        wrapper.dispatchEvent(new CustomEvent("changeSlide", {
            detail: { btn: "next" }
        }));
    })

    pmGalleryBtnSize.addEventListener('click', () => {
        wrapper.classList.toggle('full-screen');
    })

}