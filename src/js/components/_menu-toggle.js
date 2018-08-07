$('.js-toggle').click(function() {
  
  $(this).toggleClass('on');
  $('.js-nav').toggleClass('is-open');
  $('.js-header').toggleClass('is-open');
});
