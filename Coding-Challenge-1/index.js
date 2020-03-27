const results = document.querySelector('.js-search-results');
const form = document.querySelector('.js-search-form');
console.log("hello")

const searchClicked = (ev) => { 
    ev.preventDefault();
    if (form.querySelector('input').value.length > 0) {
        const country = form.querySelector('input').value;
        results.innerHTML = `Since we're currently not connected to an API we weren't able to find information about ${country}`;
    } else {
        results.innerHTML = `You need to enter a country to search... Please try again`;
    }
    
}

form.addEventListener('submit', searchClicked)