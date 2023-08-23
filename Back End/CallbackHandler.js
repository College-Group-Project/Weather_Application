/*
*   Title : Call back handler 
*   Description : Handles request and response for each routing 
*   Date : 22/08/23
*   Author : Anubrata Mallick
*/

//******************** Dependenies **************************
const request = require('request');

//************************ Module Scaffolding ******************
let handler = {};


//****************** Populate Module Scaffolder ******************

//to Handle tempreture related data
handler.tempData = (req, res) => {

    let city = req.query.city;
    const ApiKey = '9760cdfac48f0be1ae4eb10d7e08cda2';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

	request(
		API, (error, response, body)=>{
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                const tempData = {
                    temp: data.main.temp,
                    feelsLike: data.main.feels_like,
                    minTemp: data.main.temp_min,
                    maxTemp: data.main.temp_max,
                }
                res.send(JSON.stringify(tempData))
			}
		}
	);
}

//to handle Wind related data
handler.windData = (req, res) => {

    let city = req.query.city;
    const ApiKey = '9760cdfac48f0be1ae4eb10d7e08cda2';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

	request(
		API, (error, response, body)=>{
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                const windData = {
                    pressure: data.main.pressure,
                    humidity: data.main.humidity,
                    windSpeed: data.wind.speed,
                    windAngle: data.wind.deg,
                }
                res.send(JSON.stringify(windData))
			}
		}
	);
}

//to handle sun related data
handler.sunData = (req, res) => {

    let city = req.query.city;
    const ApiKey = '9760cdfac48f0be1ae4eb10d7e08cda2';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

	request(
		API, (error, response, body)=>{
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                const sunData = {
                    sunrise: data.sys.sunrise,
                    sunset: data.sys.sunset
                }
                res.send(JSON.stringify(sunData))
			}
		}
	);
}

// to handle coordinate of place
handler.coorData = (req, res) => {

    let city = req.query.city;
    const ApiKey = '9760cdfac48f0be1ae4eb10d7e08cda2';
    const API = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${ApiKey}&units=metric`;

	request(
		API, (error, response, body)=>{
			let data = JSON.parse(body);
			if (response.statusCode === 200) {
                const coorData = {
                    longitude: data.coord.lon,
                    latitude: data.coord.lat
                }
                res.send(JSON.stringify(coorData))
			}
		}
	);
}


//****************** Exporting module *********************
module.exports = handler;