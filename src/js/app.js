document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    // Este es el contenido para cada página
    const images = {
        '1': '../public/assets/img/saxophone-with-background.png',
        '2': '../public/assets/img/guitar-with-background.png',
        '3': '../public/assets/img/piano-with-background.png'
    };

    // Aquí cambia la imagen de la página según el instrumento escogido
    if (images[page]) {
        document.getElementById('saxophone-image').src = images[page];
    }
});


// INICIO NAVBAR
function openMenu() {
    let menu = document.getElementById('menu');
    
    if(menu.classList.contains('hidden')) {
    menu.classList.remove('hidden');
    } 
    else{
        menu.classList.add('hidden');
    }
}

// FIN NAVBAR


document.addEventListener('DOMContentLoaded', function() {
    const params = new URLSearchParams(window.location.search);
    const page = params.get('page');

    // Este es el contenido para cada página
    const images = {
        '1': '../public/assets/img/saxophone-with-background.png',
        '2': '../public/assets/img/guitar-with-background.png',
        '3': '../public/assets/img/piano-with-background.png'
    };

    // Aquí cambia la imagen de la página según el instrumento escogido
    if (images[page]) {
        document.getElementById('saxophone-image').src = images[page];
    }
});
 
// INSTRUMENTO

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

                if (keypress == ' ') {
                    e.preventDefault();
                }

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



    const volumeController = document.getElementById("volumecontroller")
    volumeController.addEventListener("input", () => {
        HTMLMediaElement.volume=volumeController.value/100
    })
});

//FIN INSTRUMENTO

