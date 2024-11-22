// Select all buttons with the class "table-button"
const tableButtons = document.querySelectorAll('.table-button');

// Attach an event listener to each button
tableButtons.forEach(button => {
    button.addEventListener('click', async (event) => {
        // Get the clicked button
        const clickedButton = event.target;

        // Get the value from the data-value attribute
        const value = clickedButton.dataset.value;

        // Update the content of the clicked button
        if (clickedButton.innerHTML=="") {
            clickedButton.innerHTML = "x";
            // Send the value to the server
            await updateTable(value);
        }
    });
});

// Function to send data to the server
async function updateTable(value) {
    const response = await fetch('/api/game/table', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ value })
    });

    const data = await response.json();
    if (data == true) {
        document.querySelector('status').innerHTML = "you won"
    }
}
