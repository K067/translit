import data from "./data.js";
import build from "./build.js";
import clear from "./clear.js";

const transliter = () => {
    const input = document.querySelector('input');
    const btn = document.querySelector('.btn-input');

    const control = translate => {
        if (input.value !== '') {
            build(input.value, translate);

            input.value = '';
        }

        Array.from(document.querySelectorAll('.delete')).forEach(elem => {
            elem.addEventListener('click', e => {
                clear(e.target);
            })
        })
    };

    document.querySelector('.btn-clear').addEventListener('click', () => {
        document.querySelectorAll('.add').forEach(e => {
            e.remove();
        });
    })

    btn.addEventListener('click', () => {
        control(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
    })

    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            control(input.value.replace(/[А-Яа-я]/gi, s => data[s]).trim());
        }

    })



    //alternative for capitalized failed.
    // let beta = text.split(" ");
    // let alpha = string.split(" ");
    // console.log(text.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
    // console.log(string.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
}

export default transliter;