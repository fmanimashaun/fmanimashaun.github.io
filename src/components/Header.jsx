import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Resume from "@/data/resume.pdf";
import ButtonLink from "./ButtonLink";
import MenuImg from "@/assets/img/menu.svg";
import CloseImg from "@/assets/img/close.svg";
import Logo from "./Logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const width = useWindowWidth();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  const handleScrollClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href");
    const targetElement = document.querySelector(targetId);
    targetElement.scrollIntoView({ behavior: "smooth" });
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    setShowMenu(false);
  }, [width]);

  return (
    <header className="header">
      <Logo />
      <div
        className={`header__wrapper ${showMenu && width < 1025 ? "open" : ""}`}
      >
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" onClick={handleScrollClick}>
                <span>01.</span>
                <span>About</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#experience" onClick={handleScrollClick}>
                <span>02.</span>
                <span>Experience</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#work" onClick={handleScrollClick}>
                <span>03.</span>
                <span>work</span>
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" onClick={handleScrollClick}>
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
      {width < 1025 && (
        <>
          {!showMenu && (
            <button className="header__menu-btn" onClick={handleMenu}>
              <img src={MenuImg} alt="mobile menu button" />
            </button>
          )}

          {showMenu && (
            <button className="header__menu-btn open" onClick={handleMenu}>
              <img src={CloseImg} alt="mobile menu button" />
            </button>
          )}
        </>
      )}
    </header>
  );
};

export default Header;
