import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">

        <div className="contact__card">

          <div className="contact__content">

            <p className="contact__eyebrow">
              GET IN TOUCH
            </p>

            <h2 className="text-section">
              Have a product,
              <span>system or idea to build?</span>
            </h2>

            <p className="text-body contact__description">
              I'm open to conversations around Android engineering,
              product development, realtime systems and connected
              technology.
            </p>

          </div>

          <div className="contact__actions">

            <a
              href="mailto:iamajaykumar2782@gmail.com"
              className="contact__primary"
            >
              Start a conversation
              <span>↗</span>
            </a>

            <div className="contact__links">

              <a
                href="https://www.linkedin.com/in/ajay-kumar-37b69827b/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>

              <a
                href="https://github.com/AjayTheXplorer"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href="/resume/resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;