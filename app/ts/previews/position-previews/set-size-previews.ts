import pmGalleryClasses from "../../core/setting/pmgClasses";

function setSizePreviews(pmGallery: any) {
    const previews = pmGallery.previews as NodeList;


    previews.forEach(element => {
        const el = element as HTMLElement;
        el.style.height = pmGallery.slideHeight + 'px';
        el.style.width = pmGallery.slideWidth + 'px';

        if (pmGallery.posPreviews === pmGalleryClasses['vertical']) {
            el.style.marginBottom = pmGallery.spaceBetween + 'px';
        } else {
            el.style.marginRight = pmGallery.spaceBetween + 'px';
        }

    });

}

export default setSizePreviews;