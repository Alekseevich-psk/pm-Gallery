import { preview } from '../types/preview';

export default function getImages(wrapper: HTMLElement) {
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