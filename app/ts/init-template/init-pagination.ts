import pmgClasses from "../core/setting/pmgClasses";

function initPagination(pmGallery: HTMLElement) {

    const html = `
            <div class=${pmgClasses['pagination']}>
                <ul class=${pmgClasses['paginationList']}>
                </ul>
            </div>`;

    pmGallery.querySelector('.' + pmgClasses['innerMainPicture']).insertAdjacentHTML('beforeend', html);
    return pmGallery.querySelector('.' + pmgClasses['pagination']) as HTMLElement;
}

export default initPagination;