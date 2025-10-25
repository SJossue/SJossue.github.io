// Header Component
function loadHeader() {
  const header = document.getElementById('main-header');
  header.innerHTML = `
    <div class="header-left">
      <strong>Jossue Sarango</strong>
      <span>New Jersey / NYC</span>
    </div>
    <nav class="header-nav">
      <a href="#cover">Home</a>
      <a href="#experience">Experience</a> 
      <a href="#projects">Projects</a>
      <a href="#media">Media</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="header-right">
      <a href="https://linkedin.com/in/jossue-sarango" target="_blank"><i class="fab fa-linkedin"></i></a>
      <a href="https://github.com/SJossue" target="_blank"><i class="fab fa-github"></i></a>
      <a href="mailto:jossuesarango1@gmail.com"><i class="fas fa-envelope"></i></a>
    </div>
  `;

  // active link highlighting on scroll
  const links = header.querySelectorAll('.header-nav a');
  const sections = Array.from(links).map(l => document.querySelector(l.getAttribute('href')));
  function onScroll() {
    const y = window.scrollY + window.innerHeight / 3;
    sections.forEach((sec, i) => {
      if (!sec) return;
      const top = sec.offsetTop;
      const bottom = top + sec.offsetHeight;
      links[i].classList.toggle('active', y >= top && y < bottom);
    });
  }
  window.addEventListener('scroll', onScroll);
}