import { useEffect } from "react";
import { useLocalStorage } from "../../util/useLocalStorage";
import detectDarkMode from "../../util/detectDarkMode";

import sun from "./sun.svg";
import moon from "./moon.svg";

import "./style.css";

const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prev) => {
      return prev === "light" ? "dark" : "light";
    });
  };

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (e) => {
        const newColorSheme = e.matches ? "dark" : "light";
        setDarkMode(newColorSheme);
      });
  }, [setDarkMode]);

  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";

  return (
    <button
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={moon} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};

export default BtnDarkMode;
