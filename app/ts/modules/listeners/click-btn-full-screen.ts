import fullScreen from "../full-screen/full-screen";

function clickBtnFullScreen(pmGallery: any) {
    pmGallery.btnScreen.addEventListener('click', () => {
        fullScreen(pmGallery);
    });
}

export default clickBtnFullScreen;