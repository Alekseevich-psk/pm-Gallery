import { Options } from './types/options';

import initControl from './common/init-control';
import createMainPicture from './common/create-main-picture';
import createPagination from './common/create-pagination';
import swipeOnMainPicture from './common/swipe-on-main-picture';

import positionPreviews from './mode/orientation-previews';
import objectFit from './mode/object-fit';

import { ArrowsGallery } from './types/arrows-gallery';

class PmGallery {

    private activeClass: string = 'active';
    private init: boolean = false;
    private activeSlide: number = 0;
    private timerId: ReturnType<typeof setInterval>;

    private pmGalleryWrapperEl: string = '.pm-gallery__wrapper';
    private pmGalleryInnerPictureEl: string = '.pm-gallery__inner--picture';
    private pmGalleryInnerPreviewsEl: string = '.pm-gallery__inner--previews';

    private previewPictureEl: string = '.pm-gallery__preview-picture';
    private mainPictureEl: string = '.pm-gallery__main-picture';

    private wrapper: Element;
    private pmGalleryWrapper: Element;
    private mainPicture: HTMLImageElement;
    private previewsElements: NodeListOf<Element>;
    private previewsElementsArraySrcImg: string[] = [];
    private pmGalleryInnerPicture: Element;
    private pmGalleryInnerPreviews: Element;
    private paginationItems: NodeListOf<Element>;
    private arrowsGallery: ArrowsGallery;

    private flagPagination: boolean = false;
    private optionGallery: Options;

    constructor(wrapper: string, options: Options) {
        this.optionGallery = options;
        this.initGallery(wrapper, options);
    }

    private initGallery(wrapper: string, options: Options) {
        if (!this.hasElements(wrapper, options)) return;

        this.initActiveSlide(options);

        this.arrowsGallery = initControl(this.wrapper, options);
        positionPreviews(this.wrapper, options);
        swipeOnMainPicture(this.wrapper, options);

        this.wrapper.addEventListener('changeSlide', (event: CustomEvent) => {
            if ((event.detail.btn === 'prev')) this.changeSlide(this.activeSlide, (this.activeSlide - 1));
            if ((event.detail.btn === 'next')) this.changeSlide(this.activeSlide, (this.activeSlide + 1));
            if (event.detail.activeSlide) this.changeSlide(this.activeSlide, event.detail.activeSlide);
            this.autoPlay(null);
        })

        if (options.autoPlay) this.autoPlay(options.autoPlay);
        if (options.objectFit) objectFit(this.wrapper, options);
    }

    private autoPlay(speed: number) {
        if (speed === null) return clearInterval(this.timerId);
        this.timerId = setInterval(() => this.nextSlide(), speed);
    }

    private scrollWrapper(index: number, wrapper: Element) {
        let el = this.previewsElements[this.activeSlide] as HTMLElement;
        wrapper.scrollTop = el.offsetHeight * (index - 1);
    }

    private prevSlide() {
        this.changeSlide(this.activeSlide, this.activeSlide - 1);
    }

    private nextSlide() {
        this.changeSlide(this.activeSlide, this.activeSlide + 1);
    }

    private initActiveSlide(options: Options) {
        if (options.activeSlide &&
            options.activeSlide < this.previewsElements.length)
            this.activeSlide = options.activeSlide;
        this.previewsElements[this.activeSlide].classList.add(this.activeClass);
        this.getActiveSlide(this.previewsElements);
        this.onMainPicture(this.activeSlide);
    }

    private getActiveSlide(elements: NodeListOf<Element>) {
        elements.forEach((el, index) => {
            el.addEventListener('click', () => {
                this.changeSlide(this.activeSlide, index);
                this.autoPlay(null);
            })
        });
    }

    private changeSlide(oldIndex: number, newIndex: number) {

        if (this.optionGallery.loop) {
            if (newIndex < 0) newIndex = this.previewsElements.length - 1;
            if (newIndex > this.previewsElements.length - 1) newIndex = 0;
        } else {
            if (newIndex > this.previewsElements.length - 1) return;
            if (newIndex < 0) return;
        }

        const oldSlide = this.previewsElements[oldIndex];
        const newSlide = this.previewsElements[newIndex];

        if (this.flagPagination) {
            this.paginationItems[oldIndex].classList.remove(this.activeClass);
            this.paginationItems[newIndex].classList.add(this.activeClass);
        }

        if (oldSlide.classList.contains(this.activeClass)) oldSlide.classList.remove(this.activeClass);
        if (!newSlide.classList.contains(this.activeClass)) newSlide.classList.add(this.activeClass);

        this.activeSlide = newIndex;
        this.onMainPicture(this.activeSlide);
        this.scrollWrapper(this.activeSlide, this.pmGalleryInnerPreviews);
    }

    private onMainPicture(index: number) {
        this.mainPicture.src = this.previewsElementsArraySrcImg[index];
        this.mainPicture.style.animation = 'none';
        this.mainPicture.offsetHeight;
        this.mainPicture.style.animation = null;
    }

    private hasElements(wrapper: string, options: Options): boolean {
        this.wrapper = document.querySelector(wrapper) as HTMLFormElement;
        this.pmGalleryWrapper = this.wrapper.querySelector(this.pmGalleryWrapperEl);

        if (this.wrapper === null) {
            console.error('Not found wrapper element');
            return false;
        }

        if (this.pmGalleryWrapper === null) {
            console.error('Not found ".main__wrapper" element');
            return false;
        }

        if (options.elementForPreviews) {
            this.previewsElements = this.wrapper.querySelectorAll(options.elementForPreviews);
        } else {
            this.previewsElements = this.wrapper.querySelectorAll(this.previewPictureEl);
        }

        if (this.previewsElements.length === 0) {
            console.error('Not found previews elements');
            return false;
        }

        // get src previews pictures
        this.previewsElements.forEach(el => this.previewsElementsArraySrcImg.push(el.querySelector('img').src));

        this.pmGalleryInnerPicture = this.wrapper.querySelector(this.pmGalleryInnerPictureEl);
        this.pmGalleryInnerPreviews = this.wrapper.querySelector(this.pmGalleryInnerPreviewsEl);

        // Create main picture for gallery
        createMainPicture(this.wrapper, this.mainPictureEl, options);
        this.mainPicture = this.wrapper.querySelector(this.mainPictureEl);

        // Pagination
        if (options.pagination) {
            this.paginationItems = createPagination(this.pmGalleryInnerPicture, this.previewsElements.length, options.activeSlide, this.wrapper);
            this.flagPagination = true;
        };

        this.wrapper.classList.add('active-gallery');
        return this.init = true;
    }


}

export default PmGallery;