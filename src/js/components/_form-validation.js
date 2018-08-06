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

var calculateInput = $('.js-calculate-form input');
var orderInput = $('.js-order-form input');
var calculateSubmit = $('.js-calculate-form .js-btn-submit');
var orderSubmit = $('.js-order-form .js-btn-submit');

calculateInput.on('blur', function() {
  if (calculateForm.valid()) {
    calculateSubmit.prop('disabled', false);
    calculateSubmit.removeClass('disabled');
  } else {
    calculateSubmit.prop('disabled', 'disabled');
    calculateSubmit.addClass('disabled');
  }
});

orderInput.on('blur', function() {
  if (orderForm.valid()) {
    orderSubmit.prop('disabled', false);
    orderSubmit.removeClass('disabled');
  } else {
    orderSubmit.prop('disabled', 'disabled');
    orderSubmit.addClass('disabled');
  }
});

