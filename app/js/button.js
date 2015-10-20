$(document).ready(function() {
    console.log( "ready!" );
  
  // $('.shake').mouseover(function() {
  //   console.log('is this working?')
      $('#shake').jrumble({
        x: .5,
        y: .5,
        rotation: 1
      });
  // });

$('#shake').hover(function(){
  $(this).trigger('startRumble');
}, function(){
  $(this).trigger('stopRumble');
});

});