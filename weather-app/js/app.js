const APIKEY="30723883f60a29ab406644e4467c8e60";
let $searchinput = $("input")
let $button  = $('.submit')

$button.on('click', ()  => {
    let text =$searchinput.val()
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=+${text}&APPID=${APIKEY}`).then(
    (data) => { 
        console.log(data)
    })

   
 


});