function getOptionsBreakpoints(pmGallery: any) {
    const windowInnerWidth = document.documentElement.clientWidth;
    const breakpointOptions = pmGallery.initOptions.breakpoint;

    getOptionsOnScreenWidth(windowInnerWidth, breakpointOptions);

    function getOptionsOnScreenWidth(screenWidth: number, options: any) {
        for (const option of Object.keys(options)) {
            if (Number(option) <= screenWidth) {
                pmGallery.initOptions = Object.assign(pmGallery.initOptions, options[option]);
            }
        }
    }
}

export default getOptionsBreakpoints;