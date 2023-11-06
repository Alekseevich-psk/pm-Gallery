const gallery = new PmGallery(".pm-gallery", {
    controls: {
        btnPrev: '.main__btn-slide--prev',
        btnNext: '.main__btn-slide--next',
        btnFullScreen: '.main__btn-slide--fullscreen',
    },
    spaceBetween: 20,
    fullScreen: {
        // visiblePreviews: false,
        pagination: true,
    }

});
