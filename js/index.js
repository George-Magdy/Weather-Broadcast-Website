
var weather;
var site = "cairo"

async function getweather() {

    var response = await fetch(`http://api.weatherapi.com/v1/forecast.json?key=93fe32b093f64eb5a99144410231402&q=${site}&days=7`)

    weather = await response.json()
}

function days() {
    const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    const d = new Date();
    let day = weekday[d.getDay()];
    document.getElementById("fDay").innerHTML = day;

    if (d.getDay() == 5) {
        document.getElementById("sDay").innerHTML = weekday[d.getDay() + 1];
        document.getElementById("tDay").innerHTML = weekday[0];
    } else if (d.getDay() == 6) {
        document.getElementById("sDay").innerHTML = weekday[0];
        document.getElementById("tDay").innerHTML = weekday[1];
    } else {
        document.getElementById("sDay").innerHTML = weekday[d.getDay() + 1];
        document.getElementById("tDay").innerHTML = weekday[d.getDay() + 2];
    }

}



function display() {

    document.getElementById("weatherlocation").innerHTML = weather.location.name
    document.getElementById("temp").innerHTML = weather.current.temp_c + "<sup>o</sup>C"
    document.getElementById("tempCond").innerHTML = `<img class="w-100 m-3" src=${weather.current.condition.icon} alt="">`
    document.getElementById("weatherCond").innerHTML = weather.current.condition.text
    document.getElementById("ndayImg").innerHTML = `<img class="w-100 my-3" src=${weather.forecast.forecastday[1].day.condition.icon} alt="">`
    document.getElementById("ndayTemp").innerHTML = ` <p class="mb-1 fs-4 fw-bold">${weather.forecast.forecastday[1].day.maxtemp_c}<sup>o</sup>C</p>
    <p>${weather.forecast.forecastday[1].day.mintemp_c}<sup>o</sup>C</p>`
    document.getElementById("nweatherCond").innerHTML = weather.forecast.forecastday[1].day.condition.text
    document.getElementById("afterNdayImg").innerHTML = `<img class="w-100 my-3" src=${weather.forecast.forecastday[2].day.condition.icon} alt="">`
    document.getElementById("afterNdayTemp").innerHTML = ` <p class="mb-1 fs-4 fw-bold">${weather.forecast.forecastday[2].day.maxtemp_c}<sup>o</sup>C</p>
    <p>${weather.forecast.forecastday[2].day.mintemp_c}<sup>o</sup>C</p>`
    document.getElementById("afterNweatherCond").innerHTML = weather.forecast.forecastday[2].day.condition.text
}



async function getall() {
    await getweather()
    display()
    days()

}
getall()


function search(index) {
    if (index.length > 2) {
        site = index
        getall()
    }
}

