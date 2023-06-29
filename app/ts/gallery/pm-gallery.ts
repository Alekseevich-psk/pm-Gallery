import initControl from './init-control';

type Options = {
    classForPreviews?: string,
    classForMainPicture?: string,
    classForBtnPrev?: string,
    classForBtnNext?: string,
    activeSlide?: number,
    autoPlay?: number
}

class PmGallery {

    private activeClass: string = 'active';
    private previewPictureClass: string = '.pm-gallery__preview-picture';
    private mainPictureClass: string = '.pm-gallery__main-picture';

    private init: boolean = false;
    private activeSlide: number = 0;
    private timerId: ReturnType<typeof setInterval>;

    private parent: Element;
    private mainPicture: HTMLImageElement;
    private previews: NodeListOf<Element>;

    constructor(parent: string, options: Options) {
        this.initGallery(parent, options);
    }

    private initGallery(parent: string, options: Options) {
        if (!this.getElements(parent, options)) return;

        this.initActiveSlide(options);
        initControl(this.parent, options);

        this.parent.addEventListener('changeSlide', (event: CustomEvent) => {
            (event.detail.btn === 'prev') ? this.prevSlide() : this.nextSlide();
            this.autoPlay(null);
        })

        if (options.autoPlay) this.autoPlay(options.autoPlay);
    }

    private autoPlay(speed: number) {
        if (speed === null) return clearInterval(this.timerId);
        this.timerId = setInterval(() => this.nextSlide(), speed);
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

    private getElements(parent: string, options: Options): boolean {
        this.parent = document.querySelector(parent) as HTMLFormElement;

        if (this.parent === null) {
            console.error('Not found parent element');
            return false;
        }

        if (options.classForPreviews) {
            this.previews = this.parent.querySelectorAll(options.classForPreviews);
        } else {
            this.previews = this.parent.querySelectorAll(this.previewPictureClass);
        }

        if (this.previews.length === 0) {
            console.error('Not found previews elements');
            return false;
        }

        if (options.classForMainPicture) {
            this.mainPicture = this.parent.querySelector(options.classForMainPicture);
        } else {
            this.mainPicture = this.parent.querySelector(this.mainPictureClass);
        }

        if (this.mainPicture === null) {
            console.error('Main picture not found');
            return false;
        }

        this.parent.classList.add('active-gallery');
        this.init = true;

        return true;
    }


}

export default PmGallery;