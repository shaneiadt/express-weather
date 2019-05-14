const form = document.querySelector("form");
const search = document.querySelector("input");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log('Fetching weather...');

    const location = search.value;
    fetch(`http://localhost:3000/weather?address=${location}`).then(res => {
        res.json().then(data => {
            if (data.error) {
                console.log(data.error);
            } else {
                console.log(data);
            }
        });
    });
});