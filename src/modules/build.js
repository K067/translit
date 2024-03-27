const build = (origin, translate) => {
    const list = document.querySelector('.list');

    document.querySelectorAll('.def .li')[0].style = 'border-radius: 8px 0 0 0; border-bottom: solid 1px #111;';
    document.querySelectorAll('.def .li')[1].style = 'border-radius: 0 8px 0 0; border-bottom: solid 1px #111;';

    list.innerHTML += `
        <div class="li-wrapper add">
        <div class='li'>
        ${origin.length > 7 ? `<span class="tooltip">${origin}</span>` : ''}
        <span class="key">${document.querySelector(".list").childElementCount + 1}</span>
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