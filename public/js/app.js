const form = document.querySelector("form");
const search = document.querySelector("input");
const msg1 = document.querySelector("#msg-1");
const msg2 = document.querySelector("#msg-2");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    msg1.textContent = 'Fetching weather...';
    msg2.textContent = '';

    const location = search.value;
    fetch(`/weather?address=${location}`).then(res => {
        res.json().then(data => {
            if (data.error) {
                console.log(data.error);
                msg1.textContent = 'Error:';
                msg2.textContent = data.error;
            } else {
                console.log(data);
                msg1.textContent = `Location: ${data.location}, Temperature: ${data.temperature} degrees, Precipitation %: ${data.precipProbability}%, Summary: ${data.summary}`;
            }
        });
    });
});