// Simple media gallery and lightbox
const galleryData = [
  'images/introbackground.jpg',
  'images/SS 1.png',
  'images/info1.jpg',
  'images/Headshot 9:16.JPEG'
];

function loadMedia() {
  const gallery = document.getElementById('gallery');
  gallery.innerHTML = '';
  galleryData.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = '';
    img.className = 'gallery-item';
    img.addEventListener('click', () => openLightbox(src));
    gallery.appendChild(img);
  });

  const lightbox = document.getElementById('lightbox');
  const lbImg = lightbox.querySelector('.lightbox-img');
  const lbCaption = lightbox.querySelector('.lightbox-caption');
  const closeBtn = lightbox.querySelector('.lightbox-close');

  function openLightbox(src) {
    lbImg.src = src;
    lbCaption.textContent = '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }

  function closeLightbox() {
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lbImg.src = '';
  }

  closeBtn.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
}

// Expose loader globally
window.loadMedia = loadMedia;
