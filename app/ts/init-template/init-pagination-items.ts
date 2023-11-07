
import pmgClasses from "../core/setting/pmgClasses";

function initPaginationItems(pmGallery: HTMLElement, previews: object[]) {
    const list = pmGallery.querySelector('.' + pmgClasses['paginationList']);
    const html = `<li class=${pmgClasses['paginationItem']}></li>`;

    for (var i = 0; i < previews.length; i++) {
        list.insertAdjacentHTML('beforeend', html);
    }

    return pmGallery.querySelectorAll('.' + pmgClasses['paginationItem']);
}

export default initPaginationItems;