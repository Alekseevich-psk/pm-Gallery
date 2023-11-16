import offPreloader from "./off-preloader";

function checkLoadPreviews(pmGallery: any) {
    const previews = pmGallery.previewsSrc;
    const promises: any[] = [];

    previews.forEach((preview: any) => {
        promises.push(new Promise(function (resolve, reject) {
            const image = new Image();
            image.src = preview.src;

            image.addEventListener("load", function () {
                resolve(image.src);
            });
        }));
    });

    Promise.all(promises).then(
        result => {
            offPreloader(pmGallery.gallery);
        },
        error => {
            console.error(error);
        });
}

export default checkLoadPreviews;