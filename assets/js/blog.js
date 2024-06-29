document.addEventListener('DOMContentLoaded', function() {
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogContent = document.getElementById('blogContent');
    blogContent.innerHTML = '';

    if (blogPosts.length === 0) {
        blogContent.innerHTML = '<p>No blog posts found.</p>';
    } else {
        blogPosts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.className = 'blog-post mb-4';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <h4>by: ${post.username}</h4>
                <p>${post.content}</p>
                <small>${new Date(post.timestamp).toLocaleString()}</small>
            `;
            blogContent.appendChild(postElement);

            // Add a horizontal line except after the last post
            if (index < blogPosts.length - 1) {
                const hr = document.createElement('hr');
                blogContent.appendChild(hr);
            }
        });
    }

    // Load theme on page load
    const savedTheme = localStorage.getItem('theme') || 'light';
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Update theme toggle button icon based on saved theme
    updateThemeToggleIcon(savedTheme);

    // Handle theme toggle
    document.getElementById('themeToggle').addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const currentMode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('theme', currentMode);
        updateThemeToggleIcon(currentMode);
    });

    // Function to update theme toggle button icon
    function updateThemeToggleIcon(themeMode) {
        const sunIcon = document.querySelector('#themeToggle .fa-sun');
        const moonIcon = document.querySelector('#themeToggle .fa-moon');

        if (themeMode === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'inline-block';
        } else {
            sunIcon.style.display = 'inline-block';
            moonIcon.style.display = 'none';
        }
    }
});