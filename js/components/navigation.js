// Floating Navigation Component
function loadNavigation() {
  const nav = document.getElementById('floating-nav');
  nav.innerHTML = `
    <a href="#cover" title="Cover"><i class="fas fa-home"></i></a>
    <a href="#projects" title="Projects"><i class="fas fa-briefcase"></i></a>
    <a href="#experience" title="Experience"><i class="fas fa-tasks"></i></a>
    <a href="#contact" title="Contact"><i class="fas fa-envelope"></i></a>
    <a href="images/Resume Sept 2025.docx" target="_blank" title="Resume"><i class="fas fa-file-alt"></i></a>
  `;
}