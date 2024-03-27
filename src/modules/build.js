const build = (origin, translate) => {
    const list = document.querySelector('.list');
    const def = document.querySelectorAll('.def .li');

    let countItems = document.querySelector(".list").childElementCount + 1;
    console.log(def[0]);
    def[0].style = 'border-radius: 8px 0 0 0; border-bottom: solid 1px #111; border-right: solid 1px #111; ';
    def[1].style = 'border-radius: 0 8px 0 0; border-bottom: solid 1px #111; border-left: solid 1px #111;';

    list.innerHTML += `
        <div class="li-wrapper add">
        <div class='li'>
        ${origin.length > 7 ? `<span class="tooltip">${origin}</span>` : ''}
        <span class="key">${countItems}</span>
        <span class="span">${origin}</span>
        </div>
        <div class='li'>
        ${origin.length > 7 ? `<span class="tooltip">${translate}</span>` : ''}
        <span class="span">${translate}</span>
        <img class="delete" src="./img/icon/delete.svg" alt="delete">
        </div>
        </div>
        `
}

export default build;