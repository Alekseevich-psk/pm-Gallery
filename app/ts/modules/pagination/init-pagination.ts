import pmGalleryClasses from "../../core/setting/pmgClasses";
import changeActivePaginationItem from "./change-active-item";

function initPagination(pmGallery: any) {
    const optionPagination = pmGallery.initOptions.pagination;
    const hasHideClass = pmGallery.pagination.classList.contains('hide');

    if (optionPagination) {
        if (hasHideClass) {
            pmGallery.pagination.classList.remove('hide');
        }
        
        changeActivePaginationItem(pmGallery, pmGallery.activeIndex);
    } else {
        if (!hasHideClass) {
            pmGallery.pagination.classList.add('hide');
        }
    }
}

export default initPagination;