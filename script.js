// Function to toggle between short and full synopses
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

// Function to perform movie search
function searchMovies() {
    // Retrieve the search query
    var searchQuery = document.getElementById('searchQuery').value.toLowerCase();

    // Get all movie sections
    var movieSections = document.getElementsByClassName('movie');

    // Flag to check if any matching movies are found
    var foundMatchingMovies = false;

    // Iterate through movie sections and hide/show based on the search query
    for (var i = 0; i < movieSections.length; i++) {
        var movieTitle = movieSections[i].getElementsByTagName('h2')[0].innerText.toLowerCase();
        var movieGenre = movieSections[i].getElementsByTagName('p')[2].innerText.toLowerCase(); // Assuming genre is at index 2

        if (movieTitle.includes(searchQuery) || movieGenre.includes(searchQuery)) {
            movieSections[i].style.display = 'block'; // Show matching section
            foundMatchingMovies = true;
        } else {
            movieSections[i].style.display = 'none'; // Hide non-matching section
        }
    }

    // Display a message if no matching movies are found
    if (!foundMatchingMovies) {
        alert("No movies found for the given search query.");
        // You can also update the DOM to display a message on the webpage instead of using an alert.
    }
}
