var users = ["freecodecamp", "storbeck", "terakilobyte",
"habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

//test data


$(document).ready(function(){

  //call w test data
  getChannelData(users[0]);

});


function getChannelData(channelName){

  $.ajax('https://api.twitch.tv/kraken/channels/' + channelName, {
      jsonp: 'callback',
      dataType: 'jsonp',
      Accept: 'application/vnd.twitchtv.v3+json'
      // data: {
      //     id: 123
      // }
  }).then(function(response) {
    console.log(response);
      // handle requested data from server
      //var logo = response['stream']['channel']['logo']; //channel is undefined here....
      var displayName = response['display_name'];
      var status = response['status'];
      var url = response['url'];

        // console.log(displayName);
        // console.log(status);
        // console.log(url);

      $('#output').append(document.createTextNode(displayName));
      $('#output').append('<br>');
      $('#output').append(document.createTextNode(status));
      $('#output').append('<br>');
      $('#output').append(document.createTextNode(url));

  });
}
