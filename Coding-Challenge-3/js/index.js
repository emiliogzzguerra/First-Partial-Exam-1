const form = document.querySelector('form');
const resultsSection = document.querySelector('.resultsSection');

const getTheFizz = (ev) => {
    ev.preventDefault();
    resultsSection.innerHTML = ''
    if (form.querySelector('input').value.length > 0) {
        const number = form.querySelector('input').value;
        for (let i = 1; i <= number; i++){
            let domString = '';
            const el = document.createElement('div');
            el.setAttribute('class', 'fizz-buzz-item')
            if (i % 3 == 0 && i % 5 == 0) { // Divisible by both
                domString = '<div class="fizzbuzz">fizzbuzz</div>'
            } else if (i % 3 == 0) { // Divisible by 3
                domString = '<div class="fizz">fizz</div>'
            } else if (i % 5 == 0) { // Divisible by both
                domString = '<div class="buzz">buzz</div>'
            } else { // None
                domString = `${i}`;
            }
            el.innerHTML = domString
            el.addEventListener('click', ev => {
                if (ev.target.innerHTML == 'fizzbuzz' || ev.target.innerHTML == 'fizz' || ev.target.innerHTML == 'buzz') {
                    ev.target.parentNode.remove();
                } else {
                    ev.target.remove();
                }

            })
            resultsSection.appendChild(el)
        }
    } else {
        results.innerHTML = `You need to enter a number...`;
    }
}

form.addEventListener('submit', getTheFizz);