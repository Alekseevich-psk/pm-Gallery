import onInitGallery from '../core/events/on-init-gallery';
import { preview } from '../types/pmgPreview';

export default function getImages(wrapper: HTMLElement) {
    if (!wrapper) return;

    const previews = wrapper.querySelectorAll('img');
    const result: object[] = [];

    if (!previews || previews.length === 0) {
        console.error('Preview elements is not found');
    }

    previews.forEach(element => {
        let res = new Object() as preview;
        res.src = element.src;
        res.dataSrc = element.getAttribute('data-src');
        res.alt = element.alt;
        result.push(res);
    });

    wrapper.innerHTML = '';
    return result;
}