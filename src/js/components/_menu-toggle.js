$('.js-toggle').click(function() {
  $(this).toggleClass('on');
  $('.nav').toggleClass('open');
  $('.header').toggleClass('muted');
});
