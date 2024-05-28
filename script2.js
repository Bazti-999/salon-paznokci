document.addEventListener("DOMContentLoaded", function () {
    const ourStory = document.querySelector('.ourStory');
    const ourStoryText = document.getElementById('ourStoryText');

    ourStory.addEventListener('click', function () {
        ourStoryText.style.display = 'block';
        ourStory.classList.add('clicked');
    });
});
