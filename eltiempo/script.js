// Datos predefinidos del tiempo para demostración
const weatherData = {
  "Nueva York": {
    temp: 22,
    humidity: 60,
    windSpeed: 5,
    description: "Parcialmente nublado",
    icon: "03d",
    type: "cloudy",
  },
  Londres: {
    temp: 18,
    humidity: 70,
    windSpeed: 8,
    description: "Lluvia ligera",
    icon: "10d",
    type: "rainy",
  },
  Tokio: {
    temp: 28,
    humidity: 65,
    windSpeed: 3,
    description: "Cielo despejado",
    icon: "01d",
    type: "clear",
  },
  París: {
    temp: 20,
    humidity: 55,
    windSpeed: 6,
    description: "Nubes dispersas",
    icon: "02d",
    type: "cloudy",
  },
  Sídney: {
    temp: 25,
    humidity: 50,
    windSpeed: 7,
    description: "Soleado",
    icon: "01d",
    type: "sunny",
  },
};

const citySelect = document.getElementById("city-select");
const weatherInfo = document.getElementById("weather-info");
const errorMessage = document.getElementById("error-message");

citySelect.addEventListener("change", getWeather);

function getWeather() {
  const city = citySelect.value;
  if (weatherData[city]) {
    displayWeather(city, weatherData[city]);
  } else if (city === "") {
    showError("Por favor, selecciona una ciudad.");
  } else {
    showError("Ciudad no encontrada. Por favor, intenta con otra ciudad.");
  }
}

function displayWeather(city, data) {
  document.getElementById("city-name").textContent = city;
  document.getElementById("temperature").textContent = `${data.temp}°C`;
  document.getElementById("description").textContent = data.description;
  document.getElementById(
    "humidity"
  ).textContent = `Humedad: ${data.humidity}%`;
  document.getElementById(
    "wind-speed"
  ).textContent = `Velocidad del viento: ${data.windSpeed} m/s`;
  document.getElementById(
    "weather-icon"
  ).src = `https://openweathermap.org/img/wn/${data.icon}.png`;

  weatherInfo.classList.remove("hidden");
  errorMessage.classList.add("hidden");

  // Cambiar el fondo basado en el tipo de clima
  document.body.className = data.type;
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.classList.remove("hidden");
  weatherInfo.classList.add("hidden");
}

// Inicializar con una ciudad por defecto
citySelect.value = "Nueva York";
getWeather();
