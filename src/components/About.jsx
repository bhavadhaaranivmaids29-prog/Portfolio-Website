export default function About() {
  return (
    <section className="about" id="about">
      <h2 className="section-title reveal">About <span>Me</span></h2>
      <div className="about-wrapper">
        <div className="about-card reveal">
          <h3>My Journey</h3>
          <p>
            I completed my schooling in 2025 and joined Prince Dr. K. Vasudevan College of Engineering
            and Technology in 2025. Currently pursuing B.Tech Artificial Intelligence and Data Science (AIDS).
            I am passionate about Data Science, Machine Learning, Artificial Intelligence, Python Programming
            and Web Development. My goal is to become a skilled Data Scientist and Machine Learning Engineer
            while continuously learning emerging technologies.
          </p>
        </div>
        <div className="about-card reveal" style={{ "--rd": ".15s" }}>
          <h3>Quick Stats</h3>
          <div className="stats">
            <div className="stat-box reveal"><h2>11+</h2><p>Certificates</p></div>
            <div className="stat-box reveal" style={{ "--rd": ".15s" }}><h2>3+</h2><p>GitHub Projects</p></div>
            <div className="stat-box reveal" style={{ "--rd": ".2s" }}><h2>8+</h2><p>Technical Skills</p></div>
            <div className="stat-box reveal" style={{ "--rd": ".35s" }}><h2>AIDS</h2><p>Department</p></div>
          </div>
        </div>
      </div>
    </section>
  );
}