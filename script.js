document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("zoos");
    audio.volume = 0.5;
    // Try playing with a short delay (may work in some cases)
    setTimeout(() => {
        audio.muted = false; // Unmute
        audio.play().catch(error => {
            console.log("Autoplay blocked:", error);
        });
    }, 1000); // Delay might help in some browsers
});
