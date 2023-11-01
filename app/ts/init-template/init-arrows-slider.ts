import pmgClasses from "../setting/pmgClasses";

function initArrowsSlider(pmGallery: HTMLElement) {
    const res: any = {};

    const html = `
                <div class="${pmgClasses['btnArrows']}">
                    <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnPrev']}"></div>
                    <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnNext']}"></div>
                </div>`;

    pmGallery.querySelector('.' + pmgClasses['controls']).insertAdjacentHTML('beforeend', html);

    res.arrowsSlider = pmGallery.querySelector('.' + pmgClasses['btnArrows']);
    res.defBtnPrev = pmGallery.querySelector('.' + pmgClasses['btnPrev']);
    res.defBtnNext = pmGallery.querySelector('.' + pmgClasses['btnNext']);

    return res;
}

export default initArrowsSlider;