document.addEventListener("DOMContentLoaded", function () {
    paypal.Buttons({
        createOrder: function (data, actions) {
            return actions.order.create({
                purchase_units: [{
                    amount: {
                        value: "1.00" // Cambia esto por el precio real
                    }
                }]
            });
        },
        onApprove: function (data, actions) {
            return actions.order.capture().then(function (details) {
                alert("Pago exitoso, gracias " + details.payer.name.given_name);
                window.location.href = "tu-link-de-descarga.pdf"; // Redirige a la descarga
            });
        }
    }).render("#paypal-button-container");
});
