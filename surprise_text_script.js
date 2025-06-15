const text = "Forever and always 💖";
        let index = 0;
        function typeMessage() {
            if (index < text.length) {
                document.getElementById("typing-text").textContent += text.charAt(index);
                index++;
                setTimeout(typeMessage, 100);
            }
        }
        typeMessage();

        function createBalloon() {
            const balloon = document.createElement('div');
            balloon.classList.add('balloon');
            balloon.innerHTML = '💞';
            balloon.style.left = Math.random() * window.innerWidth + 'px';
            document.body.appendChild(balloon);
            setTimeout(() => balloon.remove(), 5000);
        }
        setInterval(createBalloon, 500);

        function createFirework() {
            const firework = document.createElement('div');
            firework.classList.add('fireworks');
            firework.style.left = Math.random() * window.innerWidth + 'px';
            firework.style.top = Math.random() * window.innerHeight + 'px';
            document.body.appendChild(firework);
            setTimeout(() => firework.remove(), 1000);
        }
        setInterval(createFirework, 800);

        document.addEventListener("click", function(event) {
            const fireworkText = document.getElementById("firework-text");
            fireworkText.style.left = event.clientX + 'px';
            fireworkText.style.top = event.clientY + 'px';
            fireworkText.style.display = "block";
            fireworkText.style.opacity = "1";
            setTimeout(() => {
                fireworkText.style.opacity = "0";
                setTimeout(() => fireworkText.style.display = "none", 1000);
            }, 1000);
        });