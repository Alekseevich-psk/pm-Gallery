import { pmgOptions } from './types/pmgOptions';
import initTemplate from './init-template/init';

import initListeners from './core/listeners/init-listeners';
import initPreviews from './previews/init-previews';
import initModules from './modules/init-modules';
import initCoreModules from './core/modules/init-core-modules';
import onInitGallery from './core/events/on-init-gallery';

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

        this.pmGallery = Object.assign({}, this, resInitTemplate);

        const modules = [
            initCoreModules,
            initListeners,
            initPreviews,
            initModules,
            onInitGallery
        ];

        modules.forEach(module => {
            this.pmGallery = Object.assign(this.pmGallery, module(this.pmGallery));
        });
    }

    on = function (event: string, foo: any) {
        const wrapper = this.pmGallery.wrapper as HTMLElement;
        if (!wrapper) return;
        wrapper.addEventListener(event, foo);
    }

}

export default PmGallery;