import pmGalleryClasses from "../../setting/pmgClasses";

function initPagination(pmGallery: any) {
    const optionPagination = pmGallery.initOptions.pagination;
    const paginationItems = pmGallery.paginationItems;

    if (!optionPagination) {
        return pmGallery.pagination.classList.add('hide');
    }

    paginationItems[0].classList.add(pmGalleryClasses['paginationItemActive']);
}

export default initPagination;