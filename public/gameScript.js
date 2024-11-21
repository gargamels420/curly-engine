const tableButton = document.getElementById('table-Button').value;

tableButton.addEventListener('click', () => {
    document.querySelector('table-Button').innerHTML = 'Hide';
});