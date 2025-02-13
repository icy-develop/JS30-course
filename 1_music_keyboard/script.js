window.addEventListener('keydown', function(e) {
    const audio = document.querySelector(`audio[data-key="${e.key.toLowerCase()}"]`);
    const key = document.querySelector(`.key[data-key="${e.key.toLowerCase()}"]`);
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
    audio.addEventListener('ended', () => {
        key.classList.remove('playing');
    });
});