const randomNumber = Math.floor(Math.random() * 40) + 1;

// Get the circle container element
const circleContainer = document.getElementById("circle-container");
const displayAttempts = document.getElementById("attempts");
const reloadButton = document.getElementById("reload");
let attempts = 6;

// Create 40 circles dynamically
for (let i = 1; i <= 40; i++) {
  const circle = document.createElement("button");
  circle.classList.add("circle", "btn", "btn-outline-secondary", "m-1");
  circle.textContent = i;
  circleContainer.appendChild(circle);

  // Add click event listener to each circle
  circle.addEventListener("click", function () {
    const selectedNumber = parseInt(this.textContent);
    attempts--;

    if (selectedNumber === randomNumber) {
      this.classList.add("btn-success");
      alert("Huraahhhh!! Correct Number guessed!");
      location.reload();
    } else if (selectedNumber > randomNumber) {
      this.classList.add("btn-danger");
    } else {
      this.classList.add("btn-warning");
    }
    
    if (attempts === 0) {
      alert("6 attempts exhausted! The number was " + randomNumber);
      location.reload();
    }
    
    displayAttempts.innerText = `${attempts} remaining`;
  });
}

reloadButton.addEventListener("click", () => location.reload());
console.log("Random number to guess:", randomNumber);
