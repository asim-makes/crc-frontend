// script.js
document.addEventListener('DOMContentLoaded', (event) => {
    const visitorCountElement = document.getElementById('visitorCount');
    const totalVisitorsElement = document.getElementById('totalVisitors');
    const lastVisitedElement = document.getElementById('lastVisited');

    if (visitorCountElement && totalVisitorsElement && lastVisitedElement) {
        const apiEndpoint = '%%AZURE_FUNCTION_URL%%'

        fetch(apiEndpoint)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                visitorCountElement.textContent = data.visitorCount || '1';
                totalVisitorsElement.textContent = data.totalVisitors || data.visitorCount || '1';

                if (data.lastVisited) {
                    const lastVisited = new Date(data.lastVisited);
                    lastVisitedElement.textContent = lastVisited.toLocaleDateString();
                } else {
                    lastVisitedElement.textContent = new Date().toLocaleDateString();
                }
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
                visitorCountElement.textContent = 'Error';
                visitorCountElement.classList.add('error');
                totalVisitorsElement.textContent = 'Error';
                totalVisitorsElement.classList.add('error');
                lastVisitedElement.textContent = 'Error';
                lastVisitedElement.classList.add('error');
            });
    }

    if (typeof feather !== 'undefined') {
        feather.replace();
    }
});