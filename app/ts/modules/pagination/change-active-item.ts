import pmgClasses from "../../core/setting/pmgClasses";

function changeActivePaginationItem(pmGallery: any, index: number) {
    const paginationItems = pmGallery.paginationItems;
    
    paginationItems[pmGallery.activeIndex].classList.remove(pmgClasses['paginationItemActive']);
    paginationItems[index].classList.add(pmgClasses['paginationItemActive']);
}

export default changeActivePaginationItem;