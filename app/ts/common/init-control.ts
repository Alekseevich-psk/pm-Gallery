import { Options } from '../types/options';

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

    if (options.navigation?.elBtnPrev && options.navigation?.elBtnNext) {
        addEventPrevSlide(options.navigation.elBtnPrev);
        addEventNextSlide(options.navigation.elBtnNext);
        pmGalleryWrapperControl.classList.add('hide-arrows');
    }

    addEventPrevSlide('.pm-gallery__arrow--prev');
    addEventNextSlide('.pm-gallery__arrow--next');

    function addEventPrevSlide(el: string) {
        document.querySelector(el).addEventListener('click', function () {
            wrapper.dispatchEvent(new CustomEvent("changeSlide", {
                detail: { btn: "prev" }
            }));
        });
    }

    function addEventNextSlide(el: string) {
        document.querySelector(el).addEventListener('click', function () {
            wrapper.dispatchEvent(new CustomEvent("changeSlide", {
                detail: { btn: "next" }
            }));
        });
    }

    pmGalleryBtnSize.addEventListener('click', () => {
        if (wrapper.classList.contains('full-screen')) {
            wrapper.classList.remove('full-screen');
            document.body.style.overflow = '';
        } else {
            wrapper.classList.add('full-screen');
            document.body.style.overflow = 'hidden';
        }
    })

}