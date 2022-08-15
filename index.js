

console.log("hello");
const locationPlace = document.querySelector(".location");
const weatherDeg = document.querySelector(".deg");
const changeDegree = document.querySelector(".changeDegree");
const weatherF = document.querySelector(".degF");
const tempC = document.querySelector(".tempC")

let weatherUrl ="https://api.openweathermap.org/data/2.5/weather?lat=16.871311&units=metric&lon=96.199379&appid=bd37c73c6c0173986a10a20320f53ae1"

function getDataFromSever () {
    return fetch (weatherUrl,{
        method : "GET"
    })
    .then (function (res) {
        return res.json()
    })
    .then (function (data) {
        console.log(data)
        return data
    })
    .catch (function (error) {
        console.log(error)
    })
}

let dataArr = []
getDataFromSever().then (function (item) {
    dataArr = item
    console.log(dataArr)
    console.log(dataArr.name);
    console.log(dataArr.main.temp)
    let degC = dataArr.main.temp
    locationPlace.textContent = dataArr.name;
    weatherDeg.textContent = degC;
})


let checked = false;
changeDegree.addEventListener("click", function () {
    let temperature = weatherDeg.textContent;
    if(checked === false) {
        checked = true;
        let temperatureF = (temperature * 9/5 + 32).toFixed(2);
        weatherDeg.textContent = temperatureF
        weatherF.textContent = "C";
        tempC.textContent = "F";
        console.log("temp: "+temperature)
    }else {
        checked = false
        console.log("fff: "+temperature)
        weatherDeg.textContent = ((temperature -32) * 5/9).toFixed(2)
        tempC.textContent = "C";
        weatherF.textContent = "F"
    }
})