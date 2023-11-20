
function borderRadius(pmGallery: any) {
    const optionBorderRadius = pmGallery.initOptions.borderRadius === 'none' ? 0 : pmGallery.initOptions.borderRadius;
    if (!optionBorderRadius) return;
    pmGallery.wrapper.style.setProperty('--border-radius', (Number(optionBorderRadius) + 'px'))
}

export default borderRadius;