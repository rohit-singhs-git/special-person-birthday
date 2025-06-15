// Reveal the hidden surprise and start the falling hearts
document.getElementById("revealMessage").addEventListener("click", function () {
  const surprise = document.getElementById("surprise");
  surprise.classList.toggle("hidden");
  startHearts();
});

// Function to create falling hearts
function startHearts() {
  const confettiContainer = document.getElementById("confetti");
  confettiContainer.innerHTML = ""; // Clear existing hearts

  for (let i = 0; i < 100; i++) { // Number of hearts
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "❤️"; // Unicode heart emoji
    // heart.innerHTML = "*"
    heart.style.left = Math.random() * 100 + "vw"; // Random horizontal position
    heart.style.animationDelay = Math.random() * 5 + "s"; // Random start delay
    heart.style.fontSize = Math.random() * 2 + 1 + "rem"; // Random heart size
    confettiContainer.appendChild(heart);
  }
}