const scoreDisplay = document.getElementById('score');
const gameButton = document.getElementById('game-button');

// Fetch the current score
async function fetchScore() {
    const response = await fetch('/api/game/score');
    const data = await response.json();
    scoreDisplay.textContent = `Score: ${data.score}`;
}

// Update the score on button click
async function updateScore(points) {
    const response = await fetch('/api/game/score', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ points })
    });
    const data = await response.json();
    scoreDisplay.textContent = `Score: ${data.score}`;
}

// Event listener for the button
gameButton.addEventListener('click', () => {
    updateScore(1); // Add 1 point per click
});

// Initialize the game
fetchScore();
