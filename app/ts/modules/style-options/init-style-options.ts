import borderRadius from "./border-radius";
import objectFit from "./object-fit";

function initStyleOptions(pmGallery: any) {

    const modules = [
        borderRadius,
        objectFit
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

}

export default initStyleOptions;