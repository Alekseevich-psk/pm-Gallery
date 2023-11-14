import pmGalleryClasses from "../../setting/pmgClasses";

function preloaderGallery(pmGallery: any) {
    const wrapper = pmGallery.wrapper as Element;
    if (!wrapper) return;

    if (wrapper.classList.contains(pmGalleryClasses['init'])) {
        wrapper.classList.remove(pmGalleryClasses['init']);
    }
}

export default preloaderGallery;