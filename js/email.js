    (function(){
        emailjs.init("7DDtEDxCwKZi-dy8m");  // Reemplaza con tu clave pública
    })();

    // Captura el formulario y los datos
    document.getElementById('contact-form').addEventListener('submit', async function(event) {
        event.preventDefault(); // Prevenir la acción por defecto (recargar página)

        // Recolectar los datos del formulario
        var formData = new FormData(this);

        // Obtener los valores de los checkbox manualmente
        var website = document.querySelector('input[name="website"]:checked') ? 'Sí' : 'No';
        var branding = document.querySelector('input[name="branding"]:checked') ? 'Sí' : 'No';
        var ecommerce = document.querySelector('input[name="ecommerce"]:checked') ? 'Sí' : 'No';
        var seo = document.querySelector('input[name="seo"]:checked') ? 'Sí' : 'No';

        // Añadir los valores de los checkbox al objeto formData
        formData.append('website', website);
        formData.append('branding', branding);
        formData.append('ecommerce', ecommerce);
        formData.append('seo', seo);

        try {
            // Enviar el correo con los datos y esperar la respuesta
            const response = await emailjs.send('Portfolio-2024@', 'template_9isu58w', formData);
            
            // Si el correo se envió correctamente, mostrar el mensaje de éxito
            console.log('Correo enviado exitosamente:', response);
            alert("Tu mensaje fue enviado exitosamente.");
        } catch (error) {
            // Si hay un error, mostrar el mensaje de error
            console.error('Error al enviar el correo:', error);
            alert("Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.");
        }
    });
