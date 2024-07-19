

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
    
    document.addEventListener('keydown', (event) => {
        const key = event.key.toLowerCase();
        const drum = document.querySelector(`.drum-part[data-key="${key}"]`);
        if (drum) {
            const sound = drum.getAttribute('data-sound');
            playSound(sound);
        }
    });
});

//FIN INSTRUMENTO