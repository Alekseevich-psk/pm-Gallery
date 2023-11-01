import initPagination from "./pagination/init-pagination";
import initStyleOptions from "./style-options/init-style-options";
import initSwipeOnSliders from "./swipe-sliders/init-swipe-sliders";
import initUserControls from "./user-controls/init-user-controls";

function initModules(pmGallery: any) {

    const modules = [
        initSwipeOnSliders,
        initStyleOptions,
        initUserControls,
        initPagination
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}


export default initModules;