import { Options } from './types/options';
import initControl from './common/init-control';
import createMainPicture from './common/create-main-picture';
import createPagination from './common/create-pagination';
import swipe from './common/swipe';
import orientationPreviews from './mode/orientation-previews';

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
    private previews: NodeListOf<Element>;
    private pmGalleryInnerPicture: Element;
    private pmGalleryInnerPreviews: Element;
    private paginationItems: NodeListOf<Element>;

    private flagPagination: boolean = false;

    constructor(wrapper: string, options: Options) {
        this.initGallery(wrapper, options);
    }

    private initGallery(wrapper: string, options: Options) {
        if (!this.hasElements(wrapper, options)) return;

        this.initActiveSlide(options);

        initControl(this.wrapper, options);
        orientationPreviews(this.wrapper, options);
        swipe(this.wrapper, options);

        this.wrapper.addEventListener('changeSlide', (event: CustomEvent) => {
            (event.detail.btn === 'prev') ? this.prevSlide() : this.nextSlide();
            this.autoPlay(null);
        })

        this.pmGalleryInnerPicture.addEventListener('changeSlide', (event: CustomEvent) => {
            this.setActiveSlide(this.activeSlide, event.detail.activeSlide);
            this.autoPlay(null);
        })

        if (options.autoPlay) this.autoPlay(options.autoPlay);
    }

    private autoPlay(speed: number) {
        if (speed === null) return clearInterval(this.timerId);
        this.timerId = setInterval(() => this.nextSlide(), speed);
    }

    private scrollWrapper(index: number, wrapper: Element) {
        let el = this.previews[this.activeSlide] as HTMLElement;
        wrapper.scrollTop = el.offsetHeight * (index - 1);
    }

    private prevSlide() {
        this.setActiveSlide(this.activeSlide, this.activeSlide - 1);
    }

    private nextSlide() {
        this.setActiveSlide(this.activeSlide, this.activeSlide + 1);
    }

    private initActiveSlide(options: Options) {
        if (options.activeSlide &&
            options.activeSlide < this.previews.length)
            this.activeSlide = options.activeSlide;
        this.previews[this.activeSlide].classList.add(this.activeClass);
        this.getActiveSlide(this.previews);
        this.onMainPicture(this.activeSlide);
    }

    private getActiveSlide(elements: NodeListOf<Element>) {
        elements.forEach((el, index) => {
            el.addEventListener('click', () => {
                this.setActiveSlide(this.activeSlide, index);
                this.autoPlay(null);
            })
        });
    }

    private setActiveSlide(oldIndex: number, newIndex: number) {
        if (newIndex < 0) newIndex = this.previews.length - 1;
        if (newIndex > this.previews.length - 1) newIndex = 0;

        const oldSlide = this.previews[oldIndex];
        const newSlide = this.previews[newIndex];

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
        const srcImg = this.previews[index].querySelector('img');
        this.mainPicture.src = srcImg.src;
    }

    private hasElements(wrapper: string, options: Options): boolean {
        this.wrapper = document.querySelector(wrapper) as HTMLFormElement;
        this.pmGalleryWrapper = this.wrapper.querySelector(this.pmGalleryWrapperEl);

        if (this.wrapper === null) {
            console.error('Not found wrapper element');
            return false;
        }

        if(this.pmGalleryWrapper === null) {
            console.error('Not found ".main__wrapper" element');
            return false;
        }

        if (options.elementForPreviews) {
            this.previews = this.wrapper.querySelectorAll(options.elementForPreviews);
        } else {
            this.previews = this.wrapper.querySelectorAll(this.previewPictureEl);
        }

        if (this.previews.length === 0) {
            console.error('Not found previews elements');
            return false;
        }

        this.pmGalleryInnerPicture = this.wrapper.querySelector(this.pmGalleryInnerPictureEl);
        this.pmGalleryInnerPreviews = this.wrapper.querySelector(this.pmGalleryInnerPreviewsEl);

        // Create main picture for gallery
        createMainPicture(this.wrapper, this.mainPictureEl);
        this.mainPicture = this.wrapper.querySelector(this.mainPictureEl);

        // Pagination
        if (options.pagination) {
            this.paginationItems = createPagination(this.pmGalleryInnerPicture, this.previews.length, options.activeSlide);
            this.flagPagination = true;
        };



        this.wrapper.classList.add('active-gallery');
        return this.init = true;
    }


}

export default PmGallery;