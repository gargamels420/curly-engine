const scoreDisplay = document.getElementById('score');
const gameButton = document.getElementById('game-button');
const tableButtons = document.querySelectorAll('.table-button');
// Function to send data to the server
async function updateTable(value) {
    const response = await fetch('/api/game/table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
    });

    const data = await response.json();
    console.log('Server response:', data);
}
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

// Attach an event listener to each button
tableButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        // Get the clicked button
        const clickedButton = event.target;

        // Get the value from the data-value attribute
        const value = clickedButton.dataset.value;

        // Send the value to the server
        await updateTable(value);

        // Update the content of the clicked button
        clickedButton.innerHTML = 'Updated!';
    });
});


// Event listener for the button
gameButton.addEventListener('click', () => {
    updateScore(1); // Add 1 point per click
});
// Initialize the game
fetchScore();
