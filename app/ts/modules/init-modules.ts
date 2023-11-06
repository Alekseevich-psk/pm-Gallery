import initPagination from "./pagination/init-pagination";
import initStyleOptions from "./style-options/init-style-options";
import initSwipeOnSliders from "./swipe-sliders/init-swipe-sliders";
import initUserControls from "./user-controls/init-user-controls";
import initAutoPlay from "./autoplay/init-auto-play";

function initModules(pmGallery: any) {

    const modules = [
        initSwipeOnSliders,
        initStyleOptions,
        initUserControls,
        initPagination,
        initAutoPlay
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}


export default initModules;