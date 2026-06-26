// Wait for the HTML document to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // Grab the elements
    const video = document.getElementById('wildlifeVideo');
    const toggleBtn = document.getElementById('toggleBtn');

    // Safety check: Make sure the elements actually exist before doing anything
    if (!video || !toggleBtn) {
        console.error("Error: Could not find the video or the button on the page.");
        return; // Stop the script here if they are missing
    }

    // Add click functionality
    toggleBtn.addEventListener('click', function() {
        if (video.paused) {
            video.style.display = 'inline-block';
            video.play();
            toggleBtn.innerHTML = '<span class="icon">✖</span> Hide Video';
        } else {
            video.pause();
            video.style.display = 'none';
            toggleBtn.innerHTML = '<span class="icon">▶</span> Play Video';
        }
    });
    
});