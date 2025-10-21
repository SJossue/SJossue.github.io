// Initialize all components when page loads
document.addEventListener('DOMContentLoaded', () => {
  console.log('Main init: starting');
  const debug = id => { const el = document.getElementById('debug-status'); if (el) el.textContent = id; };
  debug('JS: starting');
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
    if (typeof initAnimations === 'function') { initAnimations(); console.log('initAnimations OK'); debug('JS: animations'); }
    else { console.warn('initAnimations not found'); debug('JS: no animations'); }
  } catch (e) { console.error('initAnimations error', e); debug('JS: animations error'); }

  // footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Safety: ensure sections become visible if initialization didn't mark them
  setTimeout(() => {
    const anyVisible = Array.from(document.querySelectorAll('section')).some(s => s.classList.contains('visible'));
    if (!anyVisible) {
      console.warn('No sections became visible — forcing visible state as fallback');
      debug('JS: forcing visible');
      document.querySelectorAll('section').forEach(s => s.classList.add('visible'));
    } else {
      debug('JS: ready');
    }
  }, 800);
});