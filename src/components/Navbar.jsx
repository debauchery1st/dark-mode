import React from "react";
// import useToggle from "../hooks/useToggle";

const Navbar = ({ darkMode, toggleMode, mutation }) => {
  // const [darkMode, toggleMode] = useToggle("darkMode", false);
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleMode = e => {
  //   e.preventDefault(); // ? is this necessary?
  //   setDarkMode(!darkMode);
  // };
  return (
    <nav className={mutation("navbar")}>
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? mutation("toggle toggled") : "toggle"}
        />
      </div>
    </nav>
  );
};

export default Navbar;
