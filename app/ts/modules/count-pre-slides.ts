function countPreSlides(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;
    let countSlides = pmGallery.initOptions.countPreSlides;

    if (countSlides <= 0) {
        console.error('"countPreSlides" - cannot be less than "1"');
        countSlides = 4;
    }

    previews.forEach(element => {
        const el = element as HTMLElement;

        if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
            return el.style.height = pmGallery.wrapperHeight / countSlides + 'px';
        } 
        
        if (options.positionPreviews === 'top' || options.positionPreviews === 'bottom') {            
            return el.style.flexBasis = pmGallery.wrapperWidth / countSlides + 'px';
        }

        return el.style.height = pmGallery.wrapperHeight / countSlides + 'px';
    });
}

export default countPreSlides;