import fancybox from '@fancyapps/fancybox';

$('[data-fancybox]').fancybox({ animationDuration: 550, loop: true });

$('[data-fancybox]').click(function() {
  if($('#mobile').is(':visible')) {
    return false;
  }
});

// if(isMobile) { //Checking whether mobile access or not.
//   2;
//   $('[data-fancybox]').click(function(e) {
//     3;
//     e.preventDefault();
//     4;
//   });
//   5;
// }
    
