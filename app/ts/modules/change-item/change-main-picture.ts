function changeMainPicture(pmGallery: any, index: number) {
    const picture = pmGallery.mainPicture;
    const preview = pmGallery.previews[index].querySelector('img');

    if (!preview) return;
    picture.src = preview.src;
}

export default changeMainPicture;