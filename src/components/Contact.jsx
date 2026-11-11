export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    document.getElementById("successMessage").innerHTML = "Message Sent Successfully ✅";
    e.target.reset();
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title reveal">Contact <span>Me</span></h2>
      <div className="contact-wrapper">
        <div className="contact-left reveal">
          <h3>Let's Connect</h3>
          <p>
            Feel free to connect with me for projects, internships, collaborations and learning opportunities
            in Data Science, Machine Learning and Web Development.
          </p>
          <div className="contact-box">
            <i className="fas fa-envelope"></i>
            <div>
              <h4>Email</h4>
              <p>bhavadhaarani.vm.aids29@princedrkvasudevan.com</p>
            </div>
          </div>
          <div className="contact-box">
            <i className="fab fa-github"></i>
            <div>
              <h4>GitHub</h4>
              <a href="https://github.com/bhavadhaaranivmaids29-prog" target="_blank">Visit Profile</a>
            </div>
          </div>
          <div className="contact-box">
            <i className="fab fa-linkedin"></i>
            <div>
              <h4>LinkedIn</h4>
              <a href="https://www.linkedin.com/in/bhava-dhaarani-v-m-74519b387/" target="_blank">Visit Profile</a>
            </div>
          </div>
          <div className="contact-box">
            <i className="fab fa-instagram"></i>
            <div>
              <h4>Instagram</h4>
              <a href="https://www.instagram.com/bhava_7598/?__pwa=1" target="_blank">Follow Me</a>
            </div>
          </div>
        </div>
        <div className="contact-right reveal" style={{ "--rd": ".15s" }}>
          <form id="contactForm" onSubmit={handleSubmit}>
            <input type="text" id="name" placeholder="Enter Your Name" required />
            <input type="email" id="email" placeholder="Enter Your Email" required />
            <textarea id="message" rows="6" placeholder="Enter Your Message" required></textarea>
            <button type="submit" className="send-btn">Send Message</button>
            <p id="successMessage"></p>
          </form>
        </div>
      </div>
    </section>
  );
}