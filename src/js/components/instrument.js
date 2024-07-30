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

document.addEventListener('DOMContentLoaded', () => {
    const drumDiv = document.getElementById('drumDiv');
    const fullscreenBtn = document.getElementById('fullscreenBtn');

    fullscreenBtn.addEventListener('click', () => {
        if (!document.fullscreenElement) {
            drumDiv.requestFullscreen().catch(err => {
                alert(`Error attempting to enable full-screen mode: ${err.message} (${err.name})`);
            });
        } else {
            document.exitFullscreen();
        }
    });

    document.addEventListener('fullscreenchange', () => {
        if (document.fullscreenElement) {
            drumDiv.style.width = '100vw';
            drumDiv.style.height = '100vh';
            drumDiv.classList.remove("hidden")
        } else {
            drumDiv.style.width = '';
            drumDiv.style.height = '';
            drumDiv.classList.add("hidden")
        }
    });
});
