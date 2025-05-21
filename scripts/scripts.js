const apiKey = '89091498b24f73d7dfebcbef76e8d0c0'; 
const url = 'https://api.openweathermap.org/data/2.5/weather';

async function fetchWeather(city) {
    try {
        const response = await fetch(`${url}?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        if (response.ok) {
            updateWeatherSection(data);
        } else {
            alert('City not found. Please try again.');
        }
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

function updateWeatherSection(data) {
    const temperature = Math.round(data.main.temp);
    const condition = data.weather[0].description;
    const windSpeed = data.wind.speed;
    const windChill = calculateWindChill(temperature, windSpeed);

    document.getElementById('temperature').textContent = `${temperature}°C`;
    document.getElementById('condition').textContent = condition.charAt(0).toUpperCase() + condition.slice(1);
    document.getElementById('wind-speed').textContent = `${windSpeed} m/s`;
    document.getElementById('wind-chill').textContent = `${windChill}°C`;
}

function calculateWindChill(temperature, windSpeed) {
    // Wind chill formula
    return Math.round(13.12 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16));
}

// Call the function with a default city
fetchWeather('Ibadan');
