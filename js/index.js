$(document).ready(function() {

  $("#mobileNav").click(function()
{
  if($('#mobileMenu:visible').length)
      $('#mobileMenu').hide();
  else
      $('#mobileMenu').show();

});

$("#andrewc").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#andrewc-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#ashleym").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#ashleym-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#ashleymc").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#ashleymc-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#brendans").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#brendans-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#candices").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#candices-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#christinem").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#christinem-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#curtisf").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#curtisf-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#danielp").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#danielp-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#galenp").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#galenp-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#kevinj").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#kevinj-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#lisab").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#lisab-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#matthewv").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#matthewv-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#meganj").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#meganj-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#michaelw").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#michaelw-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#peggyb").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#peggyb-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#ryanj").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#ryanj-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#sarahb").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#sarahb-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#tylerg").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#tylerg-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#thomasc").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#thomasc-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#vikkib").click(function(e) {
  $("#overlay").fadeTo(300,1)
  $("#vikkib-modal").fadeTo(300,1)
  e.preventDefault();
});

$("#overlay").click(function(e) {
  $("#overlay").delay(300).css("display", "none");
  $(".modal").delay(300).css("display", "none");
  e.preventDefault();
});

$(".closeModal").click(function(e) {
  $("#overlay").delay(300).css("display", "none");
  $(".modal").delay(300).css("display", "none");
  e.preventDefault();
});

});
