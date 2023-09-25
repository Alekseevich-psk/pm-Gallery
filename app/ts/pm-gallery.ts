import { initOptions } from './types/pmgOptions';

import initTemplate from './init-template/init';

import defOptions from "./modules/def-options";
import countPreSlides from "./modules/count-pre-slides";
import positionPreviews from './modules/position-previews';

class PmGallery {

    private elMsGalleryWrapper: string;
    private initOptions: initOptions;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.elMsGalleryWrapper = msGalleryWrapper;
        this.initOptions = Object.assign(defOptions, options);

        this.init(this.elMsGalleryWrapper, this.initOptions);
    }

    init(wrapper: string, options: initOptions) {
        const resInitTemplate = initTemplate(wrapper, options);
        if (!resInitTemplate) return;
        console.log(resInitTemplate);
        
        const pmGallery = Object.assign(resInitTemplate, this);
        
        const modules = [
            positionPreviews,
            countPreSlides,
        ];

        modules.forEach(module => {
            module(pmGallery);
        });
    }

}

export default PmGallery;