// Select all buttons with the class "table-button"
const tableButtons = document.querySelectorAll('.table-button');
const scoreDisplay = document.getElementById('score');

// Attach an event listener to each button
tableButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        // Get the clicked button
        const clickedButton = event.target;

        // Get the value from the data-value attribute
        const row = clickedButton.dataset.row;
        const column = clickedButton.dataset.column;

        // Update the content of the clicked button
        if (clickedButton.innerHTML=="") {
            clickedButton.innerHTML = "x";
            // Send the value to the server
            await updateTable(row,column);
        }
    });
});

// Function to send data to the server
async function updateTable(row,column) {
    const response = await fetch('/api/game/table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        row: JSON.stringify({ row }),
        column: JSON.stringify({ column })
    });

    const data = await response.json();
    scoreDisplay.textContent = "update";
    //scoreDisplay.textContent = data;
    if (data.message == true) {
        scoreDisplay.textContent = "you won";
    }
}
