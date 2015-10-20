$(document).ready(function() {
    console.log( "ready!" );
  
  // $('.shake').mouseover(function() {
  //   console.log('is this working?')
      $('#shake').jrumble({
        x: 0,
        y: 0,
        rotation: 5
      });
  // });

$('#shake').hover(function(){
  $(this).trigger('startRumble');
}, function(){
  $(this).trigger('stopRumble');
});

});