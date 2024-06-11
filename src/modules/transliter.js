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
        document.querySelectorAll('.def .li')[0].style = null;
        document.querySelectorAll('.def .li')[1].style = null;

        document.querySelectorAll('.add').forEach(e => {
            e.remove();
        });
    })

    btn.addEventListener('click', () => {
        control(input.value.replace(/[А-ЯЂЉЊЋЏа-яђљњћџ]/gi, s => data[s]).trim());
    })

    input.addEventListener('keypress', e => {
        if (e.key === 'Enter') {
            control(input.value.replace(/[А-ЯЂЉЊЋЏа-яђљњћџ]/gi, s => data[s]).trim());
        }
    })
}

export default transliter;