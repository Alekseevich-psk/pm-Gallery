import pmgClasses from "../../types/pmgClasses";

function changeActivePreview(pmGallery: any, index: number) {
    const previews = pmGallery.previews;
    previews[pmGallery.activeIndex].classList.remove(pmgClasses['previewActive']);
    previews[index].classList.add(pmgClasses['previewActive']);
}

export default changeActivePreview;