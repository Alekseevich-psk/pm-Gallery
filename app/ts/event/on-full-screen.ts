function onFullScreen(pmGallery: any, fullScreenFlag: boolean) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("onFullScreen", {
        detail: { fullScreen: fullScreenFlag }
    }));
}

export default onFullScreen;