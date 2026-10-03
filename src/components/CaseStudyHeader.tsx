import { useEffect, useState } from "react";
import "./CaseStudyHeader.css";

type CaseStudyHeaderProps = {
  active?: "nexahomeza" | "tapnix";
};

const CaseStudyHeader = ({
  active,
}: CaseStudyHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isActive = (item: "nexahomeza" | "tapnix") =>
    active === item ? "is-active" : "";

  return (
    <header className="case-study-header">

      <div className="case-study-header-inner">

        {/* Brand */}
        <a
          href="/"
          className="case-study-header-brand"
          aria-label="Back to portfolio home"
          onClick={closeMenu}
        >
          Ajay Kumar
        </a>


        {/* Desktop navigation */}
        <nav
          className="case-study-header-desktop-nav"
          aria-label="Case study navigation"
        >
          <a href="/">Home</a>

          <a
            href="/work/nexahomeza"
            className={isActive("nexahomeza")}
          >
            NexaHomez
          </a>

          <a
            href="/work/tapnix"
            className={isActive("tapnix")}
          >
            Tapnix
          </a>

          <a href="/#contact">
            Contact
          </a>
        </nav>


        {/* Mobile menu button */}
        <button
          type="button"
          className={`case-study-menu-button ${
            isMenuOpen ? "is-open" : ""
          }`}
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="case-study-mobile-menu"
        >
          {isMenuOpen ? (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M5 7h14M5 12h14M5 17h14" />
            </svg>
          )}
        </button>

      </div>


      {/* Mobile backdrop + menu */}
      {isMenuOpen && (
        <div
          className="case-study-mobile-layer"
          aria-hidden="true"
        >
          <button
            type="button"
            className="case-study-mobile-backdrop"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          />

          <nav
            id="case-study-mobile-menu"
            className="case-study-mobile-menu"
            aria-label="Mobile navigation"
            aria-hidden={!isMenuOpen}
          >

            <div className="case-study-mobile-menu-heading">
              <span>MENU</span>

              <button
                type="button"
                onClick={closeMenu}
                aria-label="Close navigation menu"
              >
                <svg
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>


            <a
              href="/"
              className="case-study-mobile-link"
              onClick={closeMenu}
            >
              <span>01</span>
              <strong>Home</strong>
            </a>


            <a
              href="/work/nexahomeza"
              className={`case-study-mobile-link ${isActive("nexahomeza")}`}
              onClick={closeMenu}
            >
              <span>02</span>
              <strong>NexaHomez</strong>
            </a>


            <a
              href="/work/tapnix"
              className={`case-study-mobile-link ${isActive("tapnix")}`}
              onClick={closeMenu}
            >
              <span>03</span>
              <strong>Tapnix</strong>
            </a>


            <a
              href="/#experience"
              className="case-study-mobile-link"
              onClick={closeMenu}
            >
              <span>04</span>
              <strong>Experience</strong>
            </a>


            <a
              href="/#contact"
              className="case-study-mobile-link"
              onClick={closeMenu}
            >
              <span>05</span>
              <strong>Contact</strong>
            </a>


            <div className="case-study-mobile-menu-footer">
              <span>CASE STUDY NAVIGATION</span>
            </div>

          </nav>
        </div>
      )}

    </header>
  );
};

export default CaseStudyHeader;
