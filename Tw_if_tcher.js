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
  function getStreamersInfo (streamerLinkIndex, displayBlockHTML, displayActivityHTML) {
    $.getJSON(streamerLinkIndex, function(data) {
      var streamTwitch = data.stream;
      var streamTwitchChannel = streamTwitch.channel;
      if (streamTwitch.stream_type == "live") {
        $(displayBlockHTML).addClass("block--display");
        $(displayActivityHTML).html("<img src=" + streamTwitchChannel.logo + " class='block--display-profilepicture'/>" + "<a href=" + streamTwitchChannel.url + " target='_blank' class='block--display-username'>" + streamTwitchChannel.display_name + " <span style='font-size: 10px;'>is playing: </span>" + streamTwitch.game + "</a>");
      }
    });
  }
  getStreamersInfo(streamerLink[0], "#displayBlock1", "#displayActivity1");
  getStreamersInfo(streamerLink[1], "#displayBlock2", "#displayActivity2");
  getStreamersInfo(streamerLink[2], "#displayBlock3", "#displayActivity3");
  getStreamersInfo(streamerLink[3], "#displayBlock4", "#displayActivity4");
  getStreamersInfo(streamerLink[4], "#displayBlock5", "#displayActivity5");
  getStreamersInfo(streamerLink[5], "#displayBlock6", "#displayActivity6");
  getStreamersInfo(streamerLink[6], "#displayBlock7", "#displayActivity7");
});
