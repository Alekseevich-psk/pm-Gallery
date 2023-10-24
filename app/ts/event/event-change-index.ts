function eventChangeIndex(pmGallery: any, index: number) {
    pmGallery.wrapper.dispatchEvent(new CustomEvent("changeActiveIndex", {
        detail: { activeIndex: index }
    }));
}

export default eventChangeIndex;