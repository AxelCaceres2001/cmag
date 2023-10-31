// Función para validar el formulario
function validateForm() {
    var userName = document.getElementById("user_name").value;
    var userEmail = document.getElementById("user_email").value;
    var userTel = document.getElementById("user_tel").value;

    if (userName === "") {
        alert("Por favor, ingrese su nombre.");
        return false;
    }

    if (userEmail === "") {
        alert("Por favor, ingrese su dirección de correo electrónico.");
        return false;
    }

    if (userTel === "") {
        alert("Por favor, ingrese su número de teléfono.");
        return false;
    }

    // Expresión regular para validar que el número de teléfono sea un número
    var phoneNumberPattern = /^\d+$/;

    if (!phoneNumberPattern.test(userTel)) {
        alert("El número de teléfono debe contener solo dígitos.");
        return false;
    }

    return true;
}