const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('hide');
});
