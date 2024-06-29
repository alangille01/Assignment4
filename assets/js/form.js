
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

    let blogPosts = JSON.parse(localStorage.getItem('blogPosts')) || [];
    blogPosts.unshift(blogPost);
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
    window.location.href = 'blog.html';
});