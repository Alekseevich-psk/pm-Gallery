function eventFullScreen(pmGallery: any, fullScreenFlag: boolean) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
        detail: { fullScreen: fullScreenFlag }
    }));
}

export default eventFullScreen;