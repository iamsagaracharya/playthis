document.getElementById("playButton").addEventListener("click", function() {
    const videoContainer = document.getElementById("videoContainer");
    const videoFrame = document.getElementById("videoFrame");

    // Set the correct YouTube embed URL
    videoFrame.src = "https://www.youtube.com/embed/GMgsFZ4rkEI";  // Corrected embed URL

    // Show the video container
    videoContainer.classList.remove("hidden");
});