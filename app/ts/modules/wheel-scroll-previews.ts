function wheelScrollPreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const track = pmGallery.track;

    const speedScroll = 30;

    let distance = 0;
    let hideTrackLength = 0;

    innerPreviews.addEventListener('wheel', (event: any) => {
        event.preventDefault();

        if (event.wheelDeltaY < 0) {
            distance -= speedScroll;
        } else {
            distance += speedScroll;
        }

        if (distance > 0) distance = 0;

        if (Math.abs(distance) >= hideTrackLength) {
            distance = -1 * hideTrackLength;
        }

        if (pmGallery.posPreviews == 'vertical') {
            hideTrackLength = Math.abs(pmGallery.wrapperHeight - pmGallery.trackHeight);
            return track.style.transform = `translate(0, ${distance + 'px'})`;
        }

        if (pmGallery.posPreviews == 'horizontal') {
            hideTrackLength = Math.abs(pmGallery.wrapperWidth - pmGallery.trackWidth);
            return track.style.transform = `translate(${distance + 'px'}, 0)`;
        }

    });

}

export default wheelScrollPreviews;