import pmgClasses from "../setting/pmgClasses";

function initArrowsSlider(pmGallery: HTMLElement) {

    const html = `
                <div class="${pmgClasses['btnArrows']}">
                    <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnPrev']}"></div>
                    <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnNext']}"></div>
                </div>`;

    pmGallery.querySelector('.' + pmgClasses['controls']).insertAdjacentHTML('beforeend', html);

    return pmGallery.querySelector('.' + pmgClasses['btnArrows']) as HTMLElement;
}

export default initArrowsSlider;