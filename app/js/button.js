$(document).ready(function() {
    console.log( "ready!" );
  
  $('#shake-rocket').jrumble({
    x: .5,
    y: .5,
    rotation: 1
  });

  $('#shake').hover(function(){
    $("#shake-rocket").trigger('startRumble');
  }, function(){
    $("#shake-rocket").trigger('stopRumble');
  });

});