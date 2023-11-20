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
import initPagination from "./init-pagination";
import initPaginationItems from "./init-pagination-items";
import onPreloader from "../core/modules/preloader-gallery/on-preloader";
import initOverlay from "./init-overlay";
import initBtnAutoPlay from "./init-btn-auto-play";

export default function initTemplate(wrapper: any) {
    const res: pmgTemplate = {};

    const mainElement: HTMLElement = getWrapper(wrapper);
    const previewPictures: object[] = getImages(mainElement);

    if (!mainElement || previewPictures.length === 0) return;
    onPreloader(mainElement);
    
    res.gallery = mainElement;
    res.wrapper = initWrapper(mainElement);
    res.overlay = initOverlay(mainElement);
    res.innerPreviews = initInnerPreviews(mainElement);
    res.innerPicture = initInnerPicture(mainElement);
    res.track = initTrack(mainElement);
    res.previews = initPreviews(mainElement, previewPictures);
    res.mainPicture = initMainPicture(mainElement, previewPictures);
    res.controls = initControls(mainElement);
    res.btnScreen = initBtnScreen(mainElement);
    res.btnAutoPlay = initBtnAutoPlay(mainElement);
    res.pagination = initPagination(mainElement);
    res.paginationItems = initPaginationItems(mainElement, previewPictures);
    res.arrowsSlider = initArrowsSlider(mainElement);
    res.previewsSrc = previewPictures;

    return res;
}