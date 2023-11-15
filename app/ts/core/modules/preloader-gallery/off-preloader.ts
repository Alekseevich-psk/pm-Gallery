import pmGalleryClasses from "../../setting/pmgClasses";

function offPreloader(element: Element) {
    if (element.classList.contains(pmGalleryClasses['preloader'])) {
        setTimeout(() => {
            element.classList.remove(pmGalleryClasses['preloader']);
        }, 300);
    }
}

export default offPreloader;