function sliderPreviews(pmGallery: any) {
    const wrapper = pmGallery.wrapper;
    const track = pmGallery.track;
    
    const countSlides = pmGallery.countSlides;
    const countPreSlides = pmGallery.initOptions.countPreSlides;
    const countHideSlides = pmGallery.countHideSlides;

    const speedAnim = 100;
    const animStep = 20;

    let timerId: any = 0;
    let animFlag: boolean = false;

    wrapper.addEventListener('changeActiveIndex', (event: CustomEvent) => {
        scrollTrack(event.detail.activeIndex);
    });

    function scrollTrack(index: number) {

        if (pmGallery.trackHeight < pmGallery.wrapperHeight) return;
        if (pmGallery.activeIndex === index) return;

        let direction = (pmGallery.activeIndex < index) ? 'next' : 'prev';
        let disStart: number = 0;
        let disEnd: number = 0;
        let distance: number = 0;
        let disCut: number = 0;

        if (pmGallery.posPreviews == 'vertical') {
            distance = pmGallery.slideHeight;
            disCut = pmGallery.countHideSlides * pmGallery.slideHeight;
        } else {
            distance = pmGallery.slideWidth;
            disCut = pmGallery.countHideSlides * pmGallery.slideWidth;
        }

        if (pmGallery.activeIndex < index) {
            disStart = (pmGallery.activeIndex * distance);
            disEnd = (index * distance);
        }

        if (pmGallery.activeIndex > index) {
            disStart = (pmGallery.activeIndex * distance);
            disEnd = (index * distance);
        }

        if (disEnd > disCut || disStart > disCut) return;

        timerId = setInterval(() => {
            if (direction === 'next') {
                disStart += animStep;

                if (disStart >= disEnd) {
                    offAnim();
                }
            }

            if (direction === 'prev') {
                disStart -= animStep;

                if (disStart <= disEnd) {
                    offAnim();
                }
            }

            if (pmGallery.posPreviews == 'vertical') {
                track.style.transform = `translate(0, ${(-1 * disStart) + 'px'})`;
            } else {
                track.style.transform = `translate(${(-1 * disStart) + 'px'}, 0)`;
            }

        }, speedAnim);

        function offAnim() {
            animFlag = false;
            clearInterval(timerId);
            disStart = disEnd;
        }
    }

}

export default sliderPreviews;