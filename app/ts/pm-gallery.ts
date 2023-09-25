import { initOptions } from './types/pmgOptions';

import initTemplate from './init-template/init';
import defOptions from "./modules/def-options/def-options";

import countPreSlides from "./modules/width-slides/count-pre-slides";

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
        
        const pmGallery = Object.assign(this, resInitTemplate);
        
        const modules = [
            countPreSlides,
        ];

        modules.forEach(module => {
            module(pmGallery);
        });
    }

}

export default PmGallery;