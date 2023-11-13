import initActiveControls from "./controls/init-active-controls";
import initOptions from "./options/init-options";

function initCoreModules(pmGallery: any) {

    const modules = [
        initOptions,
        initActiveControls
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}

export default initCoreModules;