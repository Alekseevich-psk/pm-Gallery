import initActiveControls from "./controls/init-active-controls";
import initOptions from "./options/init-options";
import initPreloaderGallery from "./preloader-gallery/init-preloader-gallery";

function initCoreModules(pmGallery: any) {

    const modules = [
        initOptions,
        initPreloaderGallery,
        initActiveControls
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initCoreModules;