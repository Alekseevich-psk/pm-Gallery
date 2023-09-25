import pmgClasses from "../classes/pmgClasses";
import { pmgTemplate } from '../types/pmgTemplate';

function initWrapper(pmGallery: pmgTemplate['mainElement']) {

    const htmlControls = `
            <div class="pm-gallery__controls">
            <div class="pm-gallery__btn-screen"></div>
            <div class="pm-gallery__arrows">
                <div class="pm-gallery__arrow pm-gallery__arrow--prev"></div>
                <div class="pm-gallery__arrow pm-gallery__arrow--next"></div>
            </div>
        </div>`;

    pmGallery.querySelector('.' + pmgClasses['innerMainPicture']).insertAdjacentHTML('beforeend', htmlControls);
}

export default initWrapper;