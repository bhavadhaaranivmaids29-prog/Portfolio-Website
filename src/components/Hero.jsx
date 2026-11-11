export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <h3>Hello, I'm</h3>
        <h1><span>Bhavadhaarani V M</span></h1>
        <h2>AIDS Student | Aspiring Data Science & ML Learner</h2>
        <p>
          Passionate about Artificial Intelligence, Machine Learning, Data Science,
          Python Programming and Web Development.
        </p>
        <a href="#projects" className="btn primary-btn">View Projects</a>
        <a href="#contact" className="btn secondary-btn">Contact Me</a>
        <div className="social-icons">
          <a href="https://github.com/bhavadhaaranivmaids29-prog"><i className="fab fa-github"></i></a>
          <a href="https://www.linkedin.com/in/bhava-dhaarani-v-m-74519b387/"><i className="fab fa-linkedin"></i></a>
          <a href="https://www.instagram.com/bhava_7598/?__pwa=1"><i className="fab fa-instagram"></i></a>
          <a href="mailto:bhavadhaarani.vm.aids29@princedrkvasudevan.com"><i className="fas fa-envelope"></i></a>
        </div>
      </div>
      <div className="hero-right">
        <div className="image-box">
          <img src="bh.jpeg" alt="Bhavadhaarani" />
        </div>
      </div>
    </section>
  );
}