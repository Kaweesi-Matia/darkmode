const themeToggleBtn = document.querySelector('.theme-toggle');
const body = document.body;

themeToggleBtn.addEventListener('click', () => {
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');

    // Update the button text based on the theme
    if (body.classList.contains('dark-mode')) {
        themeToggleBtn.textContent = 'Switch to Light Mode';
    } else {
        themeToggleBtn.textContent = 'Switch to Dark Mode';
    }
});
