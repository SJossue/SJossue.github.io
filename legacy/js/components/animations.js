// Intersection Observer for fade-in animations
function initAnimations() {
  const sections = document.querySelectorAll('section');
  // If IntersectionObserver is not supported, reveal everything
  if (typeof IntersectionObserver === 'undefined') {
    sections.forEach(s => s.classList.add('visible'));
  } else {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    sections.forEach(section => observer.observe(section));

    // Fallback: if observer didn't mark sections visible after a short delay, reveal them
    setTimeout(() => {
      const anyVisible = Array.from(sections).some(s => s.classList.contains('visible'));
      if (!anyVisible) {
        sections.forEach(s => s.classList.add('visible'));
      }
    }, 500);
  }

  // SHPE Logo animation
  const shpeLogo = document.querySelector('.shpe-logo');
  if (shpeLogo) {
    if (typeof IntersectionObserver === 'undefined') {
      shpeLogo.style.opacity = '1';
      shpeLogo.style.transform = 'translateY(0)';
    } else {
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
  }

  // Timeline items animation
  const timelineItems = document.querySelectorAll('.timeline-item');
  if (typeof IntersectionObserver === 'undefined') {
    timelineItems.forEach(i => i.classList.add('visible'));
  } else {
    const timelineObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    timelineItems.forEach(item => timelineObserver.observe(item));
  }
}