import clear from "./clear.js";

const build = (origin, translate, key) => {
    const alpha = document.querySelector('.list-orgn');
    const beta = document.querySelector('.list-trns');


    alpha.innerHTML +=
        `<li>
    <span class="key">${key}</span>
    <span class="span">${origin}</span>
    </li>`;

    beta.innerHTML +=
        `<li>
    <span class="span">${translate}</span>
    <img id="delete" src="./img/icon/delete.svg" alt="delete">
    </li>`
}

export default build;