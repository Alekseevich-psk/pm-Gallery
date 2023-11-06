import pmGalleryClasses from "../../core/setting/pmgClasses";

function initPagination(pmGallery: any) {
    const optionPagination = pmGallery.initOptions.pagination;
    const paginationItems = pmGallery.paginationItems;

    paginationItems[pmGallery.activeIndex].classList.add(pmGalleryClasses['paginationItemActive']);

    if (optionPagination) {
        pmGallery.pagination.classList.toggle('hide');
    } else {
        pmGallery.pagination.classList.toggle('hide');
    }
}

export default initPagination;