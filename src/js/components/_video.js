import vide from 'vide';

$(document).ready(function() {
  const container = $('.js-video video').get(0);
  if (container && container.paused) {
    container.play();
  }
});
