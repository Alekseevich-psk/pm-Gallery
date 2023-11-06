import optionsBreakpoints from "../../modules/breakpoints/options-breakpoints";
import initPosPreviews from "../../../previews/position-previews/init-position-previews";
import initModules from "../../../modules/init-modules";

function changeFullScreen(pmGallery: any) {
    pmGallery.wrapper.addEventListener('fullScreen', () => {
        optionsBreakpoints(pmGallery);
        initPosPreviews(pmGallery);
        initModules(pmGallery);
    });
}

export default changeFullScreen;