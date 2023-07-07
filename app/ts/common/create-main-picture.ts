export default function createMainPicture(wrapper: Element, paramForMainPicture: string) {
    const pmGalleryInnerPicture = wrapper.querySelector('.pm-gallery__inner--picture') as Element;
    if (!pmGalleryInnerPicture) return;
    const classForMainPicture = paramForMainPicture.substring(1)
    const mainPicture: string = `<img src="./" class="${classForMainPicture}" alt="">`;
    pmGalleryInnerPicture.insertAdjacentHTML('afterbegin', mainPicture);
}