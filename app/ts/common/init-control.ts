import { Options } from '../types/options';
import { ArrowsGallery } from '../types/arrows-gallery';

export default function initControl(wrapper: Element, options: Options): Object {

    const controlElements: string = `    
    <div class="pm-gallery__control">
        <div class="pm-gallery__arrows">
            <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>
            <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>
        </div>
        <div class="pm-gallery__btn-size"></div>
    </div>`;

    const pmGalleryInnerPicture = wrapper.querySelector('.pm-gallery__inner--picture') as Element;
    if (!pmGalleryInnerPicture) return;

    let arrows: ArrowsGallery = {};

    pmGalleryInnerPicture.insertAdjacentHTML('afterbegin', controlElements);

    const pmGalleryWrapperControl = wrapper.querySelector('.pm-gallery__control') as Element;
    const pmGalleryBtnSize = wrapper.querySelector('.pm-gallery__btn-size') as Element;

    if (!options.fullScreenMode) pmGalleryBtnSize.classList.add('hide');
    pmGalleryBtnSize.addEventListener('click', openFullScreen);

    window.addEventListener("keydown", (event) => {
        if (event.key === 'Escape') closeFullScreen();
    });

    if (options.navigation?.elBtnPrev && options.navigation?.elBtnNext) {
        let elemPrev = document.querySelector(options.navigation.elBtnPrev);
        let elemNext = document.querySelector(options.navigation.elBtnNext);

        if (elemPrev) {
            arrows.userBtnPrev = elemPrev;
            elemPrev.addEventListener('click', () => createEventChangeSlide('prev'));
        }

        if (elemNext) {
            arrows.userBtnNext = elemNext;
            elemNext.addEventListener('click', () => createEventChangeSlide('next'));
        }

        pmGalleryWrapperControl.classList.add('hide-arrows');
    }

    let elemPrevDef = wrapper.querySelector('.pm-gallery__arrow--prev');
    let elemNextDef = wrapper.querySelector('.pm-gallery__arrow--next');

    if (elemPrevDef) {
        arrows.defBtnPrev = elemPrevDef;
        elemPrevDef.addEventListener('click', () => createEventChangeSlide('prev'));
    }
    
    if (elemNextDef) {
        arrows.defBtnNext = elemNextDef;
        elemNextDef.addEventListener('click', () => createEventChangeSlide('next'));
    }

    function createEventChangeSlide(motion: string) {
        wrapper.dispatchEvent(new CustomEvent("changeSlide", {
            detail: { btn: (motion === 'prev') ? 'prev' : 'next' }
        }));
    }

    function openFullScreen() {
        if (wrapper.classList.contains('full-screen')) return closeFullScreen();
        wrapper.classList.add('full-screen');
        document.body.style.overflow = 'hidden';
    }

    function closeFullScreen() {
        if (wrapper.classList.contains('full-screen')) {
            wrapper.classList.remove('full-screen');
            return document.body.style.overflow = '';
        }
    }

    return arrows;
}