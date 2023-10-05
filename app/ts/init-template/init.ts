import { pmgTemplate } from "../types/pmgTemplate";
import getWrapper from "../get-elements/get-wrapper";
import getImages from "../get-elements/get-images";
import initWrapper from "./init-wrapper";
import initPreviews from "./init-previews";
import initInnerPreviews from "./init-inner-previews";
import initInnerPicture from "./init-inner-picture";
import initMainPicture from "./init-main-picture";
import initTrack from "./init-track";
import initControls from "./init-controls";
import initBtnScreen from "./init-btn-screen";
import initArrowsSlider from "./init-arrows-slider";

export default function initTemplate(wrapper: string) {
    const result: pmgTemplate = {};

    const mainElement: HTMLElement = getWrapper(wrapper);
    const previewPictures: object[] = getImages(mainElement);

    if (!mainElement || previewPictures.length === 0) return;

    result.wrapper = initWrapper(mainElement);
    result.innerPreviews = initInnerPreviews(mainElement);
    result.innerPicture = initInnerPicture(mainElement);
    result.track = initTrack(mainElement);
    result.previews = initPreviews(mainElement, previewPictures);
    result.mainPicture = initMainPicture(mainElement, previewPictures);
    result.controls = initControls(mainElement);
    result.btnScreen = initBtnScreen(mainElement);
    result.arrowsSlider = initArrowsSlider(mainElement);

    return result;
}