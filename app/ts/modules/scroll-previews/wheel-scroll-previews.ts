import pmGalleryClasses from "../../types/pmgClasses";

function wheelScrollPreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const countHideSlides = pmGallery.countHideSlides;
    const track = pmGallery.track;
    const speedScroll = 30;

    let distance: number = 0;
    let hideTrackLength: number = 0;

    if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
        hideTrackLength = Math.abs(countHideSlides * pmGallery.slideHeight);
    }

    if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
        hideTrackLength = Math.abs(countHideSlides * pmGallery.slideWidth);
    }

    pmGallery.wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
        if (track.style.transform !== '') {
            let transformValue = track.style.transform;

            if (pmGallery.posPreviews == pmGalleryClasses['vertical']) {
                transformValue = transformValue.replace(/\D/g, '').slice(1);
            } 
            
            if (pmGallery.posPreviews == pmGalleryClasses['horizontal']) {
                transformValue = transformValue.replace(/\D/g, '').slice(0, -1);
            }

            distance = transformValue * -1;
        }
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
}

export default wheelScrollPreviews;