// Handle theme toggle
document.getElementById('themeToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
    localStorage.setItem('theme', currentMode);
    updateThemeToggleIcon(currentMode);
});

// Load theme on page load
document.addEventListener('DOMContentLoaded', function() {
    // Theme is stored in localstorage
    // Render appropriate theme depending on the value in localstorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateThemeToggleIcon(savedTheme);
});

// Function to update theme toggle button icon
function updateThemeToggleIcon(themeMode) {
    const sunIcon = document.querySelector('#themeToggle .fa-sun');
    const moonIcon = document.querySelector('#themeToggle .fa-moon');

    // Show sun when in light mode
    // Show moon when in dark mode
    if (themeMode === 'dark') {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        sunIcon.style.display = 'inline-block';
        moonIcon.style.display = 'none';
    }
}