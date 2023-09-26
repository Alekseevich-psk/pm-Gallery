function countPreSlides(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;
    let countSlides = pmGallery.initOptions.countPreSlides;

    if (countSlides <= 0) {
        console.error('"countPreSlides" - cannot be less than "1"');
        countSlides = 4;
    }

    const result = {
        slideWidth: 0,
        slideHeight: 0,
        trackWidth: 0,
        trackHeight: 0,
        posPreviews: 'horizontal'
    }

    previews.forEach(element => {
        const el = element as HTMLElement;

        const height = Math.round(pmGallery.wrapperHeight / countSlides);
        const width = Math.round(pmGallery.wrapperWidth / countSlides);

        result.slideHeight = height;
        result.slideWidth = width

        if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
            el.style.height = height + 'px';
            result.trackHeight = previews.length * height;
            result.trackWidth = pmGallery.innerPreviewsWidth;
            result.posPreviews = 'vertical';
        }

        if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {
            el.style.flexBasis = width + 'px';
            result.trackHeight = pmGallery.innerPreviewsHeight;
            result.trackWidth = previews.length * width;
            result.posPreviews = 'horizontal'
        }

    });

    return result;
}

export default countPreSlides;