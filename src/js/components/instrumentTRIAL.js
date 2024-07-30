const canvas = document.getElementById('drumCanvas');
        const ctx = canvas.getContext('2d');
        const drumImage = new Image();

        drumImage.src = 'bateria.jpg'; // Reemplaza con la ruta de tu imagen

        drumImage.onload = function() {
            ctx.drawImage(drumImage, 0, 0, canvas.width, canvas.height);
        };

        const areas = [
            { x: 125, y: 25, width: 100, height: 100, sound: 'crash', key: 'R' },
            { x: 240, y: 280, width: 100, height: 100, sound: 'snare', key: 'N' },
            { x: 325, y: 250, width: 100, height: 100, sound: 'bombo', key: ' ' },
            { x: 260, y: 115, width: 100, height: 100, sound: 'tom1', key: 'G'  },
            { x: 360, y: 115, width: 100, height: 100, sound: 'tom2', key: 'H' },
            { x: 430, y: 300, width: 120, height: 120, sound: 'tom3', key: 'J' },
            { x: 580, y: 180, width: 170, height: 170, sound: 'crash', key: 'R' },
            { x: 460, y: 25, width: 170, height: 170, sound: 'ride', key: 'Y' },
            { x: 100, y: 240, width: 100, height: 100, sound: 'hithat', key: 'B' }
        ];

        function playSound(soundId) {
            const audio = new Audio(`../public/assets/samples/${soundId}.mp3`)
            audio.play()
        }

        function applyOpacity(x, y, width, height) {
            ctx.save();
            ctx.globalAlpha = 0.5;
            ctx.fillStyle = 'rgba(255, 255, 255, 0.5)';
            ctx.fillRect(x, y, width, height);
            setTimeout(() => {
                ctx.restore();
                ctx.drawImage(drumImage, 0, 0, canvas.width, canvas.height);
            }, 200);
        }

        canvas.addEventListener('click', function(event) {
            const rect = canvas.getBoundingClientRect();
            const x = event.clientX - rect.left;
            const y = event.clientY - rect.top;

            for (let area of areas) {
                if (x > area.x && x < area.x + area.width && y > area.y && y < area.y + area.height) {
                    playSound(area.sound);
                    applyOpacity(area.x, area.y, area.width, area.height);
                    break;
                }
            }
        });


        document.getElementById('fullScreenButton').addEventListener('click', function() {
            if (canvas.requestFullscreen) {
                canvas.requestFullscreen();
            } else if (canvas.mozRequestFullScreen) { // Firefox
                canvas.mozRequestFullScreen();
            } else if (canvas.webkitRequestFullscreen) { // Chrome, Safari and Opera
                canvas.webkitRequestFullscreen();
            } else if (canvas.msRequestFullscreen) { // IE/Edge
                canvas.msRequestFullscreen();
            }
        });

        document.addEventListener('fullscreenchange', () => {
            if (document.fullscreenElement) {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
                ctx.drawImage(drumImage, 0, 0, canvas.width, canvas.height);
            } else {
                canvas.width = 800;
                canvas.height = 600;
                ctx.drawImage(drumImage, 0, 0, canvas.width, canvas.height);
            }
        });

        document.addEventListener('keyup', function(event) {
            const key = event.key.toUpperCase();

            for (let area of areas) {
                if (key === area.key) {
                    playSound(area.sound);
                    applyOpacity(area.x, area.y, area.width, area.height);
                    break;
                }
            }
        });