function getOptionsBreakpoints(pmGallery: any) {
    pmGallery.initOptions = Object.assign({}, pmGallery.options);

    if (pmGallery.fullScreen) {
        pmGallery.initOptions = Object.assign({}, pmGallery.initOptions.fullScreen);
    }

    const windowInnerWidth = document.documentElement.clientWidth;
    const breakpointsOptions = pmGallery.initOptions.breakpoints;

    for (const option of Object.keys(breakpointsOptions)) {
        if (Number(option) <= windowInnerWidth) {
            pmGallery.initOptions = Object.assign(pmGallery.initOptions, breakpointsOptions[option]);
        }
    }
    
}

export default getOptionsBreakpoints;