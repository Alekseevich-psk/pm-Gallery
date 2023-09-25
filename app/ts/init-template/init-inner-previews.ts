import pmgClasses from "../classes/pmgClasses";

import { pmgTemplate } from '../types/pmgTemplate';

function initPreviews(pmGallery: pmgTemplate['mainElement']) {

    const htmlInnerPreviews = `
        <div class="${pmgClasses['inner']} ${pmgClasses['innerPreviews']}">
            <div class="${pmgClasses['track']}"></div>
        </div>`;

    pmGallery.querySelector('.' + pmgClasses['wrapper']).insertAdjacentHTML('beforeend', htmlInnerPreviews);
}

export default initPreviews;