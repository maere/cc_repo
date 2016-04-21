var allChannelData = [];
var placeholder_logo = "http://placehold.it/100x100";
var placeholder_status = "Offline";
var counter =0;

var tempChannelData;
var tempStreamData;


var users = ["freecodecamp", "storbeck", "terakilobyte", "habathcx","RobotCaleb",
"thomasballinger","noobs2ninjas","beohoff", "immirath", "brunofin", "comster404"];

$(document).ready(function(){
  //call dual api call function
  getChannelData("sodapoppin");

});
  // getChannels(users); //should have a callback, so that when the data has arrived it can process
  // getAllStreams(users);
  //displayChannelData(allChannelData);
  //getStreamStatus('cretetion');
  //getChannelData(brunofin); //if returns undefined, then put in placeholder
  //getChannelData(users[0]);
  //console.log(allChannelData);

  //then call this stuff:

          // cleanData(currentChannel);
          //
          // displayChannelData(currentChannel); //this should be a call back that runs after data is all processed...takes objc



//gets channel data -- doesn't matter if online - feeds div
// function getChannelData(channelName){
//   var promise1 = $.ajax('https://api.twitch.tv/kraken/channels/' + channelName, {
//       jsonp: 'callback',
//       dataType: 'jsonp',
//       Accept: 'application/vnd.twitchtv.v3+json'
//   });
//  return promise1;
// }

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


//find out weather the channel is streaming,
//if yes, light up green and call function to get additional data and display it if no, display gray
// function getStreamStatus(channelName){
//   //https://api.twitch.tv/kraken/streams/freecodecamp'
//  var apiCall = 'https://api.twitch.tv/kraken/streams/' + channelName;
//
//   var promise2 = $.ajax(apiCall, {
//       jsonp: 'callback',
//       dataType: 'jsonp',
//       Accept: 'application/vnd.twitchtv.v3+json'
//   });
//   return promise2;
// }

function getAllStreams(userArray){
  for(var i=0; i<userArray.length; i++){
    getStreamStatus(userArray[i]);
  }
}

function getChannelData(channelName){

    var channelCall = $.get('https://api.twitch.tv/kraken/channels/' + channelName, {
        jsonp: 'callback',
        dataType: 'jsonp',
        Accept: 'application/vnd.twitchtv.v3+json'
    }).done(function( data ) {
        tempChannelData = data;
      }).error(function(){
        alert("We caught this one as unprocessable--do not pass");
        //need to set values here - this is a catch and set a boolean so it doesn't get processed by the next function
      });
    //console.log(channelCall);

    var streamCall =  $.ajax('https://api.twitch.tv/kraken/streams/' + channelName, {
          jsonp: 'callback',
          dataType: 'jsonp',
          Accept: 'application/vnd.twitchtv.v3+json'
      }).done(function( data ) {

          tempStreamData = data;
        });
      //console.log(streamCall);

    $.when(channelCall, streamCall).then(function (response1, response2) {//can try to figure out how to pull it from here, or
                                                  //continue to use the data holders from the done function
      //to process data from channelCall
    console.log(tempChannelData);
    console.log(tempStreamData);

      var currentChannel = {};

      if(response1['status']=='422'){
        currentChannel = {
          logo: "",
          displayName: tempChannelData['display_name'],
          status: tempChannelData['message'],
          url: ""
        }
      }else{
          currentChannel = {
            logo: tempChannelData['logo'],
            displayName: tempChannelData['display_name'],
            status: tempChannelData['status'],
            url: tempChannelData['url']
          }
        }
        //now we have an object called currentChannel with stuff in it, let's add the rest
      if(tempStreamData['stream']===null){
              alert('This channel is offline');
            currentChannel['live'] = false;
      } else{
        currentChannel['live'] = true;
        alert('This channel is streaming now');
              //currentChannel['live'] = true;
                //var idByURL = response2['_links']['self'];
              // currentChannel['viewers'] = response2['stream']['viewers'];
              // currentChannel['game'] = response2['stream']['game'];
              // currentChannel['liveURL'] = response2['stream']['channel']['url'];
              // currentChannel['views'] = response2['stream']['channel']['views'];
              // currentChannel['followers'] = response2['stream']['channel']['followers'];
              // currentChannel['logo'] = response2['stream']['channel']['logo'];
            }

            console.log(currentChannel);
            allChannelData.push(currentChannel);
            //console.log(allChannelData);
});


          //console.log(allChannelData);

}
