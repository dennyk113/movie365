<?php
// Check if the movie parameter is set
if(isset($_GET['movie'])) {
    $movieFileName = $_GET['movie'] . '.mp4'; // Assuming movies are stored as MP4 files

    // Check if the file exists
    if(file_exists($movieFileName)) {
        // Set the appropriate headers for a download
        header('Content-Description: File Transfer');
        header('Content-Type: application/octet-stream');
        header('Content-Disposition: attachment; filename="' . basename($movieFileName) . '"');
        header('Expires: 0');
        header('Cache-Control: must-revalidate');
        header('Pragma: public');
        header('Content-Length: ' . filesize($movieFileName));

        // Read the file and output it to the browser
        readfile($movieFileName);
        exit;
    } else {
        echo 'File not found.';
    }
} else {
    echo 'Invalid request.';
}
?>
