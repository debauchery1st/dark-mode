import React from "react";
// import useToggle from "../hooks/useToggle";

const Navbar = ({ darkMode, toggleMode }) => {
  // const [darkMode, toggleMode] = useToggle("darkMode", false);
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault(); // ? is this necessary?
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className={darkMode ? "navbar dark-mode" : "navbar"}>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? "toggle toggled dark-mode" : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
