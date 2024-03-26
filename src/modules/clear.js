const clear = (e, key) => {
    const list = e.parentElement;
    const listSib = list.previousSibling.previousSibling

    list.parentElement.removeChild(listSib);
    list.parentElement.removeChild(list);

    key--;
}

export default clear;