
// Handle form submission
document.getElementById('blogPost').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const title = document.getElementById('title').value;
    const content = document.getElementById('Content').value;

    const blogPost = {
        username: username,
        title: title,
        content: content,
        timestamp: new Date().toISOString()
    };

    // store blog post in JSON string in localstorage
    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    // most recent blogpost will be displated first
    blogPosts.unshift(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    // switch to blog page
    window.location.href = 'blog.html';
});