import borderRadius from "./border-radius";

function initStyleOptions(pmGallery: any) {
    
    const modules = [
        borderRadius,
    ];

    modules.forEach(module => {
        module(pmGallery);
    });

}

export default initStyleOptions;