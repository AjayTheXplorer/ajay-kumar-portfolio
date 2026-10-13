
import { Link } from 'react-router-dom';
import './Gumb.css';
import Navbar from "../components/Navbar";

const responsibilities = [
  {
    number: '01',
    title: 'Android Application Development',
    description:
      'Owned Android-side development and maintained the application stack, delivering UI improvements and functional enhancements.',
  },
  {
    number: '02',
    title: 'Debugging & Reliability',
    description:
      'Investigated application issues, used Firebase Crashlytics to support crash analysis, and worked on improving application stability.',
  },
  {
    number: '03',
    title: 'Android Platform Migration',
    description:
      'Worked through Android 13 to Android 14 migration challenges, including SDK updates and KSP/Hilt integration issues. Resolved Hilt-related compatibility and build issues before completing the platform upgrade.',
  },
  {
    number: '04',
    title: 'UI & Pagination Improvements',
    description:
      'Implemented pagination involving images and UI updates to improve how application content was presented and navigated.',
  },
  {
    number: '05',
    title: 'Builds & Releases',
    description:
      'Handled Android build and release workflows, including Play Console operations and release-related debugging.',
  },
  {
    number: '06',
    title: 'Code Quality & Collaboration',
    description:
      'Worked with GitLab and SonarCloud as part of the development and code-quality workflow.',
  },
];

const technologies = [
  'Android',
  'Kotlin',
  'MVVM',
  'MVI',
  'Firebase',
  'Crashlytics',
  'Android SDK',
  'GitLab',
  'SonarCloud',
  'Google Play Console',
];

function Gumb() {
  return (
    <main className="gumb-page">
      <Navbar />
      {/* HERO */}
      <section className="gumb-hero">
        <div className="gumb-container">
          <div className="gumb-hero__content">
            <p className="gumb-eyebrow">
              PROFESSIONAL EXPERIENCE · ANDROID ENGINEERING
            </p>

            <h1>
              Gumb<span>.ag</span>
            </h1>

            <p className="gumb-hero__role">
              Android Lead-Developer
            </p>

            <p className="gumb-hero__description">
              Taking ownership of Android application development,
              platform upgrades, debugging and release workflows
              in a professional product environment.
            </p>

            <div className="gumb-meta">
              <span>Switzerland</span>
              <span>26 Jan 2024 — 22 Dec 2024</span>
              <span>11 months</span>
            </div>

            <div className="gumb-hero__actions">
              <a href="#gumb-contributions" className="gumb-button gumb-button--primary">
                Explore Contributions <span aria-hidden="true">↘</span>
              </a>

              <Link to="/" className="gumb-button gumb-button--secondary">
                Back to Portfolio
              </Link>
            </div>
          </div>

          <div className="gumb-hero__side">
            <div className="gumb-highlight-card">
              <p className="gumb-card-label">ROLE FOCUS</p>
              <h2>Android Engineering</h2>
              <p>
                Application ownership across development,
                maintenance, debugging and release operations.
              </p>
              <div className="gumb-highlight-card__divider" />
              <div className="gumb-highlight-row">
                <span>01</span>
                <span>Application Development</span>
              </div>
              <div className="gumb-highlight-row">
                <span>02</span>
                <span>Platform Migration</span>
              </div>
              <div className="gumb-highlight-row">
                <span>03</span>
                <span>Build & Release</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="gumb-section gumb-overview">
        <div className="gumb-container">
          <div className="gumb-section-heading">
            <p className="gumb-eyebrow">EXPERIENCE OVERVIEW</p>
            <h2>
              Professional Android ownership,
              <span> from implementation to release.</span>
            </h2>
          </div>

          <div className="gumb-overview__grid">
            <article className="gumb-overview-card">
              <span className="gumb-card-number">01</span>
              <h3>Development</h3>
              <p>
                Android application development and ongoing
                UI and functionality enhancements.
              </p>
            </article>

            <article className="gumb-overview-card">
              <span className="gumb-card-number">02</span>
              <h3>Reliability</h3>
              <p>
                Debugging, crash investigation and platform
                compatibility work.
              </p>
            </article>

            <article className="gumb-overview-card">
              <span className="gumb-card-number">03</span>
              <h3>Delivery</h3>
              <p>
                Build generation, release operations and
                Play Console responsibilities.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ROLE */}
      <section className="gumb-section gumb-role">
        <div className="gumb-container gumb-role__layout">
          <div className="gumb-section-heading">
            <p className="gumb-eyebrow">MY ROLE</p>
            <h2>
              Owning the Android
              <span> engineering workflow.</span>
            </h2>
          </div>

          <div className="gumb-role__content">
            <p>
              As Android Lead-Developer, I was the primary person
              responsible for the Android application stack. My work
              covered implementation, ongoing maintenance, issue
              investigation, platform upgrades and release activities.
            </p>
            <p>
              The role required attention to application behaviour,
              UI quality, compatibility and the practical steps
              involved in preparing Android builds for release.
            </p>

            <div className="gumb-role-note">
              <span className="gumb-role-note__dot" />
              <p>
                <strong>Core responsibility</strong>
                <span>
                  Android application development and lifecycle ownership.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTRIBUTIONS */}
      <section
        className="gumb-section gumb-contributions"
        id="gumb-contributions"
      >
        <div className="gumb-container">
          <div className="gumb-section-heading gumb-section-heading--wide">
            <p className="gumb-eyebrow">ENGINEERING CONTRIBUTIONS</p>
            <h2>
              Practical work across the
              <span> Android lifecycle.</span>
            </h2>
            <p className="gumb-section-intro">
              Key areas of responsibility during my time at Gumb.ag.
            </p>
          </div>

          <div className="gumb-contributions__grid">
            {responsibilities.map((item) => (
              <article className="gumb-contribution-card" key={item.number}>
                <span className="gumb-card-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* PLATFORM MIGRATION */}
      <section className="gumb-section gumb-migration">
        <div className="gumb-container">
          <div className="gumb-migration__card">
            <div className="gumb-migration__copy">
              <p className="gumb-eyebrow">PLATFORM COMPATIBILITY</p>
              <h2>
                Android 13 <span aria-hidden="true">→</span> Android 14
              </h2>
                <p>
                  The Android 13 to Android 14 upgrade involved SDK changes
                  and build integration challenges involving KSP and Hilt.
                  I worked through the Hilt-related issues and corrected
                  the affected project configuration and code before
                  completing the platform migration.
                </p>
            </div>

            <div className="gumb-migration__visual" aria-label="Android platform upgrade">
              <div className="gumb-version">
                <span>FROM</span>
                <strong>13</strong>
                <small>Android</small>
              </div>
              <span className="gumb-migration__arrow" aria-hidden="true">
                →
              </span>
              <div className="gumb-version gumb-version--current">
                <span>TO</span>
                <strong>14</strong>
                <small>Android</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TECHNOLOGY */}
      <section className="gumb-section gumb-technology">
        <div className="gumb-container gumb-technology__layout">
          <div className="gumb-section-heading">
            <p className="gumb-eyebrow">TECHNOLOGY & TOOLS</p>
            <h2>
              Tools used across
              <span> the development workflow.</span>
            </h2>
            <p className="gumb-section-intro">
              Technologies and tools associated with my Android
              development and delivery responsibilities.
            </p>
          </div>

          <div className="gumb-technology__card">
            <div className="gumb-technology__group">
              <h3>Android Development</h3>
              <div className="gumb-tags">
                {technologies.slice(0, 7).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>

            <div className="gumb-technology__group">
              <h3>Development & Delivery Tools</h3>
              <div className="gumb-tags">
                {technologies.slice(7).map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROFESSIONAL CONTEXT */}
      <section className="gumb-section gumb-context">
        <div className="gumb-container">
          <div className="gumb-context__card">
            <div>
              <p className="gumb-eyebrow">PROFESSIONAL CONTEXT</p>
              <h2>Built on real professional experience.</h2>
            </div>

            <div className="gumb-context__copy">
              <p>
                This page summarises my responsibilities and engineering
                experience during my employment at Gumb.ag.
              </p>
              <p>
                Company source code, private repositories and confidential
                internal materials are not presented here. The page focuses
                on professional responsibilities rather than implying access
                to public source code or unpublished product evidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING */}
      <section className="gumb-closing">
        <div className="gumb-container">
          <p className="gumb-eyebrow">CONTINUING THE JOURNEY</p>
          <h2>
            Strong Android foundations.
            <span> Broader engineering perspective.</span>
          </h2>
          <p>
            Applying application engineering experience to reliable,
            connected and product-focused software.
          </p>

          <div className="gumb-closing__actions">
            <Link to="/work/nexahomeza" className="gumb-button gumb-button--primary">
              Explore NexaHomez <span aria-hidden="true">↗</span>
            </Link>
            <Link to="/work/tapnix" className="gumb-button gumb-button--secondary">
              Explore Tapnix <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Gumb;
