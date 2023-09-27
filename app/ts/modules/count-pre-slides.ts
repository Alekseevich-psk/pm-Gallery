function countPreSlides(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;

    let countPreSlides: number = options.countPreSlides;
    const countSlides: number = previews.length;
    const countHideSlides: number = countSlides - (countPreSlides);
    
    const height = Math.round(pmGallery.wrapperHeight / countPreSlides);
    const width = Math.round(pmGallery.wrapperWidth / countPreSlides);
    
    if (countPreSlides <= 0) {
        console.error('"countPreSlides" - cannot be less than "1"');
        countPreSlides = 4;
    }

    const result = {
        slideWidth: 0,
        slideHeight: 0,
        trackWidth: 0,
        trackHeight: 0,
        posPreviews: 'horizontal',
        countSlides: 0,
        countHideSlides: 0,
    }

    previews.forEach(element => {
        const el = element as HTMLElement;

        if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
            el.style.height = height + 'px';
        }

        if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {
            el.style.flexBasis = width + 'px';
        }

    });

    if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
        result.trackHeight = previews.length * height;
        result.trackWidth = pmGallery.innerPreviewsWidth;
        result.posPreviews = 'vertical';
    }

    if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {
        result.trackHeight = pmGallery.innerPreviewsHeight;
        result.trackWidth = previews.length * width;
        result.posPreviews = 'horizontal';
    }

    result.slideHeight = height;
    result.slideWidth = width;
    result.countSlides = countSlides;
    result.countHideSlides = countHideSlides;

    return result;
}

export default countPreSlides;