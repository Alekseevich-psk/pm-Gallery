import { pmgTemplate } from "../types/pmgTemplate";
import { initOptions } from "../types/pmgOptions";

import getWrapper from "../get-elements/get-wrapper";
import getImages from "../get-elements/get-images";

import initWrapper from "./init-wrapper";
import initPreviews from "./init-previews";
import initInnerPreviews from "./init-inner-previews";
import initInnerPicture from "./init-inner-picture";
import initMainPicture from "./init-main-picture";
import initControls from "./init-controls";

export default function initTemplate(wrapper: string, options: initOptions) {
    const result: pmgTemplate = {};

    const mainElement: HTMLElement = getWrapper(wrapper);
    const previewPictures: object[] = getImages(mainElement);
        
    if (!mainElement || previewPictures.length === 0) return;

    initWrapper(mainElement);
    initInnerPreviews(mainElement);
    initInnerPicture(mainElement);
    initMainPicture(mainElement, previewPictures);
    initControls(mainElement);

    result.wrapper = mainElement;
    result.previews = initPreviews(mainElement, previewPictures);
    
    return result;
}