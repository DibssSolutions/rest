$('.js-prevent-click').click(function(e) {
  if ($(this).hasClass('prevented')) {
    e.preventDefault();
    $(this).removeClass('prevented');
  } else {
    $(this).addClass('prevented');
  }
});
