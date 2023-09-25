import pmgClasses from "../types/pmgClasses";

function initWrapper(pmGallery: HTMLElement) {

    const htmlControls = `
            <div class="${pmgClasses['controls']}">
            <div class="${pmgClasses['btnScreen']}"></div>
            <div class="${pmgClasses['btnArrows']}">
                <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnPrev']}"></div>
                <div class="${pmgClasses['btnArrow']} ${pmgClasses['btnNext']}"></div>
            </div>
        </div>`;

    pmGallery.querySelector('.' + pmgClasses['innerMainPicture']).insertAdjacentHTML('beforeend', htmlControls);

    return pmGallery.querySelector('.' + pmgClasses['controls']) as HTMLElement;
}

export default initWrapper;