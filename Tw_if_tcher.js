$(document).ready(function () {
  //Initial visuals.
  $("#byDan").addClass("animated fadeInUp");
  $("#mainBlock").addClass("animated fadeInDown");

  //Create an array with default streamers to display.
  var defaultStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

  //Store API links in an array with username added to links.
  var streamerLink = [];
  function getStreamerLink () {
    for (var i = 0; i < defaultStreamers.length; i++) {
      streamerLink[i] = 'https://wind-bow.gomix.me/twitch-api/streams/'+defaultStreamers[i]+'?callback=?';
    }
    return streamerLink;
  }
  getStreamerLink();
  
  //Function to add link to JSON command and get stream info from user.
  function getStreamersInfo (streamerLinkIndex) {
    $.getJSON(streamerLinkIndex, function(data) {
      var streamTwitch = data.stream;
      console.log(streamTwitch);

    });
  }
  getStreamersInfo(streamerLink[0]);
});
  //Call function

    //if (streamTwitch === "null") {
      //("#Target").html("User is offline");
    //}
