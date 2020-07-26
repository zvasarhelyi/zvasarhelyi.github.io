var temperatures = [-11.2, 14.4, 13.0, 17.3, 21.7, 18.2, 28]
var temperaturesUpperLimits = [0, 15, 20, 25, 30];
var offers = ["Ma forró csokit is árusítunk",
    "Melegedj át egy teával nálunk!",
    "Ma finom sütivel várunk",
    "Ma fagyit is kínálunk",
    "Hűsítsd le magad egy jéghideg limonádéval!"];

function weatherInfo() {
    const day = document.querySelector('#day').value;
    const temperatureDiv = document.querySelector('#temperature');
    const minTemp = document.querySelector('#min-temp');
    const maxTemp = document.querySelector('#max-temp');
    const avgTemp = document.querySelector('#avg-temp');
    temperatureDiv.innerHTML = 'Várható hőmérséklet: ' + temperatures[day] + '°C';
    for (let i = 0; i < temperaturesUpperLimits.length; i++) {
        if (temperatures[day] <= temperaturesUpperLimits[i]) {
            temperatureDiv.innerHTML += '<br><span class="offer">' + offers[i] + '</span>';
            minTemp.innerHTML = 'Minimum: ' + minTemperature() + '°C';
            maxTemp.innerHTML = 'Maximum: ' + maxTemperature() + '°C';
            avgTemp.innerHTML = 'Átlag: ' + avgTemperature().toFixed(1) + '°C';
            break;
        }
    }
}
window.onload = weatherInfo();

function minTemperature() {
    let min = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] < min) {
            min = temperatures[i];
        }
    }
    return min;
}

function maxTemperature() {
    let max = temperatures.length != 0 ? temperatures[0] : 0;
    for (let i = 0; i < temperatures.length; i++) {
        if (temperatures[i] > max) {
            max = temperatures[i];
        }
    }
    return max;
}

function avgTemperature() {
    let avg = 0;
    for (let i = 0; i < temperatures.length; i++) {
        avg += temperatures[i];
    }
    return temperatures.length != 0 ? avg / temperatures.length : 0;
}