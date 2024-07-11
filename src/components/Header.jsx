import { useEffect, useState } from "react";
import useWindowWidth from "@/hooks/useWindowWidth";
import Resume from "@/data/resume.pdf";
import ButtonLink from "./ButtonLink";
import MenuImg from "@/assets/img/menu.svg";
import CloseImg from "@/assets/img/close.svg";
import Logo from "./Logo";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(null); // State to track hovered item
  const [hoverOff, setHoverOff] = useState(false); // State to track hover off

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
            {["about", "experience", "work", "contact"].map((section, index) => (
              <li
                className="header__nav-item"
                key={section}
                onMouseEnter={() => {
                  if (hoverOff) {
                    setHoverOff(false);
                  }
                  setHoverIndex(index);
                }}
                onMouseLeave={() => {
                  setHoverOff(true);
                  setHoverIndex(index);
                }}
              >
                <a
                  href={`#${section}`}
                  onClick={handleScrollClick}
                  className={
                    hoverIndex === index && !hoverOff
                      ? "hover"
                      : hoverIndex === index && hoverOff
                      ? "hover-off"
                      : "hover-off"
                  }
                >
                  <span>{`0${index + 1}.`}</span>
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                </a>
              </li>
            ))}
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
