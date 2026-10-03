import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import './Navbar.active-state.css';

type HomeSection =
  | 'work'
  | 'experience'
  | 'engineering'
  | 'about'
  | 'contact'
  | null;

const HOME_SECTIONS: Array<{
  id: Exclude<HomeSection, null>;
  href: string;
  label: string;
}> = [
  { id: 'work', href: '/#work', label: 'Work' },
  { id: 'experience', href: '/#experience', label: 'Experience' },
  { id: 'engineering', href: '/#engineering', label: 'Engineering' },
  { id: 'about', href: '/#about', label: 'About' },
  { id: 'contact', href: '/#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();

  const closeMenu = () => {
    setMenuOpen(false);
  };

  /*
   * Homepage active state
   *
   * Active section is determined directly from the URL hash.
   *
   * Example:
   * /#work        -> Work active
   * /#experience  -> Experience active
   * /#engineering -> Engineering active
   * /#about       -> About active
   * /#contact     -> Contact active
   */
  const getActiveHomeSection = (): HomeSection => {
    if (location.pathname !== '/') {
      return null;
    }

    const hash = location.hash.replace(/^#/, '');

    const matchingSection = HOME_SECTIONS.find(
      (section) => section.id === hash
    );

    return matchingSection?.id ?? null;
  };

  const activeSection = getActiveHomeSection();

  const isCaseStudyActive = (path: string) =>
    location.pathname === path;

  return (
    <header className="navbar">
      <div className="container navbar__inner">

        <Link
          to="/"
          className="navbar__logo"
          onClick={closeMenu}
        >
          Ajay Kumar
        </Link>

        <nav
          id="portfolio-navigation"
          className={`navbar__links ${
            menuOpen ? 'navbar__links--open' : ''
          }`}
          aria-label="Primary navigation"
        >

          {HOME_SECTIONS.map((section) => {
            const active =
              location.pathname === '/' &&
              activeSection === section.id;

            return (
              <a
                key={section.id}
                href={section.href}
                className={active ? 'is-active' : ''}
                aria-current={
                  active ? 'location' : undefined
                }
                onClick={closeMenu}
              >
                {section.label}
              </a>
            );
          })}

          <Link
            to="/work/nexahomeza"
            className={
              isCaseStudyActive('/work/nexahomeza')
                ? 'is-active'
                : ''
            }
            aria-current={
              isCaseStudyActive('/work/nexahomeza')
                ? 'page'
                : undefined
            }
            onClick={closeMenu}
          >
            NexaHomez
          </Link>

          <Link
            to="/work/tapnix"
            className={
              isCaseStudyActive('/work/tapnix')
                ? 'is-active'
                : ''
            }
            aria-current={
              isCaseStudyActive('/work/tapnix')
                ? 'page'
                : undefined
            }
            onClick={closeMenu}
          >
            Tapnix
          </Link>

          <a
            href="/resume/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="navbar__resume"
            onClick={closeMenu}
          >
            Resume
          </a>

        </nav>

        <button
          type="button"
          className={`navbar__menu-button ${
            menuOpen
              ? 'navbar__menu-button--open'
              : ''
          }`}
          onClick={() =>
            setMenuOpen((previous) => !previous)
          }
          aria-label={
            menuOpen
              ? 'Close navigation'
              : 'Open navigation'
          }
          aria-expanded={menuOpen}
          aria-controls="portfolio-navigation"
        >
          <span />
          <span />
          <span />
        </button>

      </div>
    </header>
  );
}

export default Navbar;