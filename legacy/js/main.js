// Initialize all components when page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('Main init: starting');
  try { if (typeof loadHeader === 'function') { loadHeader(); console.log('loadHeader OK'); } }
  catch (e) { console.error('loadHeader error', e); }
  try { if (typeof loadNavigation === 'function') { loadNavigation(); console.log('loadNavigation OK'); } }
  catch (e) { console.error('loadNavigation error', e); }

  try {
    if (typeof loadProjects === 'function') { loadProjects(); console.log('loadProjects OK'); }
    else console.warn('loadProjects not found');
  } catch (e) { console.error('loadProjects error', e); }

  try {
    if (typeof loadTimeline === 'function') { loadTimeline(); console.log('loadTimeline OK'); }
    else console.warn('loadTimeline not found');
  } catch (e) { console.error('loadTimeline error', e); }

  try {
    if (typeof loadMedia === 'function') { loadMedia(); console.log('loadMedia OK'); }
    else console.warn('loadMedia not found');
  } catch (e) { console.error('loadMedia error', e); }

  try {
    if (typeof initAnimations === 'function') { initAnimations(); console.log('initAnimations OK'); }
    else console.warn('initAnimations not found');
  } catch (e) { console.error('initAnimations error', e); }

  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

});