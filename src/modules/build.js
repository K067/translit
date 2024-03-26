const build = (origin, translate, key) => {
    const list = document.querySelector('.list');

    list.innerHTML +=
        `<li>
    <span class="key">${key}</span>
    <span class="span">${origin}</span>
    </li>
    <li>
    <span class="span">${translate}</span>
    <img id="delete" src="./img/icon/delete.svg" alt="delete">
    </li>`
}

export default build;