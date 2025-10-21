// Timeline data and loader
const timelineData = [
  {
    title: 'Baja Society of Automotive Engineers',
    date: 'Sept 2025 - Present',
    description: 'Structural Analysis & FEA: Perform finite element analysis of roll cage frame and integrated chassis design.'
  },
  {
    title: 'Regional Public Affairs Intern - PSEG',
    date: 'June 2025 - Aug 2025',
    description: 'Project Management: Oversaw electrical substation and 69kV circuit projects and automated reporting processes.'
  },
  {
    title: "New Jersey Governor's Fellow - Center for Hispanic, Policy, Research, and Development",
    date: 'June 2025 - Aug 2025',
    description: 'Led a 6-member team in an 8-week project to develop a strategic plan adopted by HISPA.'
  },
  {
    title: 'T.E.A.M. Coordinator - New Jersey Institute of Technology (EOP)',
    date: 'January 2025 - Present',
    description: 'Designed promotional materials and implemented engagement strategies to support retention goals.'
  }
];

function loadTimeline() {
  const container = document.getElementById('timeline-items');
  container.innerHTML = '';
  timelineData.forEach(item => {
    const timelineItem = document.createElement('div');
    timelineItem.className = 'timeline-item';
    timelineItem.innerHTML = `
      <h3>${item.title}</h3>
      <span>${item.date}</span>
      <p>${item.description}</p>
    `;
    container.appendChild(timelineItem);
  });
}

export { loadTimeline, timelineData };
