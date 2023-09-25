import initTemplate from './init-template/init';
import { initOptions } from './types/init-options';

class PmGallery {

    private elMsGalleryWrapper: string;
    private initOptions: initOptions;

    constructor(msGalleryWrapper: string, options: initOptions) {
        this.elMsGalleryWrapper = msGalleryWrapper;
        this.initOptions = options;
        
        this.init(this.initOptions);
    }

    private init(options: initOptions) {
        const resInitTemplate = initTemplate(this.elMsGalleryWrapper, options);
        if (!resInitTemplate) return;
    }

}

export default PmGallery;