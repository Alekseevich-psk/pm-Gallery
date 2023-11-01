
function borderRadius(pmGallery: any) {
    const optionBorderRadius = pmGallery.initOptions.borderRadius;
    if (!optionBorderRadius) return;

    pmGallery.wrapper.style.setProperty('--border-radius', (optionBorderRadius + 'px'))
}

export default borderRadius;