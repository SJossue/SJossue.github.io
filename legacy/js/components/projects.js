// Projects data and loader
const projectsData = [
 {
    image: 'images/lda project.png',
    title: 'Linear Actuator Driven Hand Prosthetic',
    description: 'Design and prototyping of an affordable linear-actuated hand prosthetic.',
    link: 'projects/Project Report - FED1.pdf'
  },
    {
      image: 'images/av python.png',
      title: 'Autonomous Robot Navigation Simulator',
      description: `• Developing object-oriented Python simulation framework implementing pathfinding algorithms (A*, Dijkstra) and obstacle avoidance logic for autonomous robot navigation, utilizing NumPy for efficient matrix operations and Pygame for real-time visualization.
  • Building modular architecture with configurable sensor models (LiDAR, ultrasonic) and physics engines to simulate real-world systems.`,
      link: 'images/av python.png'
    },
  {
    image: 'images/SS 1.png',
    title: 'White Paper on the Integration of Electric Aircraft Systems',
    description: 'Research paper examining hybrid electric aircraft systems and their commercial viability.',
    link: 'projects/Research 2.pdf'
  },
  {
    image: 'images/info1.jpg',
    title: "Study on the Urban Integration of Shanghai's Maglev Technology",
    description: 'Analysis of maglev efficiency, urban impacts, and environmental considerations.',
    link: 'projects/Research 1.pdf'
  }
];

function loadProjects() {
  const container = document.getElementById('projects');
  container.innerHTML = '';
  projectsData.forEach(project => {
    const projectSection = document.createElement('section');
    projectSection.className = 'project';
    projectSection.innerHTML = `
      <div class="project-inner">
        <img src="${project.image}" alt="${project.title}">
        <div class="project-meta">
          <h2>${project.title}</h2>
          <p>${project.description}</p>
          <a href="${project.link}" target="_blank">View Project</a>
        </div>
      </div>
    `;
    container.appendChild(projectSection);
  });
}

// Expose for non-module scripts
window.loadProjects = loadProjects;
