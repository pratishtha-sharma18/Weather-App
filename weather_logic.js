const BASE_URL = "https://wttr.in";
const button = document.querySelector("#btn");
const temperature = document.querySelector("#Temp");
const cdCover = document.querySelector("#cloudCover");
const humid = document.querySelector("#humidity");
const adv = document.querySelector(".advice");
const heading = document.querySelector("#nxtSubHead");
const point1 = document.querySelector(".pt1");
const point2 = document.querySelector(".pt2");
let finalVal = 0;
button.addEventListener("click", async () => {
    let state = document.querySelector("#enter");
    let stateVal = state.value;
    let URL = `${BASE_URL}/${stateVal}?format=j1`;
    let response = await fetch(URL);
    let data = await response.json();
    const val1 = data.current_condition[0].FeelsLikeC;
    const val2 = data.current_condition[0].cloudcover;
    const val3 = data.current_condition[0].humidity;
    temperature.innerText = `Temperature : ${val1} C`;
    cdCover.innerText = `Cloud Cover : ${val2} %`;
    humid.innerText = `Humidity : ${val3} % `;
    finalVal = val3;
    measure();
})
function measure() {
    if (finalVal > 80) {
        heading.innerText = "There is possibility of rain:";
        point1.innerText = "(1) Carry your umbrella.";
        point2.innerText = "(2) Stay at home if possible.";
    } else if (finalVal < 50) {
        heading.innerText = "It is sunny today:";
        point1.innerText = "(1) Apply sunscreen.";
        point2.innerText = "(2) Wear light clothing.";

    } else if (50 < finalVal < 80) {
        heading.innerText = "It is humid day:";
        point1.innerText = "(1) Stay Hydrated.";
        point2.innerText = "(2) Use fans for cooling."
    }
    adv.classList.remove("hidden");
}