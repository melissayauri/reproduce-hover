/* $(document).ready(function() {
  $('#video').mouseover(function() {
    $(this).get(0).play();
  });
  $('#video').mouseout(function() {
    $(this).get(0).pause();
  });
});*/

window.addEventListener('load', function(event) {
  let video = document.getElementById('video');
  video.addEventListener('mouseover', play);
  video.addEventListener('mouseout', stops);
  function stops() {
    video.pause();
  }
  function play() {
    video.play();
  }
});
