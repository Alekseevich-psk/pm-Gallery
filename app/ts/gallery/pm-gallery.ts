import initControl from './init-control';

type Options = {
    elForPreviews?: string,
    elForMainPicture?: string,
    navigation?: Object,
    activeSlide?: number,
    autoPlay?: number,
    fullScreenMode?: boolean,
}

class PmGallery {

    private activeClass: string = 'active';
    private previewPictureEl: string = '.pm-gallery__preview-picture';
    private mainPictureEl: string = '.pm-gallery__main-picture';

    private init: boolean = false;
    private activeSlide: number = 0;
    private timerId: ReturnType<typeof setInterval>;

    private wrapper: Element;
    private mainPicture: HTMLImageElement;
    private previews: NodeListOf<Element>;
    private pmGalleryInnerPreviews: Element;

    constructor(wrapper: string, options: Options) {
        this.initGallery(wrapper, options);
    }

    private initGallery(wrapper: string, options: Options) {
        if (!this.getElements(wrapper, options)) return;

        this.initActiveSlide(options);
        initControl(this.wrapper, options);

        this.wrapper.addEventListener('changeSlide', (event: CustomEvent) => {
            (event.detail.btn === 'prev') ? this.prevSlide() : this.nextSlide();
            this.autoPlay(null);
        })

        if (options.autoPlay) this.autoPlay(options.autoPlay);
    }

    private autoPlay(speed: number) {
        if (speed === null) return clearInterval(this.timerId);
        this.timerId = setInterval(() => this.nextSlide(), speed);
    }

    private scrollWrapper(index:number, wrapper: Element) {
        let el = this.previews[this.activeSlide] as HTMLElement;
        wrapper.scrollTop = el.offsetHeight * (index - 1);
    }

    private prevSlide() {
        this.setActiveSlide(this.activeSlide, this.activeSlide - 1);
        this.scrollWrapper(this.activeSlide, this.pmGalleryInnerPreviews);
    }

    private nextSlide() {
        this.setActiveSlide(this.activeSlide, this.activeSlide + 1);
        this.scrollWrapper(this.activeSlide, this.pmGalleryInnerPreviews);
    }

    private initActiveSlide(options: Options) {
        if (options.activeSlide &&
            options.activeSlide < this.previews.length)
            this.activeSlide = options.activeSlide;
        this.previews[this.activeSlide].classList.add(this.activeClass);
        this.getActiveSlide(this.previews);
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

        if (oldSlide.classList.contains(this.activeClass)) oldSlide.classList.remove(this.activeClass);
        if (!newSlide.classList.contains(this.activeClass)) newSlide.classList.add(this.activeClass);

        this.activeSlide = newIndex;
        this.onMainPicture(this.activeSlide)
    }

    private onMainPicture(index: number) {
        const srcImg = this.previews[index].querySelector('img');
        this.mainPicture.src = srcImg.src;
    }

    private getElements(wrapper: string, options: Options): boolean {
        this.wrapper = document.querySelector(wrapper) as HTMLFormElement;

        if (this.wrapper === null) {
            console.error('Not found wrapper element');
            return false;
        }

        if (options.elForPreviews) {
            this.previews = this.wrapper.querySelectorAll(options.elForPreviews);
        } else {
            this.previews = this.wrapper.querySelectorAll(this.previewPictureEl);
        }

        if (this.previews.length === 0) {
            console.error('Not found previews elements');
            return false;
        }

        if (options.elForMainPicture) {
            this.mainPicture = this.wrapper.querySelector(options.elForMainPicture);
        } else {
            this.mainPicture = this.wrapper.querySelector(this.mainPictureEl);
        }

        if (this.mainPicture === null) {
            console.error('Main picture not found');
            return false;
        }

        this.pmGalleryInnerPreviews = this.wrapper.querySelector('.pm-gallery__inner--previews');

        this.wrapper.classList.add('active-gallery');
        this.init = true;

        return true;
    }


}

export default PmGallery;