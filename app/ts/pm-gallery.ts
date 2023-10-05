import { initOptions } from './types/pmgOptions';
import initTemplate from './init-template/init';
import getPosPreviews from './helpers/get-pos-previews';
import defOptions from "./modules/def-options";
import countPreSlides from "./modules/count-pre-slides";
import positionPreviews from './modules/position-previews/position-previews';
import activeItem from './modules/change-item/active-item';
import wheelScrollPreviews from './modules/scroll-previews/wheel-scroll-previews';
import sliderScrollPreviews from './modules/scroll-previews/slider-scroll-previews';
import fullScreen from './modules/full-screen';
import getOptionsBreakpoints from './helpers/get-options-breakpoints';
import resizeWindow from './modules/resize-window';

class PmGallery {

    private options: object;
    private initOptions: initOptions;
    private pmGallery: any;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.options = Object.assign(defOptions, options);
        this.init(msGalleryWrapper);
    }

    init(wrapper: string) {
        const resInitTemplate = initTemplate(wrapper);
        if (!resInitTemplate) return;

        this.pmGallery = Object.assign(resInitTemplate, this);

        this.pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
            this.pmGallery = Object.assign(this.pmGallery, {
                activeIndex: event.detail.activeIndex,
            });

            sliderScrollPreviews(this.pmGallery);
        });

        const helpers = [
            getOptionsBreakpoints,
            getPosPreviews
        ];

        const modules = [
            countPreSlides,
            positionPreviews,
            activeItem,
            wheelScrollPreviews,
            fullScreen,
            resizeWindow
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