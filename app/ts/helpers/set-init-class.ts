import pmGalleryClasses from "../core/setting/pmgClasses";

function setInitClass(gallery: HTMLElement) {
    if (!gallery.classList.contains(pmGalleryClasses['init'])) {
        gallery.classList.add(pmGalleryClasses['init']);
    }
}

export default setInitClass;