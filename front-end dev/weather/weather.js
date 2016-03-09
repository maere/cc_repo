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
var flikrImgURL;
var randomPhotoNum = getRandomInt(0, 10);


//randomness function
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

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
      // currConditions will become TAG - bg gets loaded depending on keyword in weather[0].main, will pull URL value from obj
      $('#temp').text(Math.floor(calculatedTemp) + "°"); //can also use Math.round() for integer
      $('#conditions').text(currDescription);
      $('#wind').text(currWind + " mph from " + Math.floor(currWindDirection) + "'");
    });

    //call get image function
    getWeatherImage(currConditions);

  }

  //function to make API call AFTER getting the weather conditions
  function getWeatherImage(currConditions){

    var tag = currConditions;
    var api_key = "60e5dccddd5725a36f0ad6bb1a2bc40c";
    var flikrCall = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key="
    + api_key + "&tags=" + tag
    + "&min_upload_date=&min_taken_date=2014-01-01&sort=relevance&content_type=1&media=photos&per_page=10&format=json&nojsoncallback=1";



    //another getJSON object, set variables
      $.getJSON(flikrCall, function(json){
          var id = json.photos.photo[randomPhotoNum].id;
          var farm = json.photos.photo[randomPhotoNum].farm;
          var server = json.photos.photo[randomPhotoNum].server;
          var secret = json.photos.photo[randomPhotoNum].secret;
          flikrImgURL = 'https://farm' + farm + '.staticflickr.com/' + server + '/' + id + '_' + secret + '_b.jpg';
          //var urlStringProperty = '"url(' + flikrImgURL + ')"';
          var urlStringProperty = 'url(' + flikrImgURL + ')';

          //$('body').css('background-image', url(flikrImgURL));
         $('body').css({
          "background-image": urlStringProperty,
          //"background-image": "url(http://farm8.staticflickr.com/7533/15515341323_e09b57a72a_b.jpg)",
          "border-left": "5px solid #ccc",
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
      //
      // var bgPix = { "clouds": "http://imagepathplaceholder",
      //               "partly cloudy": "http://imagepathplaceholder",
      //               "clear": "http://imagepathplaceholder",
      //               "sunny": "http://imagepathplaceholder",
      //               "rainy": "http://imagepathplaceholder",
      //               "drizzle": "http://imagepathplaceholder",
      //               "snow": "http://imagepathplaceholder",
      //               "sleet": "http://imagepathplaceholder",
      //               "mist": "http://imagepathplaceholder",
      //               "fog": "http://imagepathplaceholder"};


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
