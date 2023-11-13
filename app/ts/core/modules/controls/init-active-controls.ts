import changeActiveControls from "./change-active-controls";
import getUserControls from "./get-user-controls";

function initActiveControls(pmGallery: any) {
    getUserControls(pmGallery);
    changeActiveControls(pmGallery, pmGallery.activeIndex);
}

export default initActiveControls;