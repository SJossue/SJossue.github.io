// Initialize all components when page loads
document.addEventListener('DOMContentLoaded', () => {
  loadHeader();
  loadNavigation();
  loadProjects();
  loadTimeline();
  loadMedia();
  initAnimations();

  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});