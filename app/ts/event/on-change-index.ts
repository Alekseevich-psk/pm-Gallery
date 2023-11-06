function changeIndex(pmGallery: any, index: number) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("changeIndex", {
        detail: { activeIndex: index }
    }));
}

export default changeIndex;