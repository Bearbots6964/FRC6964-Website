document.addEventListener('DOMContentLoaded', function() {

    // Navigation bar
    fetch('./reusables/navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
        
        // Apply smooth scrolling to navbar links after they're loaded
        if (typeof applySmoothScrolling === 'function') {
            applySmoothScrolling();
        }
    });
    
})