const projects = [
  {
    icon: "fa-brands fa-java",
    title: "Java OOPs Programs",
    desc: "Collection of Java Object Oriented Programming concepts including Student Management, Employee Management, Bank System, Contact Manager, Inventory Management and other OOP-based applications.",
    tags: ["Java", "OOPs"],
    link: "https://github.com/bhavadhaaranivmaids29-prog/Unit1-Oops",
  },
  {
    icon: "fa-brands fa-python",
    title: "Python Programming Projects",
    desc: "Python projects covering problem solving, data structures, file handling, functions, object oriented programming and mini applications.",
    tags: ["Python", "Programming"],
    link: "https://github.com/bhavadhaaranivmaids29-prog/Python",
  },
  {
    icon: "fa-brands fa-html5",
    title: "Web Development Projects",
    desc: "Responsive websites and frontend projects developed using HTML, CSS and JavaScript with modern UI and user-friendly designs.",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/bhavadhaaranivmaids29-prog/HTML",
  },
  {
    icon: "fa-solid fa-recycle",
    title: "WasteTrack - Worker Attendance & Route Register System",
    desc: "Supervisor dashboard for tracking waste collection worker attendance and managing route registers, featuring worker management, route coverage, attendance history and daily operation insights.",
    tags: ["HTML", "CSS", "JavaScript", "Node.js"],
    link: "https://bhavadhaaranivmaids29-prog.github.io/Waste-Collection-Worker-Attendance-and-Route-Register-system/",
  },
  {
    icon: "fa-solid fa-cloud-sun",
    title: "WeatherMind AI - Live Weather & Intelligent Assistant",
    desc: "Real-time weather intelligence platform with live conditions, 7-day forecasts, interactive analytics, weather-radar map, health insights and a built-in AI weather copilot, powered by the Open-Meteo API.",
    tags: ["React", "JavaScript", "API", "Chart.js"],
    link: "https://bhavadhaaranivmaids29-prog.github.io/weather_website/",
  },
];

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title reveal">My <span>Projects</span></h2>
      <div className="project-container">
        {projects.map((p, i) => (
          <div
            className="project-card reveal"
            style={{ "--rd": `${(i % 3) * 0.15}s` }}
            key={i}
          >
            <div className="project-image">
              <i className={p.icon}></i>
            </div>
            <div className="project-content">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((t, j) => <span key={j}>{t}</span>)}
              </div>
              <a href={p.link} target="_blank" className="project-btn">View Repository</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}