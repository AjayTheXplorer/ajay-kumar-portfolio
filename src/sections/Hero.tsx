import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="container hero__container">

        <motion.div
          className="hero__content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <p className="hero__eyebrow">
            ANDROID · IoT · REALTIME · PRODUCT ENGINEERING
          </p>

          <h1 className="text-hero hero__title">
            Building software
            <span>for the real world.</span>
          </h1>

          <p className="text-body hero__description">
            I build Android applications, realtime systems and
            product-focused software that connect digital systems
            with real-world workflows.
          </p>

          <div className="hero__actions">
            <a href="#work" className="hero__primary-button">
              Explore My Work
              <span>↗</span>
            </a>

            <a href="#experience" className="hero__secondary-button">
              View Experience
            </a>
          </div>

          <div className="hero__meta">
            <span>Android Engineering</span>
            <span>Realtime Systems</span>
            <span>IoT</span>
          </div>
        </motion.div>

        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.15,
            ease: 'easeOut',
          }}
        >
          <div className="hero__visual-glow" />

          <div className="hero__image-frame">
            <img
              src="/images/profile/profile.jpg"
              alt="Professional portrait"
              className="hero__image"
            />
          </div>

          <div className="hero__floating-card">
            <span className="hero__status-dot" />
            <div>
              <strong>Building</strong>
              <small>real-world systems</small>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;