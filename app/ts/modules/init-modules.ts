import initPagination from "./pagination/init-pagination";
import initStyleOptions from "./style-options/init-style-options";
import initAutoPlay from "./autoplay/init-auto-play";
import initFullScreen from "./full-screen/init-full-screen";

function initModules(pmGallery: any) {

    const modules = [
        initStyleOptions,
        initPagination,
        initAutoPlay,
        initFullScreen
    ];

    modules.forEach(module => {
        pmGallery = Object.assign(pmGallery, module(pmGallery));
    });
}


export default initModules;