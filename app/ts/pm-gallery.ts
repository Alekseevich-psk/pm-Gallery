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

class PmGallery {

    private elMsGalleryWrapper: string;
    private initOptions: initOptions;
    private pmGallery: any;

    private activeIndex: number = 0;
    private scrollDistanceTrack: number = 0;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.elMsGalleryWrapper = msGalleryWrapper;

        this.initOptions = Object.assign(defOptions, options, {
            activeIndex: this.activeIndex,
            scrollDistanceTrack: this.scrollDistanceTrack
        });

        this.init(this.elMsGalleryWrapper, this.initOptions);
    }

    init(wrapper: string, options: initOptions) {
        const resInitTemplate = initTemplate(wrapper, options);
        if (!resInitTemplate) return;

        this.pmGallery = Object.assign(resInitTemplate, this);

        this.pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
            this.pmGallery = Object.assign(this.pmGallery, {
                activeIndex: event.detail.activeIndex,
                scrollDistanceTrack: sliderScrollPreviews(this.pmGallery, event.detail.activeIndex)
            });
        });

        const helpers = [
            getPosPreviews
        ];

        const modules = [
            countPreSlides,
            positionPreviews,
            activeItem,
            wheelScrollPreviews,
            fullScreen
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