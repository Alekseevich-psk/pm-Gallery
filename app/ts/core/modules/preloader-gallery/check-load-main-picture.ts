import offPreloader from "./off-preloader";
import onPreloader from "./on-preloader";

function checkLoadMainPicture(pmGallery: any, index: number) {
    const previews = pmGallery.previewsSrc;
    let timerId: any = 0;

    const promise = new Promise(function (resolve, reject) {
        const image = new Image();
        image.src = previews[index].dataSrc;

        image.addEventListener("load", function () {
            resolve(image.src);
        });

        timerId = setTimeout(() => {
            onPreloader(pmGallery.innerPicture);
        }, 300);
    });

    promise.then(
        result => {
            clearInterval(timerId);
            offPreloader(pmGallery.innerPicture);
        },
        error => {
            console.error(error);
        });
}


export default checkLoadMainPicture;