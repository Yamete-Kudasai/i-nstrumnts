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

// END NAVBAR
// STAR INSTRUMENTS

document.addEventListener('DOMContentLoaded', () => {

    
    


    const drums = document.querySelectorAll('.drum-part');

    drums.forEach(drum => {
        drum.addEventListener('mousedown', () => {
            const sound = drum.getAttribute('data-sound');
            playSound(sound);
            
        });
    });

    function playSound(sound) {
        const audio = new Audio(`../public/assets/samples/${sound}.mp3`);
        audio.play();
    }
    
    document.addEventListener('keyup', (event) => {
        var key = event.key.toLowerCase();
        var drum = document.querySelector(`.drum-part[data-key="${key}"]`);
        if (drum) {
            const sound = drum.getAttribute('data-sound');

            playSound(sound);

            
        }
    });

    let keypressed = new Set();
            document.addEventListener('keydown',(e) =>{
                let  keypress = e.key.toLowerCase();
                keypressed.add(keypress)

                e.preventDefault();
                
                let colorBorder = document.querySelector('.drum-part')

                if(colorBorder)

                opacityDrum()
            });

            document.addEventListener('keyup',(e) =>{
                let  keypressRelay = e.key.toLowerCase();
                keypressed.delete(keypressRelay)
                opacityDrum()
            });



            function opacityDrum(){
                
                const parts = document.querySelectorAll('.drum-part'); // Selecciona todos los elementos con la clase 'btn-drum'
            
                parts.forEach(part => {
        
                    let key = part.getAttribute('data-key')
                    if (keypressed.has(key)) {
                            part.classList.remove('opacity-1');
                            part.classList.add('opacity-10');
                        } else {
                            part.classList.remove('opacity-10');
                            part.classList.add('opacity-1');
                        }
                });
            }
});

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

