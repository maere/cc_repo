var searchString;
var openSearchTest;

$(document).ready(function () {

  searchString = "Python";
  openSearchTest = "https://en.wikipedia.org/w/api.php?" +
  "action=opensearch&format=json&search=" + searchString + "&limit=10&suggest=1";
  loadData();

  });

// these are the titles [1][i] (create as text in link)
//these are the descriptions[2][i]
//these are the links [3][i] (i is 0-9 for length of array)


//on Submit, callback function to get string from input box and make the api call
  //will return data as an array of arrays [3]



  //test
  function loadData(){

    // Using jQuery
    $.ajax( {
        url: openSearchTest,
        dataType: 'jsonp',
        timeout : 2000,
        type: 'GET',
        headers: 'Access-Control-Allow-Origin: *',
        success: function(data) {
          //console.log(data);
          titles = data[1];
          descriptions = data[2];
          links = data[3];

          for(var i=0; i<titles.length; i++){

            var data2 = {
              title: titles[i],
              description: descriptions[i],
              link: links[i]
            };

            var output = $("#list");
            var template = $("#template").html();
            //var data2 = [title, description, link];
            html = Mustache.render(template, data2);
            output.append(html);
          }

        }
    });



  }






//function to iterate through array and get data for that i
  //assign to current title, desc, link
  //call helper function to assemble div elements

//maybe do .forEach function,  assemble div elements, then append to the last one?
