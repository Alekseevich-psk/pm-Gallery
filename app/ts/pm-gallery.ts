import { initOptions } from './types/pmgOptions';

import initTemplate from './init-template/init';

import defOptions from "./modules/def-options";
import countPreSlides from "./modules/count-pre-slides";
import positionPreviews from './modules/position-previews/position-previews';
import scrollPreviews from './modules/scroll-previews';
import activeIndex from './modules/change-item/active-index';

class PmGallery {

    private elMsGalleryWrapper: string;
    private initOptions: initOptions;
    private activeIndex: number;
    private pmGallery: any;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.elMsGalleryWrapper = msGalleryWrapper;
        this.initOptions = Object.assign(defOptions, options, this.activeIndex = 0);

        this.init(this.elMsGalleryWrapper, this.initOptions);
    }

    init(wrapper: string, options: initOptions) {
        const resInitTemplate = initTemplate(wrapper, options);
        if (!resInitTemplate) return;

        this.pmGallery = Object.assign(resInitTemplate, this);
        
        const modules = [
            countPreSlides,
            positionPreviews,
            scrollPreviews,
            activeIndex,
        ];

        modules.forEach(module => {
            this.pmGallery = Object.assign(this.pmGallery, module(this.pmGallery));
        });

        this.pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
            this.pmGallery = Object.assign(this.pmGallery, event.detail);
            // console.log(this.pmGallery);
        });
        
    }

}

export default PmGallery;