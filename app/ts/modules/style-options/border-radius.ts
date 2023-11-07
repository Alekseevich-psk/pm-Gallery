
function borderRadius(pmGallery: any) {
    const optionBorderRadius = pmGallery.initOptions.borderRadius;
    if (!optionBorderRadius) return;

    if (typeof optionBorderRadius === 'number') {
        pmGallery.wrapper.style.setProperty('--border-radius', (optionBorderRadius + 'px'))
    }

}

export default borderRadius;