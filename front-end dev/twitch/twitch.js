var users = ["freecodecamp", "storbeck", "terakilobyte",
"habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

$(document).ready(function(){

  //call w test data
  //getStreamStatus('cretetion');
  //getChannelData(brunofin); //if returns undefined, then put in placeholder
  getChannelData(users[0]);

});


//find out weather the channel is streaming,
//if yes, light up green and call function to get additional data and display it if no, display gray
function getStreamStatus(channelName){
  //https://api.twitch.tv/kraken/streams/freecodecamp'

  $.ajax('https://api.twitch.tv/kraken/streams/' + channelName, {
      jsonp: 'callback',
      dataType: 'jsonp',
      Accept: 'application/vnd.twitchtv.v3+json'
  }).then(function(data) {

      if(data['stream']==null){
        alert("Not streaming: " + data['stream']);
      }
      else{
          var viewers = data['stream']['viewers'];
          var game = data['stream']['game'];
          var liveURL = data['stream']['channel']['url'];
          var views = data['stream']['channel']['views'];
          var followers = data['stream']['channel']['followers'];
          var logo = data['stream']['channel']['logo'];
          console.log("Viewers: " + viewers + ' Game: ' + game + ' Followers:  ' +  followers + ' Go Watch at: ' + liveURL);
      }

  });

}






//gets channel data -- doesn't matter if online - feeds div
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
      var logo = response['logo']; 
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
