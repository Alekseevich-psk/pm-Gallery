import pmGalleryClasses from "../../core/setting/pmgClasses";

function setSizePreviews(pmGallery: any) {
    const previews = pmGallery.previews as NodeList;

    for (let i = 0; i < previews.length; i++) {

        const el = previews[i] as HTMLElement;
        el.style.height = pmGallery.previewHeight + 'px';
        el.style.width = pmGallery.previewWidth + 'px';

        if (i === previews.length - 1) {
            return el.style.marginRight = '', el.style.marginBottom = '';
        }

        if (pmGallery.posPreviews === pmGalleryClasses['vertical']) {
            el.style.marginBottom = pmGallery.spaceBetween + 'px';
            el.style.marginRight = '';
        } else {
            el.style.marginRight = pmGallery.spaceBetween + 'px';
            el.style.marginBottom = '';
        }
    }
}

export default setSizePreviews;