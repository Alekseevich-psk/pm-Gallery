import pmgClasses from "../types/pmgClasses";
import { pmgTemplate } from '../types/pmgTemplate';

function initMainPicture(pmGallery:  HTMLElement) {
    const htmlInnerForMainPicture = `<div class="${pmgClasses['inner']} ${pmgClasses['innerMainPicture']}"></div>`;
    pmGallery.querySelector('.' + pmgClasses['wrapper']).insertAdjacentHTML('beforeend', htmlInnerForMainPicture);
};

export default initMainPicture;