const API_Key = `6bf07593c09dd2026dc8b511781f6db6`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}

const displayTemperature = data => {
    setInnerTextById('temperature', data.main.temp);
    setInnerTextById('condition', data.weather[0].main)
    console.log(data.weather[0].main);
};

const setInnerTextById = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function () {
    const searchField = document.getElementById('search-field');
    searchField.textContent = '';
    const city = searchField.value;
    // set city
    document.getElementById('city').innerText = city;
    loadTemperature(city);
})
loadTemperature('london');