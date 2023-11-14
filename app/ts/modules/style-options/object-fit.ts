import { pmgObjectFit } from "../../types/pmgObjectFit";

function objectFit(pmGallery: any) {
    const optionObjectFit = pmGallery.initOptions.objectFitPicture;
    if (!optionObjectFit) return;

    if (typeof optionObjectFit === 'string') {
        const el = pmGallery.mainPicture as Element;

        if (pmgObjectFit.includes(optionObjectFit) && !el.classList.contains(optionObjectFit)) {
            el.classList.add(optionObjectFit);
        }
    }

}

export default objectFit;