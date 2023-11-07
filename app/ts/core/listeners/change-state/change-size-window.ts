import initPosPreviews from "../../../previews/position-previews/init-position-previews";
import initOptions from "../../modules/options/init-options";

function changeSizeWindow(pmGallery: any) {
    window.addEventListener('resize', () => {
        initOptions(pmGallery);
        initPosPreviews(pmGallery);
    });
}

export default changeSizeWindow;