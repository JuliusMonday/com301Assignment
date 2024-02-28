document.getElementById('okayButton').addEventListener('click', function() {
    const userName = document.getElementById('nameInput').value;
    // Assuming you have a home page named "index.html"
    // You can pass the username as a query parameter
    window.location.href = `home.html?name=${encodeURIComponent(userName)}`;
});