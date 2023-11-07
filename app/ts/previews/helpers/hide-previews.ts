function hidePreviews(pmGallery: any) {
    const innerPreviews = pmGallery.innerPreviews;
    const innerPicture = pmGallery.innerPicture;
    const track = pmGallery.track;

    innerPreviews.style.display = 'none';
    innerPicture.style.width = 100 + '%';
    innerPicture.style.height = 100 + '%';

    innerPreviews.style.top = 0;
    innerPreviews.style.bottom = 0;
    innerPicture.style.left = 0;
    innerPicture.style.right = 0;

    track.className = '';
}

export default hidePreviews;