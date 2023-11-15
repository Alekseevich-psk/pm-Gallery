import pmGalleryClasses from "../../setting/pmgClasses";

function offPreloader(element: Element) {
    if (element.classList.contains(pmGalleryClasses['init'])) {
        element.classList.remove(pmGalleryClasses['init']);
    }
}

export default offPreloader;