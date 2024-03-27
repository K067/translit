const build = (origin, translate) => {
    const list = document.querySelector('.list');

    let countItems = document.querySelector(".list").childElementCount + 1;

    list.innerHTML += `
        <div class="li-wrapper">
        <div class='li li-orgn'>
        ${origin.length > 7 ? `<span class="tooltip">${origin}</span>` : ''}
        <span class="key">${countItems}</span>
        <span class="span">${origin}</span>
        </div>
        <div class='li li-trns'>
        ${origin.length > 7 ? `<span class="tooltip">${translate}</span>` : ''}
        <span class="span">${translate}</span>
        <img class="delete" src="./img/icon/delete.svg" alt="delete">
        </div>
        </div>
        `
}

export default build;