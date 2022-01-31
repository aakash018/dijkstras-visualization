import React from "react";
import { FaGithub } from "react-icons/fa";

interface Props {
  setShowInfo: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header: React.FC<Props> = ({ setShowInfo }) => {
  const handleInfoClick = () => {
    setShowInfo(true);
  };

  return (
    <header>
      <section className="logo">DIJKASTRA VISUALIZATION</section>
      <section className="info">
        <div onClick={handleInfoClick} className="info--what-is">
          What is dijkstra's algorithm?
        </div>
        <section className="info--github">
          <a
            href="https://github.com/aakash018/dijkstras-visualization"
            target={"_blank"}
          >
            <FaGithub />
          </a>
        </section>
      </section>
    </header>
  );
};

export default Header;
