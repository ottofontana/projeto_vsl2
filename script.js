document.addEventListener("DOMContentLoaded", function() {
    const salesVideo = document.getElementById('salesVideo');
    const contentAfterVideo = document.getElementById('contentAfterVideo');
    const buyButtonLarge = document.getElementById('buyButtonLarge');
    const buyButtonBottom = document.getElementById('buyButtonBottom');

    salesVideo.addEventListener('ended', function() {
        contentAfterVideo.classList.remove('hidden');
        buyButtonLarge.classList.remove('hidden');
        buyButtonBottom.classList.remove('hidden');
    });
});
