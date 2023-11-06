import initPosPreviews from "../../../previews/position-previews/init-position-previews";
import optionsBreakpoints from "../../modules/breakpoints/options-breakpoints";

function changeSizeWindow(pmGallery: any) {
    window.addEventListener('resize', () => {
        optionsBreakpoints(pmGallery);
        initPosPreviews(pmGallery);
    });
}

export default changeSizeWindow;