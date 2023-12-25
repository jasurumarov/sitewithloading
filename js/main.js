function hideLoadingCircle() {
    document.getElementById('loading-circle').style.display = 'none';
}

// Show the loading circle initially
window.addEventListener('load', function() {
    // Code to show the loading circle
    document.getElementById('loading-circle').style.display = 'block';

    // Code to hide the loading circle after 3 seconds
    setTimeout(hideLoadingCircle, 1800);
});

window.addEventListener('beforeunload', function() {
    // Code to hide the loading circle before page unload (optional)
    document.getElementById('loading-circle').style.display = 'none';
});