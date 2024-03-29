import Resume from "@/data/resume.pdf";
import ButtonLink from "./ButtonLink";

const Header = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <a href="#about">
              <span>01.</span>
              <span>About</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#experience">
              <span>02.</span>
              <span>Experience</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#work">
              <span>03.</span>
              <span>work</span>
            </a>
          </li>
          <li className="header__nav-item">
            <a href="#contact">
              <span>04.</span>
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
      <ButtonLink
        href={Resume}
        download="Animashaun Fisayo Resume.pdf"
        className="header__download"
      >
        Resume
      </ButtonLink>
    </header>
  );
};

export default Header;
