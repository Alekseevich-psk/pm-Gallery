import pmGalleryClasses from "../../setting/pmgClasses";

function preloaderGallery(pmGallery: any) {
    const gallery = pmGallery.gallery as Element;
    if (!gallery) return;

    setTimeout(() => {
        if (gallery.classList.contains(pmGalleryClasses['init'])) {
            gallery.classList.remove(pmGalleryClasses['init']);
        }
    }, 100);
}

export default preloaderGallery;