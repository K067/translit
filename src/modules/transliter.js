const transliter = text => {
    const ref = {
        'а': 'a',
        'б': 'b',
        'в': 'v',
        'г': 'g',
        'д': 'd',
        'е': 'e',
        'з': 'z',
        'и': 'i',
        'к': 'k',
        'л': 'l',
        'м': 'm',
        'н': 'n',
        'о': 'o',
        'п': 'p',
        'р': 'r',
        'с': 's',
        'т': 't',
        'у': 'u',
        'ф': 'f',
        'х': 'kh',
        'ж': 'ž',
        'ё': 'jo',
        'й': 'j',
        'ц': 'c',
        'ч': 'č',
        'ш': 'š',
        'щ': 'šč',
        'ъ': `"`,
        'ы': 'y',
        'ь': `'`,
        'ю': 'ju',
        'я': 'ja'
    };

    // const splitter=word=>{

    // }

    let string = text.toLowerCase().replace(/[А-Яа-я]/gi, s => ref[s]);

    console.log(text.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
    console.log(string.split(/\s/).reduce((l, w) => l += w.slice(0, 1), ''));
}

export default transliter;