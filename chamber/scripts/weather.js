const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const urlWeather = "https://api.openweathermap.org/data/2.5/weather?lat=43.49&lon=-112.04&units=imperial&appid=445a564474f9f6f5637ba71cff8e7a8d";
const forecastUrl = urlWeather.replace("/weather?", "/forecast?");

async function apiFetch() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      displayResults(data);
    } else {
      throw new Error(await response.text());
    }
  } catch (error) {
    console.error(error);
  }

}

apiFetch();


function displayResults(data) {
    currentTemp.innerHTML = `${Math.round(data.main.temp)}&deg;F`;

    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    const desc = data.weather[0].description;

    weatherIcon.src = iconsrc;
    weatherIcon.alt = desc;
    weatherIcon.hidden = false;

    captionDesc.textContent = desc;
}

async function fetchForecast() {
    try {
        const response = await fetch(forecastUrl);

        if (!response.ok) {
            throw new Error(await response.text());
        }

        const data = await response.json();
        console.log(data);

        displayForecast(data);

    } catch (error) {
        console.error(error);
    }
}

function displayForecast(data) {
    const offset = data.city.timezone;

    function localDate(timestamp) {
        return new Date((timestamp + offset) * 1000)
            .toISOString().slice(0, 10);
    }

    const today = localDate(Date.now() / 1000);

    const future = data.list.filter(item =>
        localDate(item.dt) > today
    );

    const dates = [...new Set(
        future.map(item => localDate(item.dt))
    )].slice(0, 2);

    dates.forEach((date, index) => {
        const forecasts = future.filter(item =>
            localDate(item.dt) === date
        );

        const noon = forecasts.reduce((best, item) => {
            const hour = new Date(
                (item.dt + offset) * 1000
            ).getUTCHours();

            const bestHour = new Date(
                (best.dt + offset) * 1000
            ).getUTCHours();

            return Math.abs(hour - 12) <
                   Math.abs(bestHour - 12) ? item : best;
        });

        document.querySelector(`#day${index + 1}`).textContent =
            `${Math.round(noon.main.temp)}°F`;
    });
}

fetchForecast();