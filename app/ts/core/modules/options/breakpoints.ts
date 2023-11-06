function breakpoints(pmGallery: any) {
    const windowInnerWidth = document.documentElement.clientWidth;
    const breakpointsOptions = pmGallery.initOptions.breakpoints;

    if (breakpointsOptions) {
        for (const option of Object.keys(breakpointsOptions)) {
            if (Number(option) <= windowInnerWidth) {
                Object.assign(
                    pmGallery.initOptions,
                    breakpointsOptions[option]
                );
            }
        }
    }
}

export default breakpoints;