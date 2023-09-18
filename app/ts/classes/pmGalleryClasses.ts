const pmGallery = 'pm-gallery';

interface pmGalleryClasses {
    'wrapper': string,
    'overlay': string,
    'inner': string,
    'wrapperForPreviews': string,
    'wrapperForMainPicture': string,
    'track': string,
    'previewPicture': string,
}

const pmGalleryClasses: pmGalleryClasses = {
    'wrapper' : pmGallery + '__wrapper',
    'overlay' : pmGallery + '__overlay',
    'inner' : pmGallery + '__inner',
    'wrapperForPreviews' : pmGallery + '__inner--previews',
    'wrapperForMainPicture' : pmGallery + '__inner--main-picture',
    'track' : pmGallery + '__track',
    'previewPicture' : pmGallery + '__preview',
}

export default pmGalleryClasses;