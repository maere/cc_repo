//var searchString;
var openSearchTest;
var dataHolder = [];
var titles;
var descriptions;
var links;

$('#submitQuery').click(fetchString);

function fetchString(){
  var searchString = $("#userQuery").val();
  openSearchTest = "https://crossorigin.me/https://en.wikipedia.org/w/api.php?" +   //jsoncallback=?
      "action=opensearch&format=json&search=" + searchString + "&limit=10&suggest=1";
      alert("Using this value for the call: " + openSearchTest);
      loadData(openSearchTest);
}

function loadData(openSearchTest){

    //alert("You got a search String: " + openSearchTest);
    $.getJSON(openSearchTest, {
      format: "json"
    }, function(data){
      //console.log(data);
      titles = data[1];
      descriptions = data[2];
      links = data[3];
      //console.log(titles, descriptions, links);
      for(var i=0; i<titles.length; i++){
          currObj = {
            title: titles[i],
            description: descriptions[i],
            link: links[i]
          }
          var output = $("#list");
          var template = $("#template").html();

          html = Mustache.render(template, currObj);
          output.append(html);
        }                     //.done(function(dataHolder){})
    }).fail(function(){
          alert("There was an error with you request.");
      });

  }



// //maybe make titles, etc. global and move appending list into a separate function/callback
  // function addDataToPage(){
  //     var output = $("#list");
  //       var template = $("#template").html();
  //       //dataHolder = [title, description, link];
  //       html = Mustache.render(template, dataHolder);
  //       output.append(html);
  // }
