import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Resume from "@/data/resume.pdf";
import ButtonLink from "./ButtonLink";
import MenuImg from "@/assets/img/menu.svg";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const width = useWindowWidth();

  useEffect(() => {
    if (width < 768) {
      setShowMenu(true);
      console.log(width);
    } else {
      setShowMenu(false);
      console.log(width);
    }
    return () => {};
  }, [showMenu, width]);
  return (
    <header className="header">
      {!showMenu && (
        <div className="header__wrapper">
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
        </div>
      )}
      {showMenu && (
        <button className="header__menu-btn">
          <img src={MenuImg} alt="mobile menu button" />
        </button>
      )}
    </header>
  );
};

export default Header;
