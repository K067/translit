const clear = e => {
    const list = e.parentElement;
    const listSib = list.previousSibling.previousSibling

    list.parentElement.removeChild(listSib);
    list.parentElement.removeChild(list);


}

export default clear;