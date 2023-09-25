export default function getWrapper(wrapper: string) {
    const el = document.querySelector(wrapper);
    
    if (!el) console.error(wrapper + ' - element is not found');

    
    return el as HTMLElement;
}