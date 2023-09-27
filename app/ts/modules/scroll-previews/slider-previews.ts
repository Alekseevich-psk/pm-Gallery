function sliderPreviews(pmGallery: any) {
    const wrapper = pmGallery.wrapper;
    const countSlides = pmGallery.countSlides;
    const countPreSlides = pmGallery.initOptions.countPreSlides;
    const track = pmGallery.track;
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
        let disStart = 0;
        let disEnd = 0;
        let distance = 0;

        if (pmGallery.posPreviews == 'vertical') {
            distance = pmGallery.slideHeight;
        } else {
            distance = pmGallery.slideWidth;
        }

        if (pmGallery.activeIndex < index) {
            disStart = (pmGallery.activeIndex * distance) - distance;
            disEnd = (index * distance) - distance;
            console.log(disStart, disEnd);
            if (index <= 1 || (index - 1) > countHideSlides) return;
        }

        if (pmGallery.activeIndex > index) {
            disStart = (pmGallery.activeIndex * distance) - distance;
            disEnd = (index * distance) - distance;
            console.log(disStart, disEnd);
            if (pmGallery.activeIndex == countSlides - 1 || disEnd < 0) return;
        }

  

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

            console.log(disStart);
            
        }, speedAnim);

        function offAnim() {
            animFlag = false;
            disStart = distance;
            clearInterval(timerId);
        }
    }

}

export default sliderPreviews;