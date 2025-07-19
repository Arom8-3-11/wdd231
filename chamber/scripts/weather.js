const apiKey = '2fe02b18ded903affce7ebc9fec49d2d';
const city = 'Belgrade';
const state = 'MT';
const country = 'US';

async function getWeatherData() {
    try {
        const currentResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&appid=${apiKey}&units=imperial`
        );
        const currentData = await currentResponse.json();
        
        const forecastResponse = await fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${city},${state},${country}&appid=${apiKey}&units=imperial`
        );
        const forecastData = await forecastResponse.json();
        
        displayCurrentWeather(currentData);
        displayForecast(forecastData);
    } catch (error) {
        console.error('Error fetching weather data:', error);
        document.getElementById('current-temperature').textContent = 'N/A';
        document.getElementById('weather-description').textContent = 'Weather data unavailable';
    }
}

function displayCurrentWeather(data) {
    document.getElementById('current-temperature').textContent = Math.round(data.main.temp);
    document.getElementById('weather-description').textContent = data.weather[0].description;
}

function displayForecast(data) {
    const forecastContainer = document.getElementById('forecast-container');
    forecastContainer.innerHTML = '';
    
    for (let i = 8; i <= 24; i += 8) {
        if (data.list[i]) {
            const forecast = data.list[i];
            const date = new Date(forecast.dt * 1000);
            const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
            
            const forecastItem = document.createElement('div');
            forecastItem.classList.add('forecast-item');
            forecastItem.innerHTML = `
                <div class="forecast-day">${dayName}</div>
                <div class="forecast-temp">${Math.round(forecast.main.temp)}°F</div>
                <div class="forecast-desc">${forecast.weather[0].description}</div>
            `;
            forecastContainer.appendChild(forecastItem);
        }
    }
}