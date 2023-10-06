import pmgClasses from "../setting/pmgClasses";
import { preview } from '../types/pmgPreview';

function initPreviews(pmGallery: HTMLElement, previews: object[]) {
    const track = pmGallery.querySelector('.' + pmgClasses['track']);

    const img = (img: preview, index: number) => `
        <div class="${pmgClasses['previewPicture']}${(index === 0) ? ' active' : ''}">
            <img src="${img.src}" alt="${img.alt}">
        </div>`;

    for (var i = 0; i < previews.length; i++) {
        track.insertAdjacentHTML('beforeend', img(previews[i] as preview, i));
    }

    return track.querySelectorAll('.' + pmgClasses['previewPicture']);
}

export default initPreviews;