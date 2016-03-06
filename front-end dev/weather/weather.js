 $(document).ready(function(){
   getLocation();

    $("button").click(function () {
      pressed = $(this).attr("id");
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      determineFC(pressed); //refactored into function
   });

 });

//get user's location
var currLatitude;
var currLongitude;
var apiKey= "8a8400a86a680c8a6a162acb0649285a";

var currLocation;
var currTemp;
var calculatedTemp;
var currConditions;
var currWind;
var convertTo = "fahrenheit"
var pressed;

function getLocation(){
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      currLatitude = position.coords.latitude;
      currLongitude = position.coords.longitude;
      getWeatherData(currLatitude, currLongitude);
    });
  } else {
      $('#location h2').text("Geolocation not supported in this browser.");
  }
}

//eg. http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=8a8400a86a680c8a6a162acb0649285a
//api call for lat long: api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}
function getWeatherData(currLatitude, currLongitude){
  var request_url = "http://api.openweathermap.org/data/2.5/weather?lat=" + currLatitude + "&lon=" + currLongitude + "&appid=" + apiKey;

  $.getJSON(request_url, function(json){
      currLocation = json.name;
      currTemp = json.main.temp;  //in Kelvin
      currConditions = json.weather[0].main; //make sure to .ignore case before pulling picture
      currDescription = json.weather[0].description;
      currWind = json.wind.speed;
      currWindDirection = json.wind.deg;
      //console.log(currLocation + ", " + currTemp + ", " + currConditions + ", " + currWind  + ", " + currWindDirection);

      //call temperature calculation function, by default call Farenheit & have that button activited aleady in HTML
      calculatedTemp = toFahrenheit(currTemp);

      $('.location').text(currLocation);
      //bg gets loaded depending on keyword in weather[0].main, will pull URL value from obj
      $('#temp').text(Math.floor(calculatedTemp) + "°"); //can also use Math.round() for integer
      $('#conditions').text(currDescription);
      $('#wind').text(currWind + " mph from " + Math.floor(currWindDirection) + "'");

      //will have to write a pluck function to pull image if is match with currConditions, 
      //or use the default if not
      var flikrImage = bgPix.thunder;
      var urlStringProperty = "url(" + flikrImage + ")";

      $('body').css({
          "background-image": urlStringProperty,
          "border-left": "5px solid #ccc" ,
          "background-position": "center center",
          "background-repeat": "no-repeat",
          "background-attachment": "fixed",
          "background-size": "cover",
          "background-color": "#464646"
         });

    });
  }


  //depending on conditions loads background (stored in an object {})
      // and/or icon for general conditions (sunny, cloudy, partly cloudy, rain, drizzle, snow, sleet, etc.)

      var bgPix = { "clouds": "http://i446.photobucket.com/albums/qq183/see_mare/cloudy_zpssxl3wozk.jpg",
                    "partly cloudy": "http://i446.photobucket.com/albums/qq183/see_mare/partly-cloudy_zpswhfcgtmt.jpg",
                    "clear": "http://placehold.it/1024x768",
                    "sunny": "http://i446.photobucket.com/albums/qq183/see_mare/sunny_zpsjbfntxda.jpg",
                    "rain": "http://farm8.staticflickr.com/7533/15515341323/e09b57a72a_b.jpg",
                    "drizzle": "http://i446.photobucket.com/albums/qq183/see_mare/rain_zpsn3buiodd.jpg",
                    "snow": "http://placehold.it/1024x768",
                    "sleet": "http://placehold.it/1024x768",
                    "mist": "http://placehold.it/1024x768",
                    "fog": "http://placehold.it/1024x768", 
                    "thunder": "http://i446.photobucket.com/albums/qq183/see_mare/lightening_zpslureet03.jpg"};


 function determineFC(pressed){
   if(pressed==="celsius"){
     calculatedTemp = toCelsius(currTemp);
   }else{
     calculatedTemp = toFahrenheit(currTemp);
   }
   //get selector and change data in box
   $('#temp').text(Math.floor(calculatedTemp) + "°");
 }

    //temperature switcher buttons // need C/F converter functiona
    //(K - 273.15) * 9/5 + 32
    function toFahrenheit(tempKelvin){
      return ((tempKelvin - 273.15)*1.8 + 32);
    }
    //K - 273.15
    function toCelsius(tempKelvin){
      return tempKelvin - 273.15;
    }
