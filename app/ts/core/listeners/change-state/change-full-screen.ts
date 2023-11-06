import initOptions from "../../modules/options/init-options";
import initPosPreviews from "../../../previews/position-previews/init-position-previews";
import initModules from "../../../modules/init-modules";

function changeFullScreen(pmGallery: any) {
    pmGallery.wrapper.addEventListener('fullScreen', () => {
        initOptions(pmGallery);
        initPosPreviews(pmGallery);
        initModules(pmGallery);
    });
}

export default changeFullScreen;