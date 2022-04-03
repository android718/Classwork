const APIKEY="30723883f60a29ab406644e4467c8e60";
let $searchinput = $("input")
let $button  = $('.submit')


$button.on('click', ()  => {
    let text =$searchinput.val()
    $.ajax(`https://api.openweathermap.org/data/2.5/weather?q=+${text}&APPID=${APIKEY}`).then(
    (data) => { 
        console.log(data)
    })
    let mainData, userInput

    const $name = $($searchinput[type="text"])
    const $temp = $(temp)
    const $feels_like = $(feels_like)
    const $weather = $(weather)
    
    $("form").on("submit", handleGetData)
    
    function handleGetData(event) {
      event.preventDefault()
      // calling preventDefault() on a 'submit' event will prevent a page refresh
      userInput = $input.val()
      // getting the user input
      $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?q=+${text}&APPID=${APIKEY}`+ userInput,
      }).then(
        (data) => {
          mainData = data
          render()
        },
        (error) => {
          console.log("bad request", error)
        }
      )
    }})
    
    function render() {
      $name.text(mainData.Name)
      $year.text(mainData.Temp)
      $feelsLike.text(mainData.Feels_Like)
      $weather.text(mainData.Weather)
    
    ()}
