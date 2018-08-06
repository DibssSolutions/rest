import validate from 'jquery-validation';

$.validator.messages.required = 'Необходимо заполнить указанное поле';
$.validator.messages.number = 'Необходимо ввести целое число';

$.validator.setDefaults({
  debug: true
});

var forms = $('.js-form');

forms.each(function() {
  var form = $(this);
  var input = $('input');
  var button = $('.js-btn-submit');
  input.on('blur', function() {
    if (form.valid()) {
      button.prop('disabled', false);
    } else {
      button.prop('disabled', 'disabled');
    }
  });
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

// calculateInput.on('blur', function() {
//   if (calculateForm.valid()) {
//     calculateSubmit.prop('disabled', false);
//   } else {
//     calculateSubmit.prop('disabled', 'disabled');
//   }
// });

// orderInput.on('blur', function() {
//   if (orderForm.valid()) {
//     orderSubmit.prop('disabled', false);
//   } else {
//     orderSubmit.prop('disabled', 'disabled');
//   }
// });

// calculateInput.on('blur', function() {
//     if (calculateForm.valid()) {
//       calculateSubmit.prop('disabled', false);
//     } else {
//       calculateSubmit.prop('disabled', 'disabled');
//     }
//   });
  
//   orderInput.on('blur', function() {
//     if (orderForm.valid()) {
//       orderSubmit.prop('disabled', false);
//     } else {
//       orderSubmit.prop('disabled', 'disabled');
//     }
//   });