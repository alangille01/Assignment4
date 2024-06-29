// Event listener for when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // get data from localstorage
    const blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];

    const blogContent = document.getElementById('blogContent');
    blogContent.innerHTML = '';

    // Display message is no blog posts found
    if (blogPosts.length === 0) {
        blogContent.innerHTML = '<p>No blog posts found.</p>';
    } else {
        blogPosts.forEach((post, index) => {
            // Go through the array and create blog post element
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
});