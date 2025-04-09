// Función para mostrar el campo de código de descuento al seleccionar la opción de pago con descuento

    // Función para mostrar el campo de código de descuento
    function mostrarCampoDescuento() {
        const discountSection = document.getElementById('discountCodeSection');
        // Mostrar el campo para ingresar el código de descuento
        discountSection.style.display = 'block';
    }

    // Función para aplicar el descuento
    function aplicarDescuento() {
        const discountCode = document.getElementById('discountCode').value;
        const priceElement = document.getElementById('price-value');
        const discountMessage = document.getElementById('discountMessage');
        let originalPrice = 14.90; // Precio original en S/ 

        // Código de descuento válido
        const validCode = "DESCUENTO10"; // El código de descuento válido

        // Verificar si el código ingresado es correcto
        if (discountCode === validCode) {
            const discountedPrice = originalPrice * 0.5; // Descuento del 10%
            priceElement.textContent = 'S/' + discountedPrice.toFixed(2);
            discountMessage.textContent = '¡Descuento aplicado! Precio con descuento: S/' + discountedPrice.toFixed(2);
        } else {
            discountMessage.textContent = 'Código de descuento inválido. Intenta de nuevo.';
            priceElement.textContent = 'S/' + originalPrice.toFixed(2); // Volver al precio original
        }
    }
