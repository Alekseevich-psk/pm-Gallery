import pmgClasses from "../types/pmgClasses";

export default function initWrapper(wrapper: HTMLElement) {
    const htmlWrapper = `
        <div class="${pmgClasses['wrapper']}">
            <div class="${pmgClasses['overlay']}"></div>
        </div>`;

    wrapper.insertAdjacentHTML('afterbegin', htmlWrapper);
}