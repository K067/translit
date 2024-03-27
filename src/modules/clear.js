const clear = e => {
    const list = e.parentElement.parentElement;
    const def = document.querySelectorAll('.def .li');

    def[0].style = null;
    def[1].style = null;

    let countItems = document.querySelector(".list").childElementCount - 1;

    list.remove();

    console.log(countItems);

}

export default clear;