import { pmgTemplate } from "../types/pmgTemplate";
import getWrapper from "../helpers/get-wrapper";
import getImages from "../helpers/get-images";
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
    const res: pmgTemplate = {};
    
    const mainElement: HTMLElement = getWrapper(wrapper);
    const previewPictures: object[] = getImages(mainElement);

    if (!mainElement || previewPictures.length === 0) return;

    res.wrapper = initWrapper(mainElement);
    res.innerPreviews = initInnerPreviews(mainElement);
    res.innerPicture = initInnerPicture(mainElement);
    res.track = initTrack(mainElement);
    res.previews = initPreviews(mainElement, previewPictures);
    res.mainPicture = initMainPicture(mainElement, previewPictures);
    res.controls = initControls(mainElement);
    res.btnScreen = initBtnScreen(mainElement);
    res.arrowsSlider = initArrowsSlider(mainElement);

    return res;
}