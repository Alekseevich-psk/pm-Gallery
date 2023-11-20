import onPauseAutoPlay from "../../../modules/autoplay/on-pause-auto-play";

export default function clickBtnAutoPlay(pmGallery: any) {
    pmGallery.btnAutoPlay.addEventListener('click', () => {
        onPauseAutoPlay(pmGallery);
    });
};