function onChangeIndex(pmGallery: any, index: number) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("onChangeIndex", {
        detail: { activeIndex: index }
    }));
}

export default onChangeIndex;