import { initOptions } from './types/pmgOptions';
import initTemplate from './init-template/init';
import defOptions from "./setting/def-options";

import getOptionsBreakpoints from './helpers/get-options-breakpoints';
import initListeners from './modules/listeners/init-listeners';
import initPreviews from './previews/init-previews';
import initScrollPreviews from './modules/scroll-previews/init-scroll-previews';
import initSwipeOnSliders from './modules/swipe-sliders/init-swipe-sliders';

class PmGallery {

    private pmGallery: any;
    private options: object;
    private initOptions: initOptions;
    private activeIndex: number;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.options = Object.assign(defOptions, options);
        this.init(msGalleryWrapper);
    }

    init(wrapper: string) {
        const resInitTemplate = initTemplate(wrapper);
        if (!resInitTemplate) return;

        this.pmGallery = Object.assign(resInitTemplate, this);

        const helpers = [
            getOptionsBreakpoints
        ];

        const modules = [
            initListeners,
            initPreviews,
            initScrollPreviews,
            initSwipeOnSliders
        ];

        helpers.forEach(helper => {
            this.pmGallery = Object.assign(this.pmGallery, helper(this.pmGallery));
        });

        modules.forEach(module => {
            this.pmGallery = Object.assign(this.pmGallery, module(this.pmGallery));
        });

        console.log(this.pmGallery);

    }

}

export default PmGallery;