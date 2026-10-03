import './Journey.css';

function Journey() {
  return (
    <section id="experience" className="section journey">
      <div className="container">

        <div className="journey__header">
          <p className="journey__eyebrow">
            PROFESSIONAL JOURNEY
          </p>

          <h2 className="text-section">
            From Android development
            <span>to broader engineering.</span>
          </h2>

          <p className="text-body journey__intro">
            My professional journey started with Android application
            development and gradually expanded into product engineering,
            realtime systems and connected software.
          </p>
        </div>

        <div className="journey__timeline">

          {/* Waycool */}
          <article className="journey__item">
            <div className="journey__marker">
              <span />
            </div>

            <div className="journey__content">
              <p className="journey__number">01</p>

              <p className="journey__period">
                JAN 2021 — DEC 2023
              </p>

              <h3>
                Waycool Foods & Products
              </h3>

              <p className="journey__role">
                Android Developer
              </p>

              <p className="journey__location">
                Bengaluru
              </p>

              <p className="journey__description">
                Built and maintained Android applications across
                multiple business products, working with REST APIs,
                Firebase, Crashlytics and push notifications.
              </p>

              <div className="journey__tags">
                <span>Quality Digitization</span>
                <span>Agro360</span>
                <span>MyPrice</span>
              </div>
            </div>
          </article>

          {/* Gumb */}
          <article className="journey__item journey__item--featured">
            <div className="journey__marker">
              <span />
            </div>

            <div className="journey__content">
              <p className="journey__number">02</p>

              <p className="journey__period">
                26 JAN 2024 — 22 DEC 2024
              </p>

              <h3>
                Gumb.ag
              </h3>

              <p className="journey__role">
                Android Lead-Developer
              </p>

              <p className="journey__location">
                Switzerland · 11 months
              </p>

              <p className="journey__description">
                Primary Android engineer responsible for application
                development, UI and functionality improvements,
                debugging, build and release operations, and Android
                platform upgrades.
              </p>

              <div className="journey__tags">
                <span>MVVM</span>
                <span>MVI</span>
                <span>Firebase</span>
                <span>Crashlytics</span>
                <span>GitLab</span>
                <span>SonarCloud</span>
              </div>

              <a
                href="/experience/gumb"
                className="journey__link"
              >
                View Gumb Experience
                <span>→</span>
              </a>
            </div>
          </article>

          {/* Independent */}
          <article className="journey__item">
            <div className="journey__marker">
              <span />
            </div>

            <div className="journey__content">
              <p className="journey__number">03</p>

              <p className="journey__period">
                CURRENT
              </p>

              <h3>
                Independent Engineering
              </h3>

              <p className="journey__role">
                Product & System Development
              </p>

              <p className="journey__description">
                Building and experimenting with connected software
                systems across Android, IoT, realtime communication,
                backend services and product workflows.
              </p>

              <div className="journey__tags">
                <span>NexaHomez</span>
                <span>Tapnix</span>
                <span>IoT</span>
                <span>Realtime</span>
              </div>
            </div>
          </article>

        </div>
      </div>
    </section>
  );
}

export default Journey;