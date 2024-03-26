import data from "./data.js";
import build from "./build.js";

const transliter = () => {
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn-input');

    let key = 2;

    const send = translate => {
        if (input.value !== '') {
            build(input.value, translate, key);

            key++

            input.value = '';
        }
    };

    btn.addEventListener('click', () => {
        send(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
    })

    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            send(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
        }
    })


    //alternative for capitalized failed.
    // let beta = text.split(" ");
    // let alpha = string.split(" ");
    // console.log(text.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
    // console.log(string.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
}

export default transliter;