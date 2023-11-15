import pmGalleryClasses from "../../setting/pmgClasses";

function onPreloader(element: Element) {
    if (!element.classList.contains(pmGalleryClasses['init'])) {
        element.classList.add(pmGalleryClasses['init']);
    }
}

export default onPreloader;