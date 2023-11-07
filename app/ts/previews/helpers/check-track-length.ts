function checkTrackLength(pmGallery: any) {
    if (pmGallery.trackWidth < pmGallery.wrapperWidth &&
        pmGallery.trackHeight < pmGallery.wrapperHeight) {
        pmGallery.track.style.transform = `translate(0, 0)`;
    }
};

export default checkTrackLength;