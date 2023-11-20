interface preview {
    alt?: string,
    dataSrc?: string,
    src?: string,
}

export default function destroyedGallery(pmGallery: any) {
    const $gallery = pmGallery.gallery;
    if (!$gallery) return;

    const previews = pmGallery.previewsSrc;
    const img = (preview: preview) => `<img src="${preview.src}" data-src="${preview.dataSrc}" alt="${preview.alt}">`;

    $gallery.innerHTML = '';
    previews.forEach((preview: object) => {
        $gallery.insertAdjacentHTML('beforeend', img(preview));
    });
}