const addItem = () => {
    const items = document.querySelectorAll('.itemAdd');
    let dotFlag = false;

    items.forEach(a => {
        a.addEventListener('click', (e) => {
            const input = document.querySelector('#calcArea');

            if (/[+-./*]/.test(e.target.value) && input.value.length === 0) {
                return;
            }

            if (/[+-/*]/.test(e.target.value) && /[+-/*]/.test(input.value[input.value.length - 1])) {
                input.value.split('')[input.value.length - 1] = e.target.value;
            } else if (e.target.value !== '.') {
                input.value += e.target.value;
                dotFlag = false;
            }

            if (e.target.value === '.') {
                if (input.value[input.value.length - 1] === '.') return;
                const str = input.value.split('');
                for (let i = 0; i < str.length; i++) {
                    if (str[i] === '.') {
                        dotFlag = true;
                    } else if (/[+-/*]/.test(str[i])) dotFlag = false;
                }
                if (dotFlag === false) input.value += e.target.value;
            }
        });
    });
}

export default addItem;