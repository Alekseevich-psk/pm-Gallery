import getSizeElement from "../../helpers/get-size-element";
import pmgClasses from "../../setting/pmgClasses";

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
    hideTrackLength: 0,
    spaceBetween: 0
};

function getSizePreviews(pmGallery: any) {
    const options = pmGallery.initOptions;
    const previews = pmGallery.previews as NodeList;
    const posPreviews = pmGallery.posPreviews;
    const spaceBetween = pmGallery.initOptions.spaceBetween ?
        pmGallery.initOptions.spaceBetween : 0;

    const countSlides = previews.length;
    const sizeWrapper = getSizeElement(pmGallery.wrapper);

    const previewsVertical = (posPreviews === pmgClasses['vertical'] ? true : false);
    const spaceBetweenAll = (spaceBetween * (countSlides - 1));

    let countPreSlides: number = options.countPreSlides;
    let slideHeight: number = options.slideHeight;
    let slideWidth: number = options.slideWidth;

    if (typeof (countPreSlides) === "number") {
        let spaceBetweenActive = spaceBetween * (countPreSlides - 1);

        if (previewsVertical) {
            slideHeight = Math.abs(sizeWrapper.height - spaceBetweenActive) / countPreSlides;
        } else {
            slideWidth = Math.abs(sizeWrapper.width - spaceBetweenActive) / countPreSlides;
        }
    }

    res.innerPreviewsHeight = (previewsVertical ?
        sizeWrapper.height : options.slideHeight);

    res.innerPreviewsWidth = (previewsVertical ?
        options.slideWidth : sizeWrapper.width);

    res.trackWidth = (previewsVertical ?
        slideWidth : ((countSlides * slideWidth) + spaceBetweenAll));

    res.trackHeight = (previewsVertical ?
        ((countSlides * slideHeight) + spaceBetweenAll) : slideHeight);

    res.hideTrackLength = (previewsVertical ?
        (res.trackHeight - sizeWrapper.height) : (res.trackWidth - sizeWrapper.width));

    res.countSlides = countSlides;

    res.wrapperHeight = sizeWrapper.height;
    res.wrapperWidth = sizeWrapper.width;

    res.slideWidth = slideWidth;
    res.slideHeight = slideHeight;
    res.spaceBetween = spaceBetween;

    if (res.hideTrackLength > 0) {
        let slideLength = (previewsVertical ? slideHeight : slideWidth);
        res.countHideSlides = Math.ceil(res.hideTrackLength / (slideLength + spaceBetween));
    } else {
        res.countHideSlides = 0;
    }

    return res;
}

export default getSizePreviews;