export default function initWrapper(wrapper: HTMLElement) {
    const htmlWrapper = `
        <div class="pm-gallery__wrapper">
            <div class="pm-gallery__overlay"></div>
        </div>`;

    wrapper.insertAdjacentHTML('afterbegin', htmlWrapper);
}