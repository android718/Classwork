console.log("JS is up and running!")
const APIKEY="30723883f60a29ab406644e4467c8e60";

$.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=+${inputValue}&APPID=${APIKEY}`,

}).then((data) => {
    console.log((data))})
