const pmGallery = 'pm-gallery';

interface pmGalleryClasses {
    'wrapper': string,
    'overlay': string,
    'inner': string,
    'innerPreviews': string,
    'innerMainPicture': string,
    'track': string,
    'previewPicture': string,
}

const pmGalleryClasses: pmGalleryClasses = {
    'wrapper' : pmGallery + '__wrapper',
    'overlay' : pmGallery + '__overlay',
    'inner' : pmGallery + '__inner',
    'innerPreviews' : pmGallery + '__inner--previews',
    'innerMainPicture' : pmGallery + '__inner--main-picture',
    'track' : pmGallery + '__track',
    'previewPicture' : pmGallery + '__preview',
}

export default pmGalleryClasses;