import getSizeElement from "../helpers/get-size-element";
import pmgClasses from "../setting/pmgClasses";

const res = {
    slideWidth: 0,
    slideHeight: 0,
    trackWidth: 0,
    trackHeight: 0,
    countSlides: 0,
    countHideSlides: 0,
    wrapperHeight: 0,
    wrapperWidth: 0,
    innerPreviewsHeight: 0,
    innerPreviewsWidth: 0,
    hideTrackLength: 0
};

function getCountPreviews(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;
    const posPreviews = pmGallery.posPreviews;
    const countSlides = previews.length;
    const sizeWrapper = getSizeElement(pmGallery.wrapper);
    
    let countPreSlides: number | string = options.countPreSlides;
    let slideHeight: number = options.slideHeight;
    let slideWidth: number = options.slideWidth;

    if (typeof (countPreSlides) === "number") {
        res.countHideSlides = countSlides - countPreSlides;

        if (countPreSlides === 0) {
            countPreSlides = 4;
        }
    }

    if (posPreviews === pmgClasses['vertical']) {

        if (typeof (countPreSlides) === "number") {
            slideHeight = Math.abs(sizeWrapper.height / countPreSlides);
        }

        res.innerPreviewsHeight = sizeWrapper.height;
        res.innerPreviewsWidth = options.slideWidth;

        res.trackWidth = slideWidth;

        res.trackHeight = (countSlides * slideHeight);
        res.hideTrackLength = (res.trackHeight - sizeWrapper.height);

        if (res.hideTrackLength > 0) {
            res.countHideSlides = Math.ceil(res.hideTrackLength / slideHeight);
        }
    }

    if (posPreviews === pmgClasses['horizontal']) {

        if (typeof (countPreSlides) === "number") {
            slideWidth = Math.abs(sizeWrapper.width / countPreSlides);
        }

        res.innerPreviewsHeight = options.slideHeight;
        res.innerPreviewsWidth = sizeWrapper.width;

        res.trackHeight = slideHeight;

        res.trackWidth = (countSlides * slideWidth);
        res.hideTrackLength = (res.trackWidth - sizeWrapper.width);

        if (res.hideTrackLength > 0) {
            res.countHideSlides = Math.ceil(res.hideTrackLength / slideWidth);
        }
    }

    previews.forEach(element => {
        const el = element as HTMLElement;
        el.style.height = slideHeight + 'px';
        el.style.width = slideWidth + 'px';
    });

    res.wrapperHeight = sizeWrapper.height;
    res.wrapperWidth = sizeWrapper.width;
    res.countSlides = countSlides;
    res.slideWidth = slideWidth;
    res.slideHeight = slideHeight;

    return res;
}

export default getCountPreviews;