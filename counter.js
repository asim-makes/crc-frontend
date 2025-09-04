// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const visitorCountElement = document.getElementById('visitorCount');

    if (visitorCountElement) {
        // Replace with your actual Azure Function URL
        const apiEndpoint = '%%AZURE_FUNCTION_URL%%'

        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Update the text content with the count from the API
                visitorCountElement.textContent = data.visitorCount;
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                visitorCountElement.textContent = 'Error';
            });

        // Replace feather icons after content loads
        if (typeof feather !== 'undefined') {
            feather.replace();
        }
    }
});