interface obj {
    width: number,
    height: number,
}

function getSizeElement(element: HTMLElement) {
    const res = new Object() as obj;
    res.width = Math.round(element.getBoundingClientRect().width);
    res.height = Math.round(element.getBoundingClientRect().height);
    return res;
}

export default getSizeElement;