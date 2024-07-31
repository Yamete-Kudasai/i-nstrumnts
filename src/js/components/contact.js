//INICIO DE CONTACTO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const userName = document.getElementById('userName');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const massege = document.getElementById('massege');
    const emailError = document.getElementById('emailError');
    const phoneError = document.getElementById('phoneError');
    const massegeError = document.getElementById('massegeError');
    const userNameError = document.getElementById('userNameError');
    const warnings = document.getElementById('warnings'); // Añadir esta línea

    form.addEventListener("submit", e => {
        e.preventDefault();
        let valid = true;
        warnings.innerHTML = " ";

        // Validar Nombre
        if (userName.value.trim() === "") {
            
            userName.classList.add("border-2","ease-in-out","duration-100","border-red-500");
            userNameError.classList.remove("hidden");
            valid = false;
        } else {
            userName.classList.remove("border-2","ease-in-out","duration-100","border-red-500");
            userNameError.classList.add("hidden");
        }
        

        // Validar Email
        if (email.value.trim() === "") {
            email.classList.add("border-2","ease-in-out","duration-100","border-red-500");
            emailError.classList.remove("hidden");
            emailError.classList.add("ease-in-out","duration-700","delay-1000")
            valid = false;
            
        } else {
            email.classList.remove("border-2","ease-in-out","duration-100","border-red-500");
            emailError.classList.add("hidden");
        } 

        // Validar Teléfono (opcional)
        if (phone.value.trim() === "") {
            phone.classList.add("border-2","ease-in-out","duration-100","border-red-500");
            phoneError.classList.remove("hidden");
            valid = false;
        } else {
            phone.classList.remove("border-2","ease-in-out","duration-100","border-red-500");
            phoneError.classList.add("hidden");
        }

        // Validar Mensaje (opcional)
        if (massege.value.trim() === "") {
            massege.classList.add("border-2","ease-in-out","duration-100","border-red-500");
            massegeError.classList.remove("hidden");
            valid = false;
        } else {
            massege.classList.remove("border-2","ease-in-out","duration-100","border-red-500");
            massegeError.classList.add("hidden");
        }

        // Mostrar advertencias o enviar formulario
        if (!valid) {
            warnings.innerHTML = 'Por favor, completa todos los campos obligatorios.';
        } else {
            form.submit();
            warnings.innerHTML = "Formulario enviado correctamente!";
        }
    });
});



// FIN DE CONTACTO