function onFullScreen(pmGallery: any, fullScreenFlag: boolean) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("fullScreen", {
        detail: { fullScreen: fullScreenFlag }
    }));
}

export default onFullScreen;