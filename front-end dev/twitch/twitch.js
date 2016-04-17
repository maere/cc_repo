var allChannelData = [];
var placeholder_logo = "http://placehold.it/100x100";
var placeholder_status = "Offline";

var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb","thomasballinger","noobs2ninjas","beohoff"];

$(document).ready(function(){
  //creates and array to store the JSON object from the API call
  getChannels(users); //should have a callback, so that when the data has arrived it can process
  //displayChannelData(allChannelData);
  //getStreamStatus('cretetion');
  //getChannelData(brunofin); //if returns undefined, then put in placeholder
  //getChannelData(users[0]);

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
    //console.log(response); //it gets this far.....
      // handle requested data from server
      var currentChannel = {
        logo: response['logo'],
        displayName: response['display_name'],
        status: response['status'],
        url: response['url']
      }
      cleanData(currentChannel);
      //allChannelData.push(currentChannel);
      displayChannelData(currentChannel);

  });
}

//helper function makes the API call for each channel and stores all returned objects in an array
function getChannels(channelArray){
  for(var i=0; i<channelArray.length; i++){
    getChannelData(channelArray[i]);
  }
}

//helper function to get rid of null values before pulling data into template
function cleanData(object){
    //if status is null or logo is null then replace null values with placeholder data
    if(object['logo']===null){
      object['logo'] = placeholder_logo;
    }
    if(object['status']===null){
      object['status'] = placeholder_status;
    }
}

function displayChannelData(object){
    var output = $("#list");
    var template = $("#template").html();
                //var data2 = [title, description, link];
    html = Mustache.render(template, object);
    output.append(html);
}
