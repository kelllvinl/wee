var cube = document.querySelector('.cube');
var radioGroup = document.querySelector('.radio-group');
var currentClass = '';

function changeSide() {
  var checkedRadio = radioGroup.querySelector(':checked');
  var showClass = 'show-' + checkedRadio.value;
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
  cube.classList.add( showClass );
  currentClass = showClass;
}
// set initial side
changeSide();

radioGroup.addEventListener( 'change', changeSide );

weatherUpdate = (city) => {
  const cityName = document.querySelector("#cityName-London");
const Temp = document.querySelector("#temp-London");
const main = document.querySelector("#main-London");
const discription = document.querySelector("#discription-London");
const image = document.querySelector("#image-London");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdate("London");
weatherUpdateReading = (city) => {
  const cityName = document.querySelector("#cityName-Reading");
const Temp = document.querySelector("#temp-Reading");
const main = document.querySelector("#main-Reading");
const discription = document.querySelector("#discription-Reading");
const image = document.querySelector("#image-Reading");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdateReading("Reading");

weatherUpdateBirmingham = (city) => {
  const cityName = document.querySelector("#cityName-Birmingham");
const Temp = document.querySelector("#temp-Birmingham");
const main = document.querySelector("#main-Birmingham");
const discription = document.querySelector("#discription-Birmingham");
const image = document.querySelector("#image-Birmingham");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdateBirmingham("Birmingham");
weatherUpdateBristol = (city) => {
  const cityName = document.querySelector("#cityName-Bristol");
const Temp = document.querySelector("#temp-Bristol");
const main = document.querySelector("#main-Bristol");
const discription = document.querySelector("#discription-Bristol");
const image = document.querySelector("#image-Bristol");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdateBristol("Bristol");

weatherUpdateNottingham = (city) => {
  const cityName = document.querySelector("#cityName-Nottingham");
const Temp = document.querySelector("#temp-Nottingham");
const main = document.querySelector("#main-Nottingham");
const discription = document.querySelector("#discription-Nottingham");
const image = document.querySelector("#image-Nottingham");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdateNottingham("Nottingham");

weatherUpdateManchester = (city) => {
  const cityName = document.querySelector("#cityName-Manchester");
const Temp = document.querySelector("#temp-Manchester");
const main = document.querySelector("#main-Manchester");
const discription = document.querySelector("#discription-Manchester");
const image = document.querySelector("#image-Manchester");

  const xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=cad7ec124945dcfff04e457e76760d90`);
  // in place of appid enter your open weather API Key
  // You can create it for free
  // https://home.openweathermap.org/users/sign_up

  xhr.send();
  xhr.onload = () => {
    if (xhr.status === 404) {
      alert("Place not found");
    } else {
      var data = JSON.parse(xhr.response);
      cityName.innerHTML = data.name;
      Temp.innerHTML = `${Math.round(data.main.temp - 273.15)}°C`;
      main.innerHTML = data.weather[0].main;
      discription.innerHTML = data.weather[0].description;
      image.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    }
  };
};

weatherUpdateManchester("Manchester");