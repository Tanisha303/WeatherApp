const container= document.querySelector(".container");
const search= document.querySelector(".search-box button");
const weatherBox= document.querySelector(".weather-box");
const weatherDetails= document.querySelector(".weather-details");
const error404= document.querySelector(".not-found");
const cityHide= document.querySelector(".city-hide");

search.addEventListener("click" , (event)=>{

    const APIKey='65c58c7e81c88f5d52f55c85e3eab5ed';
    const city=document.querySelector('.search-box input').value;

    if(city==" "){
        return;
    }
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`).then(Response=>Response.json()).then(json =>{
        if(json.cod=='404'){
            
            cityHide.textContent=city;
            container.style.height='400px';
            weatherBox.classList.remove("active");
            weatherDetails.classList.remove("active");
            error404.classList.add("active");
            return;
        }

       


        const image=document.querySelector('.weather-box img');
        const temperature=document.querySelector('.weather-box .temperature');
        const description=document.querySelector('.weather-box .description');
        const humidity=document.querySelector('.weather-details .humidity span');
        const wind=document.querySelector('.weather-details .wind span');

        if(cityHide.textContent==city){
            return;
        }
        else{
            cityHide.textContent=city;
            container.style.height='555px';
            container.classList.add("active");
            weatherBox.classList.add("active");
            weatherDetails.classList.add("active");
            error404.classList.remove("active");
            
            setTimeout(()=>{
  container.classList.remove("active")
            },2500)
        switch (json.weather[0].main) {
            case 'Clear':
                image.src='images/clear.png';
                break;
        
                case 'Rain':
                image.src='images/rain.png';
                break;
                case 'Snow':
                image.src='images/snow.png';
                break;
                case 'Clouds':
                image.src='images/cloud.png';
                break;
                case 'Mist':
                image.src='images/mist.png';
                break;
                case 'Haze':
                image.src='images/mist.png';
                break;
            default:
                image.src='images/cloud.png';
               
        }

        temperature.innerHTML=`${parseInt(json.main.temp)}<span>°C</span>`;
        description.innerHTML=`${json.weather[0].description}`;
        humidity.innerHTML=`${json.main.humidity}%`;
        wind.innerHTML=`${parseInt(json.wind.speed)}Km/h`;

        const infoWeather= document.querySelector('.info-weather');
        const infoHumidity= document.querySelector('.info-humidity');
        const infoWind= document.querySelector('.info-wind');

    const elCloneinfoWeather = infoWeather.cloneNode(true);
    const elCloneinfoHumidity = infoHumidity.cloneNode(true);
    const elCloneinfoWind = infoWind.cloneNode(true);

    elCloneinfoWeather.id='clone-info-weather';
elCloneinfoWeather.classList.add("active-clone");

elCloneinfoHumidity.id='clone-info-humidity';
elCloneinfoHumidity.classList.add("active-clone");

elCloneinfoWind.id='clone-info-wind';
elCloneinfoWind.classList.add("active-clone");
setTimeout(() => {
    infoWeather.insertAdjacentElement("afterend",elCloneinfoWeather);
    infoHumidity.insertAdjacentElement("afterend",elCloneinfoHumidity);
    infoWind.insertAdjacentElement("afterend",elCloneinfoWind);
}, 2200);


const cloneinfoWeather =document.querySelectorAll(".info-weather.active-clone");
const totalCloneinfoWeather =cloneinfoWeather.length;
const cloneinfoWeatherFirsts= cloneinfoWeather[0];


const cloneinfoHumidity =document.querySelectorAll(".info-humidity.active-clone");
//const totalCloneinfoHumidity =cloneinfoHumidity.length;
const cloneinfoHumidityFirsts= cloneinfoHumidity[0];


const cloneinfoWind =document.querySelectorAll(".info-wind.active-clone");
//const totalCloneinfoWind =cloneinfoWind.length;
const cloneinfoWindFirsts= cloneinfoWind[0];

if(totalCloneinfoWeather>0){
    cloneinfoWeatherFirsts.classList.remove("active-clone");
    cloneinfoHumidityFirsts.classList.remove("active-clone");
    cloneinfoWindFirsts.classList.remove("active-clone");

    setTimeout(() => {
        cloneinfoWeatherFirsts.remove();
        cloneinfoHumidityFirsts.remove();
        cloneinfoWindFirsts.remove();
    }, 2200);
}

        }

    });
});