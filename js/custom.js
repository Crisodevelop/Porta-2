(function ($) {

  "use strict";

  // PRE LOADER
  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });

  // CUSTOM LINK
  $('.custom-link').click(function(){
    var el = $(this).attr('href');
    var elWrapped = $(el);
    var header_height = $('.navbar').height() + 10;

    scrollToDiv(elWrapped,header_height);
    return false;

    function scrollToDiv(element,navheight){
      var offset = element.offset();
      var offsetTop = offset.top;
      var totalScroll = offsetTop-navheight;

      $('body,html').animate({
        scrollTop: totalScroll
      }, 300);
    }
  });

  // EmailJS Integration for Form Submission
  $(document).ready(function() {
    // Inicializa EmailJS con tu User ID
    emailjs.init("7DDtEDxCwKZi-dy8m"); // Reemplaza con tu User ID de EmailJS

    // Escuchar el envío del formulario
    $('.contact-form').submit(function(event) {
      event.preventDefault(); // Previene el envío tradicional del formulario

      const formData = {
        name: $('#name').val(),
        email: $('#email').val(),
        website: $('#inlineCheckbox1').is(':checked'),
        branding: $('#inlineCheckbox2').is(':checked'),
        ecommerce: $('#inlineCheckbox3').is(':checked'),
        seo: $('#inlineCheckbox4').is(':checked'),
        message: $('#message').val()
      };

      // Enviar los datos del formulario a EmailJS
      emailjs.send('Portfolio-2024@', 'template_9isu58w', formData)
        .then(function(response) {
          alert('Formulario enviado exitosamente');
          console.log('Success:', response);
        }, function(error) {
          alert('Error al enviar el formulario');
          console.log('Error:', error);
        });
    });
  });

})(window.jQuery);
