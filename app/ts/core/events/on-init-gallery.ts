function onInitGallery(pmGallery: any) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("initGallery", {
        detail: { initGallery: true }
    }));
}

export default onInitGallery;