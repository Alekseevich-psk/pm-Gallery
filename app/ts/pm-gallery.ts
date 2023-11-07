import { pmgOptions } from './types/pmgOptions';
import initTemplate from './init-template/init';
import defOptions from "./core/setting/def-options";

import initOptions from './core/modules/options/init-options';
import initListeners from './core/listeners/init-listeners';
import initPreviews from './previews/init-previews';
import initModules from './modules/init-modules';

class PmGallery {

    private pmGallery: any;
    private options: object;
    private initOptions: pmgOptions;
    private activeIndex: number;

    constructor(msGalleryWrapper: string, options: pmgOptions) {
        this.options = options;
        this.init(msGalleryWrapper);
    }

    init(wrapper: string) {
        const resInitTemplate = initTemplate(wrapper);
        if (!resInitTemplate) return;

        this.pmGallery = this;
        this.pmGallery = Object.assign(resInitTemplate, this);

        const helpers = [
            initOptions
        ];

        const modules = [
            initListeners,
            initPreviews,
            initModules
        ];

        helpers.forEach(helper => {
            this.pmGallery = Object.assign(this.pmGallery, helper(this.pmGallery));
        });

        modules.forEach(module => {
            this.pmGallery = Object.assign(this.pmGallery, module(this.pmGallery));
        });

        console.log(this.pmGallery);

    }

    on = function (event: string, foo: any) {
        const wrapper = this.pmGallery.wrapper as HTMLElement;
        if (!wrapper) return;

        wrapper.addEventListener(event, foo);
    }

}

export default PmGallery;