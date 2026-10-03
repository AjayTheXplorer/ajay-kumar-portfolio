import { Link } from 'react-router-dom';
import './FeaturedWork.css';

function FeaturedWork() {
  return (
    <section id="work" className="section featured-work">
      <div className="container">

        <div className="featured-work__header">
          <p className="featured-work__eyebrow">
            SELECTED WORK
          </p>

          <h2 className="text-section">
            Systems and products
            <span>built for real-world use.</span>
          </h2>

          <p className="text-body featured-work__intro">
            A selection of engineering work spanning Android,
            realtime communication, IoT and full-stack product
            development.
          </p>
        </div>

        {/* NexaHomeza */}
        <article className="project-feature project-feature--nexa">

          <div className="project-feature__visual">
            <div className="project-feature__visual-label">
              REALTIME · IoT
            </div>

            <img
              src="/images/nexahomeza/nexahomeza-cover.jpg"
              alt="NexaHomeza smart home automation system"
            />
          </div>

          <div className="project-feature__content">

            <div className="project-feature__index">
              01
            </div>

            <p className="project-feature__category">
              SMART HOME · REALTIME SYSTEM
            </p>

            <h3>
              NexaHomez
            </h3>

            <p className="project-feature__description">
              A realtime smart home automation system connecting
              Android devices, MQTT communication and physical
              ESP8266-controlled devices.
            </p>

            <div className="project-feature__technologies">
              <span>Android</span>
              <span>MQTT</span>
              <span>HiveMQ</span>
              <span>ESP8266</span>
              <span>Firebase</span>
            </div>

            <Link
              to="/work/nexahomeza"
              className="project-feature__link"
            >
              Explore Case Study
              <span>↗</span>
            </Link>

          </div>
        </article>

        {/* Tapnix */}
        <article className="project-feature project-feature--tapnix">

          <div className="project-feature__visual">
            <div className="project-feature__visual-label">
              PRODUCT · FULL-STACK
            </div>

            <img
              src="/images/tapnix/tapnix-cover.png"
              alt="Tapnix smart restaurant management platform"
            />
          </div>

          <div className="project-feature__content">

            <div className="project-feature__index">
              02
            </div>

            <p className="project-feature__category">
              RESTAURANT · REALTIME PRODUCT
            </p>

            <h3>
              Tapnix
            </h3>

            <p className="project-feature__description">
              A smart restaurant management platform connecting
              customer ordering, kitchen operations, waiter
              workflows and session-based billing.
            </p>

            <div className="project-feature__technologies">
              <span>React</span>
              <span>TypeScript</span>
              <span>Django</span>
              <span>PostgreSQL</span>
              <span>Redis</span>
              <span>WebSockets</span>
            </div>

            <Link
              to="/work/tapnix"
              className="project-feature__link"
            >
              Explore Case Study
              <span>↗</span>
            </Link>

          </div>
        </article>

      </div>
    </section>
  );
}

export default FeaturedWork;