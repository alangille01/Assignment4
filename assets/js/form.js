document.getElementById("dataForm").onsubmit = function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;

    const formData = [username, title, content];

    localStorage.setItem("formData", JSON.stringify(formData));

    alert("Data saved to local storage!");
};