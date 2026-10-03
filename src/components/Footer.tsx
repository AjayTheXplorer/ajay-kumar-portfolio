import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="container">

        <div className="footer__top">

          <Link to="/" className="footer__brand">
            AJAY KUMAR
          </Link>

          <p>
            Android Engineer · Realtime Systems · IoT
          </p>

          <div className="footer__links">

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

            <a href="#contact">
              Contact
            </a>

          </div>

        </div>

        <div className="footer__bottom">

          <span>
            © {year} AJAY KUMAR. 
          </span>

          <span>
            Built with React · TypeScript
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;