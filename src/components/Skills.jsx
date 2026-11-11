const skills = [
  {
    icon: "fa-brands fa-java",
    title: "Java",
    desc: "Core Java programming with strong fundamentals in syntax, collections, exception handling and multithreading.",
  },
  {
    icon: "fa-solid fa-cubes",
    title: "OOPs",
    desc: "Object-Oriented Programming principles - classes, objects, inheritance, polymorphism, abstraction and encapsulation.",
  },
  {
    icon: "fa-brands fa-python",
    title: "Python",
    desc: "Versatile Python development for problem solving, automation, file handling and building mini applications.",
  },
  {
    icon: "fa-solid fa-globe",
    title: "Web Interface",
    desc: "Designing responsive and user-friendly web interfaces using HTML, CSS and JavaScript.",
  },
  {
    icon: "fa-solid fa-database",
    title: "DBMS",
    desc: "Relational database design, SQL queries, normalization, keys and efficient data management concepts.",
  },
  {
    icon: "fa-solid fa-chart-line",
    title: "Data Science",
    desc: "Data analysis, visualization and extracting meaningful insights from structured and raw datasets.",
  },
  {
    icon: "fa-solid fa-sitemap",
    title: "Data Structure",
    desc: "Arrays, linked lists, stacks, queues, trees and graphs for writing efficient algorithms.",
  },
];

export default function Skills() {
  return (
    <section className="skills" id="skills">
      <h2 className="section-title reveal">My <span>Skills</span></h2>
      <div className="skills-container">
        {skills.map((s, i) => (
          <div
            className="skill-card reveal"
            style={{ "--rd": `${(i % 4) * 0.15}s` }}
            key={i}
          >
            <i className={s.icon}></i>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
