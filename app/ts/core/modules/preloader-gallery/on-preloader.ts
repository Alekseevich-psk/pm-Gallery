import pmGalleryClasses from "../../setting/pmgClasses";

function onPreloader(element: Element) {
    if (!element.classList.contains(pmGalleryClasses['preloader'])) {
        element.classList.add(pmGalleryClasses['preloader']);
    }
}

export default onPreloader;