import { msGalleryTemplate } from "../types/pmGalleryTemplate";

import getWrapper from "../get-elements/get-wrapper";
import getImages from "../get-elements/get-images";

import initWrapper from "./init-wrapper";
import initPreviews from "./init-previews";
import initMainPicture from "./init-main-picture";

export default function initTemplate(wrapper: string) {
    const result: msGalleryTemplate = {};

    const mainElement: msGalleryTemplate['mainElement'] = getWrapper(wrapper);
    const previewPictures: msGalleryTemplate['previewPictures'] = getImages(mainElement);

    if (mainElement && previewPictures.length !== 0) {
        result.mainElement = mainElement;
        result.previewPictures = previewPictures;

        initWrapper(mainElement);
        initPreviews(mainElement, previewPictures);
        initMainPicture(mainElement, previewPictures);
    }

    return result;
}