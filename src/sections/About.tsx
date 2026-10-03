import './About.css';

function About() {
  return (
    <section id="about" className="section about">
      <div className="container">

        <div className="about__header">
          <p className="about__eyebrow">
            ABOUT
          </p>

          <h2 className="text-section">
            Building software is only part
            <span>of the engineering process.</span>
          </h2>
        </div>

        <div className="about__grid">

          <div className="about__story">

            <p className="about__lead">
              I started my professional journey in Android
              development, building and maintaining applications
              for real business workflows.
            </p>

            <p>
              Over time, my work expanded beyond the application
              layer. I became increasingly interested in how
              applications communicate with backend systems,
              realtime services and physical devices.
            </p>

            <p>
              That progression led me from Android application
              development into realtime communication, IoT,
              backend services and complete product workflows.
            </p>

            <p>
              Today, I enjoy working on systems where multiple
              components have to work together reliably — from
              an Android interface and backend service to a
              realtime communication layer or a physical device.
            </p>

          </div>

          <aside className="about__focus">

            <div className="about__focus-header">
              <span className="about__focus-dot" />

              <span>
                CURRENT FOCUS
              </span>
            </div>

            <div className="about__focus-list">

              <div>
                <strong>01</strong>
                <span>Android Engineering</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Realtime Systems</span>
              </div>

              <div>
                <strong>03</strong>
                <span>IoT & Connected Devices</span>
              </div>

              <div>
                <strong>04</strong>
                <span>Product Engineering</span>
              </div>

            </div>

            <div className="about__focus-footer">
              <span>Based on hands-on project work</span>
            </div>

          </aside>

        </div>

      </div>
    </section>
  );
}

export default About;