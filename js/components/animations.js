// Intersection Observer for fade-in animations
function initAnimations() {
  const sections = document.querySelectorAll('section');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  sections.forEach(section => observer.observe(section));

  // SHPE Logo animation
  const shpeLogo = document.querySelector('.shpe-logo');
  if (shpeLogo) {
    const logoObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          logoObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });
    logoObserver.observe(shpeLogo);
  }

  // Timeline items animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  const timelineObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.2 });
  
  timelineItems.forEach(item => timelineObserver.observe(item));
}