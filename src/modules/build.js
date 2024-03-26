import clear from "./clear.js";

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

    Array.from(document.querySelectorAll('#delete')).forEach(elem => {
        elem.addEventListener('click', e => {
            clear(e.target);

            key--;
            console.log(key);
        })
    })
}

export default build;