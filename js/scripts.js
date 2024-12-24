// Variáveis e seleção de elementos
const apiKey = "12ecf597f3b89da9a2ddd8c610c2ed1d";
const apiCountryURL = "https://flagcdn.com/w320/";
const unsplashAccessKey = "gYXUD6YBUHEnLjuLQQhyme596Gp2C9kFXX8o2BEe7A0";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector("#search");

const cityElement = document.querySelector("#city");
const tempElement = document.querySelector("#temperature span");
const descElement = document.querySelector("#description");
const weatherIconElement = document.querySelector("#weather-icon");
const countryElement = document.querySelector("#country");
const humidityElement = document.querySelector("#humidity span");
const windElement = document.querySelector("#wind span");

const weatherContainer = document.querySelector("#weather-data");

const errorMessageContainer = document.querySelector("#error-message");
const loader = document.querySelector("#loader");

const suggestionContainer = document.querySelector("#suggestions");
const suggestionButtons = document.querySelectorAll("#suggestions button");

// Loader
const toggleLoader = () => {
  loader.classList.toggle("hide");
};

const getUnsplashImage = async (city) => {
  const apiUnsplashURL = `https://api.unsplash.com/photos/random?query=${city}&client_id=${unsplashAccessKey}`;

  try {
    const response = await fetch(apiUnsplashURL);
    const data = await response.json();

    document.body.style.backgroundImage = `url("${data.urls.regular}")`;
  } catch (error) {
    console.error("Erro ao obter imagem do Unsplash:", error);
    // Defina uma imagem de fundo padrão, caso a busca falhe
    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?landscape")`;
  }
};

// Funções

const getWeatherData = async (city) => {
  toggleLoader();

  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  const res = await fetch(apiWeatherURL);
  const data = await res.json();

  toggleLoader();

  return data;
};

// Tratamento de erro
const showErrorMessage = () => {
  errorMessageContainer.classList.remove("hide");
};

const hideInformation = () => {
  errorMessageContainer.classList.add("hide");
  weatherContainer.classList.add("hide");

  suggestionContainer.classList.add("hide");
};

const showWeatherData = async (city) => {
  hideInformation();

  const data = await getWeatherData(city);

  if (data.cod === "404") {
    showErrorMessage();
    return;
  }

  cityElement.innerText = data.name;
  tempElement.innerText = parseInt(data.main.temp);
  descElement.innerText = data.weather[0].description;
  weatherIconElement.setAttribute(
    "src",
    `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
  );

  const countryCode = data.sys.country.toLowerCase();
  countryElement.setAttribute("src", `${apiCountryURL}${countryCode}.png`);

  humidityElement.innerText = `${data.main.humidity}%`;
  windElement.innerText = `${data.wind.speed} km/h`;

  await getUnsplashImage(city);

  weatherContainer.classList.remove("hide");
};
// Eventos
searchBtn.addEventListener("click", async (e) => {
  e.preventDefault();

  const city = cityInput.value;

  showWeatherData(city);

  cityInput.value = "";
});

cityInput.addEventListener("keyup", (e) => {
  if (e.code === "Enter") {
    const city = e.target.value;

    showWeatherData(city);

    cityInput.value = "";
  }
});

// Sugestões
suggestionButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const city = btn.getAttribute("id");

    showWeatherData(city);
  });
});
