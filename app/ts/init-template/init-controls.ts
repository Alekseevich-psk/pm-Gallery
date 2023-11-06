import pmgClasses from "../core/setting/pmgClasses";

function initControls(pmGallery: HTMLElement) {
    const html = `<div class="${pmgClasses['controls']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['innerMainPicture']).insertAdjacentHTML('beforeend', html);
    
    return pmGallery.querySelector('.' + pmgClasses['controls']) as HTMLElement;
}

export default initControls;