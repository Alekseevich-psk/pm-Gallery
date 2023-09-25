const pmGallery = 'pm-gallery';

interface pmgClasses {
    'wrapper': string,
    'overlay': string,
    'inner': string,
    'innerPreviews': string,
    'innerMainPicture': string,
    'track': string,
    'previewPicture': string,
    'controls': string,
    'btnScreen': string,
    'btnArrows': string,
    'btnArrow': string,
    'btnPrev': string,
    'btnNext': string,
}

const pmGalleryClasses: pmgClasses = {
    'wrapper' : pmGallery + '__wrapper',
    'overlay' : pmGallery + '__overlay',
    'inner' : pmGallery + '__inner',
    'innerPreviews' : pmGallery + '__inner--previews',
    'innerMainPicture' : pmGallery + '__inner--main-picture',
    'track' : pmGallery + '__track',
    'previewPicture' : pmGallery + '__preview',
    'controls' : pmGallery + '__controls',
    'btnScreen' : pmGallery + '__btn-screen',
    'btnArrows' : pmGallery + '__arrow',
    'btnArrow' : pmGallery + '__arrow',
    'btnPrev' : pmGallery + '__arrow--prev',
    'btnNext' : pmGallery + 'pm-gallery__arrow--next',
}

export default pmGalleryClasses;