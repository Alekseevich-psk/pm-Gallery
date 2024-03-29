import pmGalleryClasses from "../../core/setting/pmgClasses";

function wheelScrollPreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const track = pmGallery.track;
    const speedScroll = 30;

    let distance: number = 0;
    let hideTrackLength: number = pmGallery.hideTrackLength;
    let del: number = 0;

    window.addEventListener('resize', () => {
        hideTrackLength = pmGallery.hideTrackLength;
        distance = 0;
        track.style.transform = `translate(0, 0)`;
    })

    pmGallery.wrapper.addEventListener('changeIndex', (event: CustomEvent) => {
        if (track.style.transform !== '') {
            let transformValue = track.style.transform;

            if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
                distance = Number(transformValue.replace(/[A-Za-z(),]/g, '').split(' ')[1]);
            }

            if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
                distance = Number(transformValue.replace(/[A-Za-z(),]/g, '').split(' ')[0]);
            }
        }
    });

    pmGallery.wrapper.addEventListener('fullScreen', (event: CustomEvent) => {
        del = hideTrackLength / pmGallery.hideTrackLength;
        distance = Math.round(distance / del);

        hideTrackLength = pmGallery.hideTrackLength;

        if (pmGallery.hideTrackLength < 0) {
            return track.style.transform = `translate(0, 0)`;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
            track.style.transform = `translate(0, ${distance + 'px'})`;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
            track.style.transform = `translate(${distance + 'px'}, 0)`;
        }

    });

    innerPreviews.addEventListener('wheel', (event: any) => {
        event.preventDefault();

        if (hideTrackLength < 0) {
            return track.style.transform = `translate(0, 0)`;
        }

        if (event.wheelDeltaY < 0) {
            distance -= speedScroll;
        } else {
            distance += speedScroll;
        }

        if (distance > 0) distance = 0;

        if (Math.abs(distance) >= hideTrackLength) {
            distance = -1 * hideTrackLength;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
            track.style.transform = `translate(0, ${distance + 'px'})`;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
            track.style.transform = `translate(${distance + 'px'}, 0)`;
        }
    });
}

export default wheelScrollPreviews;