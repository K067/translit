const build = (origin, translate) => {
    const alpha = document.querySelector('.alpha');
    const beta = document.querySelector('.beta');

    const pAlpha = document.createElement('p');
    const pBeta = document.createElement('p');

    pBeta.textContent = translate;
    pAlpha.textContent = origin;

    alpha.appendChild(pAlpha);
    beta.appendChild(pBeta);
}

export default build;