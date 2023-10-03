import pmGalleryClasses from "../../types/pmgClasses";

function wheelScrollPreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const track = pmGallery.track;
    const speedScroll = 30;

    let distance: number = 0;
    let hideTrackLength: number = getHideTrackLength();
    let del: number = 0;

    pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
        if (track.style.transform !== '') {
            let transformValue = track.style.transform;

            if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
                distance = transformValue.replace(/[A-Za-z(),]/g, '').split(' ')[1];
            }

            if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
                distance = transformValue.replace(/[A-Za-z(),]/g, '').split(' ')[0];
            }
        }
    });

    pmGallery.wrapper.addEventListener('fullScreen', (event: CustomEvent) => {
        let newHideTrackLength = getHideTrackLength();
        del = hideTrackLength / newHideTrackLength;
        distance = Math.round(distance / del);

        if (event.detail.fullScreen) {
            track.style.transform = `translate(${distance + 'px'}, 0)`;
        } else {
            track.style.transform = `translate(0, ${distance + 'px'})`;
        }

        hideTrackLength = newHideTrackLength;
    });

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

        if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
            track.style.transform = `translate(0, ${distance + 'px'})`;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
            track.style.transform = `translate(${distance + 'px'}, 0)`;
        }

    });

    function getHideTrackLength() {
        let hideTrackLength = 0;

        if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
            hideTrackLength = pmGallery.countHideSlides * pmGallery.slideHeight;
        }

        if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
            hideTrackLength = pmGallery.countHideSlides * pmGallery.slideWidth;
        }

        return hideTrackLength;
    }
}

export default wheelScrollPreviews;