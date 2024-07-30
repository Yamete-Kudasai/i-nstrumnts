//PAGE COMING SOON

document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    // Este es el contenido para cada página
    const images = {
        '1': '../public/assets/img/saxophone-with-background.svg',
        '2': '../public/assets/img/guitar-with-background.svg',
        '3': '../public/assets/img/piano-with-background.svg'
    };

    // Aquí cambia la imagen de la página según el instrumento escogido
    if (images[page]) {
        document.getElementById('saxophone-image').src = images[page];
    }
});

//END PAGE COMING SOON

//LOADER
function deleteLoader(){

    let loader = document.getElementById('loader')

    if(loader){
        setTimeout(() =>{
            loader.classList.add('hidden')
            console.log("se elimino el loader")
        },2000);
    }else{
        console.log("no existe el loader")
    }
}

deleteLoader()
//END LOADER

// START NAVBAR
function openMenu() {
    let menu = document.getElementById('menu');
    
    if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    } 
    else{
        menu.classList.add('hidden');
    }
}


  
    // Obtener el botón
    const backToTopButton = document.getElementById('backToTop');

    // Mostrar/ocultar el botón en función del desplazamiento de la página
    window.onscroll = function () {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.classList.remove('hidden');
            backToTopButton.classList.add('flex');
        } else {
            backToTopButton.classList.add('hidden');
            backToTopButton.classList.remove('flex');
        }
    };

    // Desplazarse hacia arriba cuando se hace clic en el botón
    backToTopButton.onclick = function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };


// END NAVBAR
// STAR INSTRUMENTS


//FIN INSTRUMENTO

//INICIO DE CONTACTO
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('form');
    const nombre = document.getElementById('name');
    const email = document.getElementById('e-mail');
    const phone = document.getElementById('phone');
    const massege = document.getElementById('massege');
    const warnings = document.getElementById('warnings');

    form.addEventListener("submit", e => {
        e.preventDefault();
        warnings.innerHTML = '';
        let warningMessages = '';

        // Validar Nombre
        if (nombre.value.length < 6) {
            warningMessages += 'El nombre es muy corto.<br>';
        }

        // Validar Email
        const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!regexEmail.test(email.value)) {
            warningMessages += 'El email no es válido.<br>';
        }

        // Validar Teléfono (opcional)
        if (phone.value.length < 7) {
            warningMessages += 'El teléfono es muy corto.<br>';
        }

        // Validar Mensaje (opcional)
        if (massege.value.length < 10) {
            warningMessages += 'El mensaje es muy corto.<br>';
        }

        // Mostrar advertencias o enviar formulario
        if (warningMessages) {
            warnings.innerHTML = warningMessages;
        } else {
            warnings.innerHTML = "Formulario enviado correctamente!";
            form.submit();
        }
    });
});


// FIN DE CONTACTO


