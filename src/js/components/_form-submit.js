$('.js-form').on('submit', e => {
  e.preventDefault();

  var form = $(e.currentTarget);
  var input = $(form).find('input');

  // input.each(function(el) {
  //   if (el.value === '') return false;
  // });

  var urlPhpFile;

  if ($(form).hasClass('js-order-form')) {
    urlPhpFile = 'order_form.php';
  } else if ($(form).hasClass('js-calculate-form')) {
    urlPhpFile = 'calculation_form.php';
  }

  $.ajax({
    url: urlPhpFile,
    type: 'POST',
    dataType: 'html',
    data: $(e.currentTarget).serialize(),
    success() {
      form.get(0).reset();
      var sentMessage = $('.js-success');
      sentMessage.fadeIn(1000);
      sentMessage.fadeOut(3000);
    },
    error: function(jqXHR, ajaxSettings, thrownError) {
      var errorSent = $('.js-error');
      form.get(0).reset();
      errorSent.fadeIn(1000);
      errorSent.fadeOut(5000);

      if (jqXHR.status === 0) {
        errorSent.text('Not connect.\n Verify Network.');
      } else if (jqXHR.status === 404) {
        errorSent.text('Requested page not found. 404');
      } else if (jqXHR.status === 500) {
        errorSent.text('Internal Server Error 500.');
      } else if (exception === 'parsererror') {
        errorSent.text('Requested JSON parse failed.');
      } else if (exception === 'timeout') {
        errorSent.text('Превышено время отправки сообщения');
      } else if (exception === 'abort') {
        errorSent.text('Ajax request aborted.');
      } else {
        errorSent.text('Uncaught Error.\n' + jqXHR.responseText);
      }
    }
  });
});
