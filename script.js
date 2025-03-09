document.getElementById("playButton").addEventListener("click", function() {
    const videoContainer = document.getElementById("videoContainer");
    const videoFrame = document.getElementById("videoFrame");

    // Set the correct YouTube embed URL
    videoFrame.src = "https://www.youtube.com/embed/SBHoeRlzt9I?autoplay=1";

    // Show the video container
    videoContainer.classList.remove("hidden");
});