//Enlace a whatsapp
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("whatsappBtn").addEventListener("click", function () {
        let name = document.getElementById("name").value;
        let phone = document.getElementById("phone").value;

        if (name && phone) {
            let message = `Hola, mi nombre es ${name} y estoy interesado en comprar el libro.`;
            let whatsappURL = `https://wa.me/51943664207?text=${encodeURIComponent(message)}`;
            this.href = whatsappURL;
        } else {
            alert("Por favor, completa todos los campos antes de continuar.");
        }
    });
});
