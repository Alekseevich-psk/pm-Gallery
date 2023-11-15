import fullScreen from "../../modules/full-screen/full-screen";

function keydownEsc(pmGallery: any) {
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && pmGallery.fullScreen) {
            fullScreen(pmGallery);
        }
    });
}

export default keydownEsc;