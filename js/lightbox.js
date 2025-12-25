const thumbs = document.querySelectorAll('.art-thumbs img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

thumbs.forEach((thumb) => {
  thumb.addEventListener('click', () => {
    lightboxImg.src = thumb.src;
    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
  lightboxImg.src = '';
});
