
var openSearchTest;

$(document).on('click', '#submitQuery', function () {

  var searchString = $('#userQuery').val();
  openSearchTest = "https://en.wikipedia.org/w/api.php?" +
  "action=opensearch&format=json&search=" + searchString + "&limit=10&suggest=1&callback=?";
  clearOldData();
  loadData();

  });

  //covers any key
  $(".row#item").click(function(){
    window.location = $(this).find("a").attr("href");
});


  //test
  function loadData(){

    // Using jQuery
    $.ajax( {
        url: openSearchTest,
        dataType: 'jsonp',
        timeout : 2000,
        type: 'GET',
        //headers: 'Access-Control-Allow-Origin: *',
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


  function clearOldData(){
    $('#list').empty();
    $('#userQuery').val("");
  }

$('#list-data').click(function(){
    link = this.getElementsByTagName('a').getAttribute();
    numInMem = displayNum;//these will change to push to array
    displayNum = 0; //resets
    operatorHighlight();
  });
