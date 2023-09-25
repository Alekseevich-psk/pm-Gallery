function countPreSlides(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;

    const widthWrapper = Math.round(pmGallery.wrapper.getBoundingClientRect().width * 100) / 100;
    const heightWrapper = Math.round(pmGallery.wrapper.getBoundingClientRect().height * 100) / 100;

    let countSlides = pmGallery.initOptions.countPreSlides;

    if (countSlides <= 0) {
        console.error('"countPreSlides" - cannot be less than "1"');
        countSlides = 4;
    }

    previews.forEach(element => {
        const el = element as HTMLElement;
        if (options.positionPreviews === 'left' || options.positionPreviews === 'right') {
            el.style.height = heightWrapper / countSlides + 'px';
        } else {
            el.style.width = widthWrapper / countSlides + 'px';
        }
    });
}

export default countPreSlides;