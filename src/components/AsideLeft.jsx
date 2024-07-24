import Aside from "./Aside";
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FaCodepen } from "react-icons/fa";

const AsideLeft = () => {
  return (
    <Aside className="left">
      <div className="aside__icons">
        <a href="https://github.com/fmanimashaun" target="_blank">
          <FiGithub size={20} />
        </a>
        <a href="https://www.instagram.com/fmanimashaun/" target="_blank">
          <FiInstagram size={20} />
        </a>
        <a href="https://twitter.com/fmanimashaun" target="_blank">
          <FiTwitter size={20} />
        </a>
        <a href="https://www.linkedin.com/in/fmanimashaun/" target="_blank">
          <AiOutlineLinkedin size={20} />
        </a>
        <a href="https://codepen.io/fmanimashaun" target="_blank">
          <FaCodepen size={20} />
        </a>
      </div>
    </Aside>
  );
};

export default AsideLeft;
