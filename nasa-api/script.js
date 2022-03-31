console.log("JS is up and running!")
const APIKEY="FayFMDo3lddvGOhUcqzX4ODnlljLY7gwyMNVby9E";

$.ajax({
    url: `https://api.nasa.gov/planetary/apod?api_key=${APIKEY}`,

}).then((data) => {
    console.log(data)
const $img = $('<img id="apod">');

$img.attr("src" , data.url)

$img.attr("alt", data.title)
// notice how plug in the info for the api, call upon data,the object then the section

$img.appendTo(".image-container");
// here we are putting the image somewhere

$('#title').text(data.title);
$('#explanation').text(data.explanation);
$('#copyright').text(data.copyright);
$('#date').text(data.date);

}).catch((error) => {
    console.log(error);
})