import data from "./data.js";
import build from "./build.js";
import clear from "./clear.js";

const transliter = () => {
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn-input');

    let key = 2;

    const control = translate => {
        if (input.value !== '') {
            build(input.value, translate, key);

            input.value = '';
        }

        Array.from(document.querySelectorAll('#delete')).forEach(elem => {
            elem.addEventListener('click', e => {
                clear(e.target);

                key--;
                console.log(key);
            })
        })
    };

    btn.addEventListener('click', () => {
        control(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
        console.log(key);

        key++;
    })

    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            control(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
        }

        key++;
    })



    //alternative for capitalized failed.
    // let beta = text.split(" ");
    // let alpha = string.split(" ");
    // console.log(text.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
    // console.log(string.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
}

export default transliter;