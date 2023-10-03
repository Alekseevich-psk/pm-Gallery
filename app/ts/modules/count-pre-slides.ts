import getSizeElement from "../helpers/get-size-element";
import pmgClasses from "../types/pmgClasses";

const result = {
    slideWidth: 0,
    slideHeight: 0,
    trackWidth: 0,
    trackHeight: 0,
    posPreviews: '',
    countSlides: 0,
    countHideSlides: 0,
    wrapperHeight: 0,
    wrapperWidth: 0,
    innerPreviewsHeight: 0,
    innerPreviewsWidth: 0
};

function countPreSlides(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;
    const countSlides: number = previews.length;
    const countHideSlides: number = countSlides - (options.countPreSlides);
    const sizeWrapper = getSizeElement(pmGallery.wrapper);

    let countPreSlides: number = options.countPreSlides;
    let slideHeight: number = options.slideHeight;
    let slideWidth: number = options.slideWidth;

    result.trackHeight = options.slideHeight;
    result.trackWidth = options.slideWidth;

    result.innerPreviewsHeight = options.slideHeight;
    result.innerPreviewsWidth = options.slideWidth;

    result.wrapperHeight = sizeWrapper.height;
    result.wrapperWidth = sizeWrapper.width;

    result.countSlides = countSlides;
    result.countHideSlides = countHideSlides;

    if (countPreSlides <= 0) {
        console.error('"countPreSlides" - cannot be less than "1"');
        countPreSlides = 4;
    }

    if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
        slideHeight = Math.abs(sizeWrapper.height / countPreSlides);

        result.trackHeight = Math.abs(countSlides * slideHeight);
        result.innerPreviewsHeight = Math.abs(countPreSlides * slideHeight);
        result.posPreviews = pmgClasses['vertical'];
    }

    if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {
        slideWidth = Math.abs(sizeWrapper.width / countPreSlides);

        result.trackWidth = Math.abs(countSlides * slideWidth);
        result.innerPreviewsWidth = Math.abs(countPreSlides * slideWidth);
        result.posPreviews = pmgClasses['horizontal'];
    }

    previews.forEach(element => {
        const el = element as HTMLElement;

        if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
            el.style.height = slideHeight + 'px';
        }

        if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {
            el.style.flexBasis = slideWidth + 'px';
        }

    });

    result.slideWidth = slideWidth;
    result.slideHeight = slideHeight;

    return result;
}

export default countPreSlides;