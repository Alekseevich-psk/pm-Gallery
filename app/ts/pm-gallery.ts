import initTemplate from './init-template/init';
import { Params } from './types/params';

class PmGallery {

    private elMsGalleryWrapper: string;

    constructor(msGalleryWrapper: string, params: Params) {
        this.elMsGalleryWrapper = msGalleryWrapper;
        this.init();
    }

    private init() {
        const resInitTemplate = initTemplate(this.elMsGalleryWrapper);
        if (!resInitTemplate) return;
    }

}

export default PmGallery;