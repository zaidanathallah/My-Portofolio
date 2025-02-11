const contactFrom = document.getElementById("contact-form");
const loadingIndicator = document.createElement('div');
loadingIndicator.className = 'loading';
loadingIndicator.innerText = 'Loading...';
loadingIndicator.style.display = 'none';
document.body.appendChild(loadingIndicator);

contactFrom.addEventListener("submit", function (e) {
    e.preventDefault();

    // Show loading indicator
    loadingIndicator.style.display = 'block';

    const url = e.target.action;
    const formData = new FormData(contactFrom);

    fetch(url, {
        method: "POST",
        body: formData,
        mode: "no-cors",
    })
    .then(() => {
        // Hide loading indicator
        loadingIndicator.style.display = 'none';
        // Redirect to thank you page
        window.location.href = "thankyou.html";
    })
    .catch((e) => {
        // Hide loading indicator
        loadingIndicator.style.display = 'none';
        alert("Error occurred");
    });
});
