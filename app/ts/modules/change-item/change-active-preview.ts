import pmGalleryClasses from "../../types/pmgClasses";

function changeActivePreview(pmGallery: any, newIndex: number, oldIndex: number) {
    const previews = pmGallery.previews;
    
    previews[oldIndex].classList.remove(pmGalleryClasses['previewActive']);
    previews[newIndex].classList.add(pmGalleryClasses['previewActive']);
}

export default changeActivePreview;