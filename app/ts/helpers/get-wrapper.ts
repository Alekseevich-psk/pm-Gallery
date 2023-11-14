export default function getWrapper(wrapper: any) {

    if (typeof (wrapper) === "object") {
        if (!wrapper) console.error('Element is not found');
        return wrapper as HTMLElement;
    }

    const el = document.querySelector(wrapper);
    if (!el) console.error(wrapper + ' - element is not found');
    return el as HTMLElement;

}