import pmGalleryClasses from "../../types/pmgClasses";

function changeActivePreview(pmGallery: any, newIndex: number, oldIndex: number) {
    const previews = pmGallery.previews;
    previews[oldIndex].classList.remove('active');
    previews[newIndex].classList.add('active');
}

export default changeActivePreview;