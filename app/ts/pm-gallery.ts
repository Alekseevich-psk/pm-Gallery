import { pmgOptions } from './types/pmgOptions';
import initTemplate from './init-template/init';

import initListeners from './core/listeners/init-listeners';
import initPreviews from './previews/init-previews';
import initModules from './modules/init-modules';
import initCoreModules from './core/modules/init-core-modules';

class PmGallery {

    private pmGallery: any;
    private options: object;
    private initOptions: pmgOptions;
    private activeIndex: number;

    constructor(msGalleryWrapper: any, options: pmgOptions) {
        this.options = options;
        this.init(msGalleryWrapper);
    }

    init(wrapper: any) {
        const resInitTemplate = initTemplate(wrapper);
        if (!resInitTemplate) return;

        this.pmGallery = Object.assign({}, this, resInitTemplate);

        const modules = [
            initCoreModules,
            initListeners,
            initPreviews,
            initModules,
        ];

        modules.forEach(module => {
            this.pmGallery = Object.assign(this.pmGallery, module(this.pmGallery));
        });

        console.log(this.pmGallery);
    }

    update() {
    }

    on = function (event: string, foo: any) {
        const wrapper = this.pmGallery.wrapper as HTMLElement;
        if (!wrapper) return;
        wrapper.addEventListener(event, foo);
    }

}

export default PmGallery;