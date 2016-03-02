 $(document).ready(function(){
   getLocation();
 });

 $(document).on('click', 'fahrenheit', function(e){
     $('button').removeClass('active');
     $(this).addClass('active');
     //call function;
     $('#temp').text(toFahrenheit(currTemp));
 });

 $(document).on('click', 'celsius', function(e){
     $('button').removeClass('active');
     $(this).addClass('active');
     //call function;
     $('#temp').text(toCelsius(currTemp));
 });


//  $("button").click(function () {
//     $(this).toggleClass("active");
//     //get id att value so you know which function to call
//     convertTo = $(this).attr('id');
//     //call temp function
//     if(convertTo==="celsius"){
//       calculatedTemp = toCelsius(currTemp);
//     }else{
//       calculatedTemp = toFahrenheit(currTemp);
//     }
//     //get selector and change data in box
//     $('#temp').text(calculatedTemp);
//
// });

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
      $('#temp').text(Math.floor(calculatedTemp)); //can also use Math.round() for integer
      $('#conditions').text(currConditions + ", " + currDescription);
      $('#wind').text(currWindDirection + " degrees at " + currWind + " mph");

    });
  }


  //depending on conditions loads background (stored in an object {})
      // and/or icon for general conditions (sunny, cloudy, partly cloudy, rain, drizzle, snow, sleet, etc.)

      var bgPix = {"clouds": "http://imagepathplaceholder",
                    "clear": "http://imagepathplaceholder",
                    "rain": "http://imagepathplaceholder",
                    "snow": "http://imagepathplaceholder",
                    "sleet": "http://imagepathplaceholder",
                    "tbd": "http://imagepathplaceholder"};

    //temperature switcher buttons // need C/F converter functiona
    //(K - 273.15) * 9/5 + 32
    function toFahrenheit(tempKelvin){
      return ((tempKelvin - 273.15)*1.8 + 32);
    }
    //K - 273.15
    function toCelsius(tempKelvin){
      return tempKelvin - 273.15;
    }
