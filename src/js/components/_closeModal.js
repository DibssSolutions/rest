$('.message-sending').on('click', function(e) {
  var target = event.target;
  
  if ($(target).hasClass('js-close')) {
    
    $(target)
      .parents('.message-sending')
      .fadeOut(500);
    
  }
});
