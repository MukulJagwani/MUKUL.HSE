(() => {
  'use strict';
  const videos = [...document.querySelectorAll('.film-stage video')];
  const buttons = [...document.querySelectorAll('.film-play')];

  buttons.forEach(button => {
    const video = document.getElementById(button.dataset.video);
    if (!video) return;
    button.hidden = false;
    button.addEventListener('click', () => {
      // Playback is always a visitor action. Native controls handle volume,
      // seeking and fullscreen, and still work if this enhancement is absent.
      video.focus({ preventScroll: true });
      button.hidden = true;
      video.play().catch(() => {
        button.hidden = false;
        button.focus({ preventScroll: true });
        video.closest('.film-card').querySelector('.film-error').hidden = false;
      });
    });
    video.addEventListener('play', () => { button.hidden = true; });
    video.addEventListener('ended', () => { button.hidden = false; });
  });

  videos.forEach(video => {
    video.addEventListener('play', () => {
      videos.forEach(other => { if (other !== video) other.pause(); });
      video.closest('.film-card').querySelector('.film-error').hidden = true;
    });
    video.addEventListener('error', () => {
      video.closest('.film-card').querySelector('.film-error').hidden = false;
    });
  });

  const pauseAll = () => videos.forEach(video => video.pause());
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) pauseAll();
  });
  window.addEventListener('pagehide', pauseAll);
})();
