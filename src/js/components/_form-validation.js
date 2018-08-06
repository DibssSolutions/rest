import validate from 'jquery-validation';

$.validator.messages.required = 'Необходимо заполнить указанное поле';
$.validator.messages.number = 'Необходимо ввести целое число';

$.validator.setDefaults({
  debug: true
});

var calculateForm = $('.js-calculate-form');
var orderForm = $('.js-order-form');

calculateForm.validate({
  rules: {
    'calculate-name': {
      required: true
    },
    'calculate-phone': {
      required: true
    },
    'calculate-number': {
      required: true,
      number: true
    }
  }
});

orderForm.validate({
  rules: {
    'order-name': {
      required: true
    },
    'order-email': {
      required: true
    }
  }
});

var calculateSubmit = $('.js-calculate-form .js-btn-submit');
var orderSubmit = $('.js-order-form .js-btn-submit');

calculateSubmit.on('click', function(e) {
  calculateForm.valid();
  if (!calculateForm.valid()) {
    e.preventDefault();
  }
});

orderSubmit.on('click', function(e) {
  orderForm.valid();
  if (!orderForm.valid()) {
    e.preventDefault();
  }
});
