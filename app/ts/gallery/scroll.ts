export default function eventScroll(wrapper: Element) {
    const pmGalleryInnerPreviews = wrapper.querySelector('.pm-gallery__inner--previews');

    pmGalleryInnerPreviews.addEventListener('wheel', function (event: WheelEvent) {
        console.log(event.deltaY);
        // window.
    })
}