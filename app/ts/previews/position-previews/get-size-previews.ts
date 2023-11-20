import getSizeElement from "../../helpers/get-size-element";
import pmgClasses from "../../core/setting/pmgClasses";

const res = {
    previewWidth: 0,
    previewHeight: 0,
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
    const spaceBetween = Number(pmGallery.initOptions.spaceBetween);

    const countSlides = previews.length;
    const sizeWrapper = getSizeElement(pmGallery.wrapper);

    const previewsVertical = (posPreviews === pmgClasses['vertical'] ? true : false);
    const spaceBetweenAll = (spaceBetween * (countSlides - 1));

    let countPreSlides: number = Number(options.countPreSlides);
    let previewHeight: number = Number(options.previewHeight);
    let previewWidth: number = Number(options.previewWidth);

    let spaceBetweenActive = spaceBetween * (countPreSlides - 1);

    if (previewsVertical) {
        previewHeight = Math.abs(sizeWrapper.height - spaceBetweenActive) / countPreSlides;
    } else {
        previewWidth = Math.abs(sizeWrapper.width - spaceBetweenActive) / countPreSlides;
    }

    res.innerPreviewsHeight = (previewsVertical ?
        sizeWrapper.height : options.previewHeight);

    res.innerPreviewsWidth = (previewsVertical ?
        options.previewWidth : sizeWrapper.width);

    res.trackWidth = (previewsVertical ?
        previewWidth : ((countSlides * previewWidth) + spaceBetweenAll));

    res.trackHeight = (previewsVertical ?
        ((countSlides * previewHeight) + spaceBetweenAll) : previewHeight);

    res.hideTrackLength = (previewsVertical ?
        (res.trackHeight - sizeWrapper.height) : (res.trackWidth - sizeWrapper.width));

    res.countSlides = countSlides;

    res.wrapperHeight = sizeWrapper.height;
    res.wrapperWidth = sizeWrapper.width;

    res.previewWidth = previewWidth;
    res.previewHeight = previewHeight;
    res.spaceBetween = spaceBetween;

    if (res.hideTrackLength > 0) {
        let slideLength = (previewsVertical ? previewHeight : previewWidth);
        res.countHideSlides = Math.ceil(res.hideTrackLength / (slideLength + spaceBetween));
    } else {
        res.countHideSlides = 0;
    }

    return res;
}

export default getSizePreviews;