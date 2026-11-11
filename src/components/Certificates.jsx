const certificates = [
  { icon: "fa-solid fa-award", title: "Claude AI Certificate 1", file: "c1.jpeg" },
  { icon: "fa-solid fa-award", title: "Claude AI Certificate 2", file: "c2.jpeg" },
  { icon: "fa-solid fa-award", title: "Claude AI Certificate 3", file: "c3.jpeg" },
  { icon: "fa-solid fa-award", title: "Claude AI Certificate 4", file: "c4.jpeg" },
  { icon: "fa-brands fa-python", title: "Infosys Python", file: "ip.jpeg" },
  { icon: "fa-brands fa-java", title: "Infosys Java", file: "inf.jpeg" },
  { icon: "fa-brands fa-java", title: "Java Course", file: "s1.jpeg" },
  { icon: "fa-brands fa-js", title: "JavaScript Course", file: "s2.jpeg" },
  { icon: "fa-solid fa-laptop-code", title: "Digital Skills", file: "ds.jpeg" },
  { icon: "fa-brands fa-microsoft", title: "Microsoft AWS Canva", file: "aws.jpeg" },
  { icon: "fa-solid fa-comments", title: "Communication Skills", file: "cs.jpeg" },
];

export default function Certificates() {
  return (
    <section className="certificates" id="certificates">
      <h2 className="section-title reveal">My <span>Certificates</span></h2>
      <div className="certificate-container">
        {certificates.map((c, i) => (
          <div
            className="certificate-card reveal"
            style={{ "--rd": `${(i % 4) * 0.12}s` }}
            key={i}
          >
            <i className={c.icon}></i>
            <h3>{c.title}</h3>
            <a href={c.file} target="_blank" className="project-btn">View Certificate</a>
          </div>
        ))}
      </div>
    </section>
  );
}