const clear = e => {
    const list = e.parentElement.parentElement;

    let countItems = document.querySelector(".list").childElementCount - 1;

    list.remove();

    console.log(countItems);

}

export default clear;