function getOptionsBreakpoints(pmGallery: any) {
    pmGallery.initOptions = Object.assign({}, pmGallery.options);
    const windowInnerWidth = document.documentElement.clientWidth;
    const breakpointOptions = pmGallery.initOptions.breakpoint;

    for (const option of Object.keys(breakpointOptions)) {
        if (Number(option) <= windowInnerWidth) {
            pmGallery.initOptions = Object.assign(pmGallery.initOptions, breakpointOptions[option]);
        }
    }
}

export default getOptionsBreakpoints;