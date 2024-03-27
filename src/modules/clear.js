const clear = e => {
    const list = e.parentElement.parentElement;

    let numRemove = list.querySelector('.key').innerHTML;
    let numAll = document.querySelectorAll('.key');

    numAll.forEach((e, i) => {
        if (i > numRemove - 2)
            numAll[i].innerHTML = i + 1;
    })

    if (document.querySelector(".list").childElementCount === 2) {
        document.querySelectorAll('.def .li')[0].style = null;
        document.querySelectorAll('.def .li')[1].style = null;
    }

    list.remove();
}

export default clear;