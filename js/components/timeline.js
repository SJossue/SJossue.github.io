// Timeline data and loader
const timelineData = [
  {
    title: 'SHPE Webmaster - SHPE NJIT',
    date: 'Sep 2025 - Present',
    description: 'Led the digital transformation for an 80+ member organization by architecting and deploying a modern React/Next.js website, improving page load speeds by 70% and increasing mobile responsiveness to 98% compatibility.'
  },
  {
    title: 'Chassis Subteam Member - Baja SAE',
    date: 'Sep 2025 - Present',
    description: 'Performed 12+ FEA iterations analyzing roll cage under front/side/rear impact loads, identifying stress concentration points that enabled weight reduction while meeting SAE competition requirements.'
  },
  {
    title: "External Affairs Intern (Regional Public Affairs Team) - PSEG",
    date: 'June 2025 - Aug 2025',
    description: 'Engineered an automated data consolidation system using Excel (Advanced formulas, Power Query, conditional logic) to collect 200+ data points across 70+ municipalities, reducing manual report time by 95% and enabling same-day response to elected officials.'
  },
    {
    title: "New Jersey Governors Fellow - Center for Hispanic Policy, Research, & Development (CHPRD)",
    date: 'June 2025 - Aug 2025',
    description: 'Led a 6-person team through an 8-week strategic planning project, conducting 20+ stakeholder interviews and analyzing 5 years of organizational data to develop a HISPA engagement framework projected to expand reach by 40%.'
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

// Expose for classic scripts
window.loadTimeline = loadTimeline;
