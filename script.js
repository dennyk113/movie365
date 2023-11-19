function toggleSynopsis(movieId) {
    var shortSynopsis = document.getElementById(movieId).getElementsByClassName('short-synopsis')[0];
    var fullSynopsis = document.getElementById(movieId).getElementsByClassName('full-synopsis')[0];
    
    if (shortSynopsis.style.display === 'none') {
        shortSynopsis.style.display = 'block';
        fullSynopsis.style.display = 'none';
    } else {
        shortSynopsis.style.display = 'none';
        fullSynopsis.style.display = 'block';
    }
}